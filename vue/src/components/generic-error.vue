<template>
    <div
        :class=" { hidden: !text }"
        class="generic-error"
    >
        <div class="generic-error__inner">
            {{ text || "&nbsp;" }}
        </div>
    </div>
</template>


<script>

export default {
    "data": () => ({}),
    "props": [
        "text",
    ],
};

</script>


<style lang="scss">

@import "@/assets/scss/_defaults.scss";

.generic-error {
    margin: 1em;
    text-align: center;

    &.hidden {
        opacity: 0;
    }

    &__inner {
        display: inline-block;
        padding: 0.5em 0.75em;
        border: solid $font 1px;
        width: auto;
        border-radius: 0.5em;
        color: $error;
    }

}

</style>
