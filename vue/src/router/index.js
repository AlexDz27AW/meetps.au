
import Vue from "vue";
import VueRouter from "vue-router";

import ActionSelection from "@/views/action-selection.vue";
import CreateAccount from "@/views/create-account.vue";
import PurchaseSubscription from "@/views/purchase-subscription.vue";

import config from "@config";

Vue.use(VueRouter);


const routes = [
    {
        "path": "/account/:subscription?",
        "component": CreateAccount,
        "props": true,
    }, {
        "path": "/subscribe/:subscription?",
        "component": PurchaseSubscription,
        "props": true,
    },
];

// Conditional root route.
if (config.debug) {
    routes.push({
        "path": "*",
        "component": ActionSelection,
    });
}
else {
    routes.push({
        "path": "*",
        "redirect": "/account/",
    });
}


const Router = new VueRouter({
    "mode": "history",
    "base": config.baseURL,
    routes,
});


export default Router;
