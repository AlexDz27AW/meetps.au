<template>
    <div class="login-container">

        <div class="login-left-part billing-banner">

            <div class="logo-section"></div>
            <div class="live-audience-platform">LIVE AUDIENCE PLATFORM</div>

            <div class="billing-banner-info">
                <div class="billing-banner-info-title">
                    Free iPad
                </div>
                <div class="billing-banner-info-desc">
                    with Purchase <br class="hide-768" />
                    of Annual <br class="show-768" /> Premium <br class="hide-768" />
                    or Enterprise package
                </div>
                <img
                    src="@/assets/img/ipad.png"
                    class="billing-banner-info-img"
                />
            </div>
        </div>

        <div class="login-right-part">
            <div class="fill-in-title">
                Fill in your billing info
            </div>

            <form
                class="right-form"
                @submit.prevent="submit"
            >


                <input-text
                    placeholder="Company Name"
                    required
                ></input-text>

                <div class="how-able-text">
                    How will you  be paying today?
                </div>

                <input-text
                    v-model="card"
                    :error="errCard"
                    placeholder="Card number"
                    required
                ></input-text>

                <div class="row">

                    <div class="col-sm-6">

                        <input-text
                            v-model="expiry"
                            :error="errExpiry"
                            placeholder="MM/YY"
                            required
                        ></input-text>

                    </div>

                    <div class="col-sm-6">

                        <input-text
                            v-model="cvv"
                            placeholder="CVV"
                            required
                        ></input-text>

                    </div>

                </div>

                <div class="row plan-price-section">
                    <h2 class="header header--small"></h2>
                    <div class="note centered"></div>

                    <div class="col-sm-6 col-xs-12">

                        <div class="plan-type">
                            <span>
                                {{ subInfo.name + (subInfo.name ? " plan" : '') }}
                            </span>
                            /
                            {{ subInfo.interval === "month" ? "one-time" : "annual" }}
                        </div>

                        <div class="row">
                            <div class="col-sm-7 one-price-left">
                                {{ subInfo.name + (subInfo.name ? " plan" : '') }}
                            </div>
                            <div class="col-sm-5 one-price-right">
                                {{ '$' + (subInfo.amount / 100) + '.00' }}
                            </div>
                        </div>

                        <hr class="one-price-hr" />

                        <div class="row">
                            <div class="col-sm-7 one-price-left">
                                Total
                            </div>
                            <div class="col-sm-5 one-price-right">
                                {{ '$' + (subInfo.amount / 100) + '.00' }}
                            </div>
                        </div>

                        <a
                            href="#"
                            class="add-promo-code"
                        >
                            Add promo code
                        </a>

                        <input
                            :disabled="!isFilled || isLocked"
                            :value="submitCaption"
                            type="submit"
                            name="submit"
                            class="submit-btn submit-btn-left"
                        />

                    </div>

                    <div class="col-sm-6 col-xs-3 money-back-parent">
                        <img src="@/assets/img/money-back.png" />
                    </div>

                    <div class="col-sm-12 col-xs-9 having-trouble">
                        Having trouble checking out? Email us or give us a call at 1&nbsp;(800)&nbsp;388-2039. All prices are in USD
                    </div>
                </div>

            </form>

        </div>
    </div>
</template>


<script>

import Joi from "joi";
import { mapState } from "vuex";

import InputText from "@/components/input-text.vue";
import InputSelect from "@/components/input-select.vue";
import { state } from "@/store";
import config from "@config";

const validator = Joi.object().keys({
    "card": Joi.string().required().creditCard(),
    "cvv": Joi.string().required().regex(/\d{3,4}/),
    "expiry": Joi.string().required().regex(/\d{2}\/\d{2}/),
});

const validatorMessages = {
    "card": "Please provide a valid card number",
    "expiry": "Please provide the expiry date in MM/YY format",
    "cvv": "Card validation number is a 3 or 4-digit code",
};


export default {

    "components": {
        InputText,
        InputSelect,
    },

    "data": () => ({
        // Main form data.
        "card": "",
        "expiry": "",
        "cvv": "",
        // Related error strings.
        "errName": "",
        "errCard": "",
        "errExpiry": "",
        "errCvv": "",
        "errGeneral": "",
        "isLocked": false,
    }),

    "computed": {
        ...mapState("subscriptions", {
            "subInfo": "selected",
        }),

        isFilled() {
            return this.card && this.expiry && this.cvv;
        },

        isSubscribed() {
            return !!this.$store.state.user.subscription;
        },

        submitCaption() {
            return `Pay $${this.subInfo.amount / 100}.00`;
        },
    },

    "props": [
        // Sub hint from Route.
        "subscription",
    ],

    "watch": {
        // The end target of this view is to set a user subscription.
        isSubscribed(flag) {
            if (!flag) {
                return;
            }
            const pageView = `/register/complete/${this.$store.state.subscription}`;
            this.$gtm.trackView("Paid registration complete", pageView);
            this.$ga.page(pageView);
            setTimeout(() => {
                window.location.href = `${config.client}/?t=${this.$store.state.user.cToken}`;
            }, 1000);
        },
    },


    // Purchase requires a login and a valid target sub.
    beforeRouteEnter(from, to, next) {
        // Make sure we're coming here after locking onto the user and target sub.
        let isOk;
        if (!state.subscription || !state.user.id) {
            isOk = false;
        }
        next(isOk);
    },


    "methods": {
        getPayload() {
            return {
                "card": this.card,
                "expiry": this.expiry,
                "cvv": this.cvv,
            };
        },

        clearErrors() {
            this.errName = this.errCard = this.errExpiry = this.Cvv = this.errGeneral = "";
        },

        submit() {
            this.clearErrors();

            const payload = this.getPayload();
            const result = Joi.validate(payload, validator, { "abortEarly": false });
            const fields = result.error && result.error.details.map(d => {
                const field = d.path && d.path[0];
                this[`err${field.charAt(0).toUpperCase()}${field.substring(1)}`] = validatorMessages[field];
                return field;
            });
            if (fields && fields.length) {
                this.errGeneral = "Please recheck the form";
                return;
            }

            this.isLocked = true;

            this.$store.dispatch("purchase", payload)
                .catch(err => {
                    this.errGeneral = err.message;
                    this.isLocked = false;
                });
        },
    },

};

</script>
