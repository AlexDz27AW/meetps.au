<template>
    <main id="app">
        <router-view></router-view>
    </main>
</template>


<script>

import Vue from "vue";
import VueGTM from "vue-gtm";
import VueTooltip from "v-tooltip";

import config from "@config";
import router from "@/router";

import "@/assets/scss/v-tooltip.scss";

Vue.use(VueGTM, {
    "id": config.GTM,
    "enabled": !!config.GTM,
    "debug": config.debug,
    "vueRouter": router,
});


Vue.use(VueTooltip);


export default {
    router,
};

</script>
