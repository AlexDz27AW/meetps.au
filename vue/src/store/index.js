import Vue from "vue";
import Vuex from "vuex";

import subscriptions from "@/store/modules/subscriptions";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);

const Store = new Vuex.Store({
    "state": {
        // Logged-in user state.
        "user": {
            "id": "",
            // Base token is for API, c(lient)Token for web login.
            "token": "",
            "cToken": "",
            "subscription": "",
        },
        // Set when the landing view loads.
        "subscription": "",
    },

    "modules": {
        "subscriptions": subscriptions,
    },

    mutations,
    actions,
});

const { state } = Store;

export { Store as default, state };
