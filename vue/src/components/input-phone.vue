<template>
    <div
        :class="{ 'one-input-parent--error': error }"
        class="one-input-parent one-input-parent-phone"
    >
        <vue-tel-input
            v-model="phone"
            :preferred-countries="['us', 'gb']"
            :placeholder="placeholder"
            required
        >
        </vue-tel-input>

        <!--<span class="floating-label">{{ placeholder }}</span>-->
        <div
            v-show="error"
            :title="error"
            class="tip"
        >
        </div>
    </div>
</template>

<script>

import Vue from "vue";

import "vue-tel-input/dist/vue-tel-input.css";
import VueTelInput from "vue-tel-input";

Vue.use(VueTelInput);

export default {

    "components": {
        VueTelInput,
    },

    "data": () => ({
        "phone": "",
    }),

    "props": {
        "placeholder": String,
        "required": Boolean,
        "error": String,
    },

    "watch": {
        phone(val) {
            this.$emit("input", val);
        },
    },

};

</script>


<style scoped lang="scss">

.one-input-parent--error {
    border-color: red;
}

.tip {
    position: absolute;
    top: 0;
    right: 0;
    height: 1.5em;
    width: 1.5em;
    background-color: red;
    border-radius: 100%;
    text-align: center;
    font-size: 0.75em;
    font-weight: 600;
    cursor: pointer;

    &:before {
        position: relative;
        top: 0.25em;
        content: "?";
        color: white;
    }
}

.vue-tel-input ul {
    z-index: 1;
}

</style>
