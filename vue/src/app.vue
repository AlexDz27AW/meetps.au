<template>
    <main id="app">
        <router-view></router-view>
    </main>
</template>


<script>

import Vue from "vue";
import VueGTM from "vue-gtm";
import VueTooltip from "v-tooltip";
import VueIntercom from "vue-intercom";
import VueMask from "v-mask";

import config from "@config";
import router from "@/router";

import "@/modules/fullstory";
import "@/assets/scss/v-tooltip.scss";

Vue.use(VueGTM, {
    "id": config.GTM,
    "enabled": !!config.GTM,
    "debug": config.debug,
    "vueRouter": router,
});

Vue.use(VueIntercom, {
    "appId": config.intercom,
});

Vue.use(VueTooltip);

Vue.use(VueMask);


export default {
    router,
    mounted() {
        if (!config.debug) {
            this.$intercom.boot();
        }
    },
};

</script>
