<template>
    <main id="app">
        <router-view></router-view>
    </main>
</template>


<script>

import Vue from "vue";
import VueGTM from "vue-gtm";
import VueGA from "vue-analytics";

import config from "@config";
import router from "@/router";

Vue.use(VueGTM, {
    "id": config.GTM,
    "enabled": !!config.GTM,
    "debug": config.debug,
    "vueRouter": router,
});

Vue.use(VueGA, {
    "id": config.GA,
    "disableScriptLoader": !config.GA,
    router,
});


export default {
    router,
};

</script>
