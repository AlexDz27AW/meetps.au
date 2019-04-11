import _ from "lodash";

import API from "@/modules/api";
import Router from "@/router";


export default {
    "namespaced": true,

    "state": {
        "isFetched": false,
        "list": [],
        "selected": {},
        "coupon": null,
    },

    "actions": {
        // Fetch the list of subscriptions from API on init.
        fetch(context) {
            if (context.state.list.length) {
                return Promise.resolve();
            }
            return API.get("billing/products/")
                .then(subs => context.commit("SAVE_LIST", subs))
                .then(() => context.dispatch("select"));
        },

        // Find the subscription object the SPA is expected to work with or "die".
        select(context, payload) {
            const id = payload || context.rootState.subscription;
            if (!id) {
                return;
            }
            const s = _.find(context.state.list, { id });
            if (!s) {
                Router.push("/account/");
                return;
            }
            context.commit("SELECT", s);
        },
    },

    "mutations": {
        SAVE_LIST(state, payload) {
            state.list = payload;
            state.isFetched = true;
        },

        SELECT(state, payload) {
            state.selected = payload;
        },
    },
};
