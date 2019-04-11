import API from "@/modules/api";
import Stripe from "@/modules/stripe";


export default {

    // Create a new free user and log into it; set the store to track the session.
    signup(context, payload) {
        return API.post("users/", payload)
            // On email conflicts proceed as usual, as user might be a returning one here.
            // Take note of this state though as we don't want to raise GTM events for it if it's a Basic flow.
            .catch(err => {
                if (err && err.code === 409) {
                    return Promise.resolve({ "returning": true });
                }
                return Promise.reject(new Error(err.message));
            })
            .then(data => context.dispatch("login", { ...payload, "returning": !!data.returning }));
    },

    // Logging into existing users instead of new ones is only allowed for Free accounts.
    login(context, payload) {
        // Check credentials.
        return API.post("auth", payload)
            .catch(() => Promise.reject(new Error("There is already an account with your email in the system")))
            // Check user profile using the current token.
            .then(data => Promise.all([data, API.get(`users/${data.uid}`, data.token)]))
            // Proceed only if the user is a free one.
            .then(([login, user]) => {
                if (user.plan) {
                    return Promise.reject(new Error("The chosen account has already been set up."));
                }
                context.commit("LOGIN", {
                    "id": login.uid,
                    "token": login.token,
                    "cToken": login.clientToken,
                    "email": user.email,
                    "subscription": "",
                    "returning": payload.returning,
                });
                return user;
            });
    },

    checkCoupon(context, id) {
        if (!id) {
            context.commit("SET_COUPON", null);
            return Promise.resolve();
        }
        const subSuffix = context.state.subscriptions.selected ? `/${context.state.subscriptions.selected.id}` : "";
        return API.get(`billing/coupons/${id}${subSuffix}`)
            .then(coupon => {
                context.commit("SET_COUPON", coupon);
                return coupon;
            })
            .catch(err => {
                context.commit("SET_COUPON", null);
                return Promise.reject(err);
            });
    },

    purchase(context, payload) {
        return Stripe.getToken(payload)
            .then(id => API.post("billing", {
                "token": id,
                "email": context.state.user.email,
                "plan": context.state.subscription,
                "company": payload.company,
                "coupon": (context.state.coupon && context.state.coupon.id) || null,
            }))
            .then(() => context.commit("SET_PURCHASE", context.state.subscription));
    },

    logout(context) {
        context.commit("LOGOUT");
    },

    selectSubscription(context, payload) {
        context.commit("SET_SUBSCRIPTION", payload);
        if (payload) {
            context.dispatch("subscriptions/fetch");
        }
    },

};
