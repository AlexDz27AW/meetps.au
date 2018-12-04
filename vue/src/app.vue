<template>
    <main id="app">
        <router-view></router-view>
    </main>
</template>


<script>

import Vue from "vue";
import VueGTM from "vue-gtm";

import config from "@config";
import router from "@/router";

Vue.use(VueGTM, {
    "id": config.GTM,
    "enabled": !!config.GTM,
    "debug": config.debug,
    "vueRouter": router,
});


export default {
    router,
};

</script>
