<template>
    <section class="fallback">
        <p>This is a debug map of available entry points into the SPA.</p>
        <p><router-link to="/account/">Start the Basic flow</router-link></p>
        <p><router-link to="/account/G03-T20-PRO-M">Start the Pro flow</router-link></p>
        <p><router-link to="/account/G03-T20-PRO-Y">Start the Pro flow (Annual)</router-link></p>
        <p><router-link to="/account/G03-T30-PREMIUM-M">Start the Premium flow</router-link></p>
        <p><router-link to="/account/G03-T40-ENTERPRISE-M">Enterprise flow</router-link></p>
    </section>
</template>

<script>

import config from "@config";

export default {
    "props": {
        config,
    },
};

</script>

<style lang="scss">
</style>
