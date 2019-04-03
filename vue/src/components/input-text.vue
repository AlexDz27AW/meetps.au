<template>
    <div
        :class="{ 'one-input-parent--error': error }"
        class="one-input-parent"
    >
        <input
            v-mask="mask"
            :autocomplete="autocomplete"
            :type="type"
            :value="value"
            :required="required"
            :class="{ 'fs-masked': confidential }"
            class="input-text"
            @input="$emit('input', $event.target.value)"
        />
        <span class="floating-label">{{ placeholder }}</span>

        <div
            v-tooltip="{ content: error, placement: 'left', trigger: 'click hover', classes: 'error' }"
            v-show="error"
            class="tip error"
        ></div>

        <div
            v-tooltip="{ content: message, placement: 'left', trigger: 'click hover', classes: 'message' }"
            v-show="message"
            class="tip message"
        ></div>
    </div>
</template>

<script>

//         data-bind="value: data.nameFirst, valueUpdate: 'keyup', css: { 'input--error': ui.errors.nameFirst }"
export default {

    "data": () => ({}),

    "props": {
        "placeholder": String,
        "autocomplete": String,
        "password": Boolean,
        "value": String,
        "required": Boolean,
        "error": String,
        "message": String,
        "masktype": String,
        "confidential": Boolean,
    },

    "computed": {

        type() {
            return this.password ? "password" : "text";
        },

        mask() {
            switch (this.masktype) {
                case "card":
                    return "#### #### #### ####";
                case "expiry":
                    return "## / ##";
                case "cvv":
                    return "####";
                default:
                    return "";
            }
        },

    },

};

</script>


<style lang="scss">

@import "@/assets/scss/_defaults.scss";

.one-input-parent--error {
    .input-text {
        border-color: $error;
    }
}

.tip {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    height: 1.5em;
    width: 1.5em;
    border-radius: 100%;
    text-align: center;
    font-size: 0.75em;
    font-weight: 600;
    cursor: pointer;

    &:before {
        position: relative;
        top: 0.1em;
        color: white;
    }

    &.error {
        background-color: $error;
        &:before {
            content: "?";
        }
    }

    &.message {
        background-color: $highlight;
        &:before {
            content: \u2713;
        }
    }
}

.tooltip {
    &.error .tooltip-inner {
        color: $error;
    }
    &.message .tooltip-inner {
        color: $highlight;
    }
}
</style>
