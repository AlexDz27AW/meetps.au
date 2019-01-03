import "@babel/polyfill";
// Polyfill string.normalize for a Joi[-browser] dependency.
import "unorm";

import Vue from "vue";

import App from "@/app.vue";
import Store from "@/store";

// CSS dependencies
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "@/assets/css/common.css";


/* eslint-disable no-unused-vars */
const Root = new Vue({
    "el": "#app",
    "store": Store,
    render(h) {
        return h(App);
    },
});
