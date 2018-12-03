<template>
    <div
        :class="{ 'one-input-parent--error': error }"
        class="one-input-parent"
    >
        <input
            :autocomplete="autocomplete"
            :type="type"
            :value="value"
            :required="required"
            class="input-text"
            @input="$emit('input', $event.target.value)"
        />
        <span class="floating-label">{{ placeholder }}</span>
        <div
            v-show="error"
            :title="error"
            class="tip"
        >
        </div>
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
    },

    "computed": {

        "type": function getInputType() {
            return this.password ? "password" : "text";
        },

    },

};

</script>


<style scoped lang="scss">

.one-input-parent--error {
    .input-text {
        border-color: red;
    }
}

.tip {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
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
        top: 0.1em;
        content: "?";
        color: white;
    }
}

</style>
