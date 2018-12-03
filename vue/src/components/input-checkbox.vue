<template>
    <div class="one-input-parent">
        <div class="cb">
            <label>
                <div class="cb-area">
                    <input
                        :checked="value"
                        class="hidden"
                        type="checkbox"
                        @change="toggle"
                    />
                    <span class="ui-checkbox"></span>
                </div>
                <div class="cb-label">
                    <slot></slot>
                </div>
            </label>
        </div>
    </div>
</template>

<script>

//         data-bind="value: data.nameFirst, valueUpdate: 'keyup', css: { 'input--error': ui.errors.nameFirst }"
export default {

    "data": () => ({}),

    "props": {
        "value": Boolean,
        "error": String,
    },

    "methods": {

        toggle(e) {
            this.$emit("input", e.target.checked);
        },

    },

};

</script>


<style scoped lang="scss">

.cb {
    text-align: left;
}

.cb-label {
    font-family: 'SFUIDisplayRegular', sans-serif;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.6px;
    margin-left: 2.5em;
    color: #979797;
}

.cb-label a {
    color: #5020FF;
}

.hidden {
    display: none;
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

</style>
