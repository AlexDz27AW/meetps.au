export default {

    // Set the subscription to be purchased.
    SET_SUBSCRIPTION(state, id) {
        state.subscription = id;
    },

    SET_PURCHASE(state, id) {
        state.user.subscription = id;
    },

    SET_COUPON(state, coupon) {
        state.coupon = coupon;
    },

    // Set new user to work with.
    LOGIN(state, payload) {
        state.user = {
            ...state.user,
            ...payload,
        };
    },

    // Nullify our current session.
    LOGOUT(state) {
        const empty = {};
        Object.keys(state.user).forEach(key => {
            empty[key] = "";
        });
        state.user = empty;
    },
};
