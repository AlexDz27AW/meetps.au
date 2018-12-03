<template>
    <select
        :value="value"
        class="select"
        required
        @input="$emit('input', $event.target.value)"
    >
        <option
            value=""
            hidden
        >
            {{ placeholder }}
        </option>

        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :selected="value === option.value"
        >
            {{ option.caption }}
        </option>
    </select>
</template>

<script>
export default {

    "props": {
        "value": String,
        "placeholder": String,
        "options": Array,
    },

};
</script>

<style scoped lang="scss">
select {
    box-sizing: border-box;
    margin: 0 0 1em;
    width: 100%;
    font-size: 1.25em;
    border: solid  silver;
    border-width: 0 0 1px 0;
    background-color: white;
    padding: .2em;
    outline: none;

    &--error {
        border-color: red;
    }

    &, option {
        color: black;
    }

    &:invalid, option[value=""] {
        color: silver;
    }
}
</style>
