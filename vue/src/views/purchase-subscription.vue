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
                    v-model="company"
                    :error="errCompany"
                    placeholder="Company Name"
                    required
                ></input-text>

                <div class="how-able-text">
                    How will you  be paying today?
                </div>

                <input-text
                    v-model="card"
                    :error="errCard"
                    masktype="card"
                    placeholder="Card number"
                    required
                    confidential
                ></input-text>

                <div class="row">

                    <div class="col-sm-6">

                        <input-text
                            v-model="expiry"
                            :error="errExpiry"
                            masktype="expiry"
                            placeholder="MM / YY"
                            required
                            confidential
                        ></input-text>

                    </div>

                    <div class="col-sm-6">

                        <input-text
                            v-model="cvv"
                            masktype="cvv"
                            placeholder="CVV"
                            required
                            confidential
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
                        <generic-error :text="errGeneral"></generic-error>
                        <div>
                            Having trouble checking out? Talk to us
                            <a
                                href="#"
                                @click.prevent="showIntercom"
                            >through Intercom</a>,
                            <a href="mailto:support@meetingpulse.net?subject=Problem%20checking%20out">email us</a>,
                            or give us a call at
                            <a
                                class="footer__link"
                                href="tel:+14154509646"
                            >1&nbsp;(415)&nbsp;450-9646</a>.
                            All prices are in USD
                        </div>
                    </div>
                </div>

            </form>

        </div>
    </div>
</template>


<script>

import Joi from "joi-browser";
import { mapState } from "vuex";

import InputText from "@/components/input-text.vue";
import InputSelect from "@/components/input-select.vue";
import GenericError from "@/components/generic-error.vue";

import { state } from "@/store";
import config from "@config";

const validator = Joi.object().keys({
    "company": Joi.string().required().min(2),
    "card": Joi.string().required().creditCard(),
    "cvv": Joi.string().required().regex(/\d{3,4}/),
    "expiry": Joi.string().required().regex(/\d{2}\/\d{2}/),
});

const validatorMessages = {
    "company": "Please provide the name of your organization",
    "card": "Please provide a valid card number",
    "expiry": "Please provide the expiry date in MM/YY format",
    "cvv": "Card validation number is a 3 or 4-digit code",
};


export default {

    "components": {
        InputText,
        InputSelect,
        GenericError,
    },

    "data": () => ({
        // Main form data.
        "company": "",
        "card": "",
        "expiry": "",
        "cvv": "",
        // Related error strings.
        "errCompany": "",
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
            return this.isLocked ? "Processing..." : `Pay $${this.subInfo.amount / 100}.00`;
        },
    },

    "props": [
        // Sub hint from Route.
        "subscription",
    ],

    "watch": {
        // The end target of this view is to set a user subscription.
        isSubscribed(flag) {
            if (flag) {
                // NB: virtual page view and purchase data is now handled in the app (check the Beholder module).
                window.location.href = `${config.app}/?t=${this.$store.state.user.cToken}&fnl=1`;
            }
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

        showIntercom() {
            if (!config.debug) {
                this.$intercom.showNewMessage("Hi! I'm having problems with the checkout.");
            }
        },

        getPayload() {
            return {
                "card": this.card.replace(/[^\d]/g, "").trim(),
                "expiry": this.expiry.replace(/[^\d/]/g, ""),
                "cvv": this.cvv,
                "company": this.company,
            };
        },

        clearErrors() {
            this.errCompany = this.errCard = this.errExpiry = this.Cvv = this.errGeneral = "";
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
                this.errGeneral = "There was a problem with your information";
                return;
            }

            this.isLocked = true;

            this.$store.dispatch("purchase", payload)
                .catch(err => {
                    let text = "Failed to send your data; please retry in a minute or contact support";
                    if (err && err.message) {
                        text = err.message;
                    }
                    this.errGeneral = text;
                    this.isLocked = false;
                });
        },

        sendPurchaseEvent() {
            // This is probably too "logical" to be in a modelview, but welp.
            const sub = this.$store.state.subscriptions.selected;
            const amount = (parseInt(sub.amount, 10) / 100).toFixed(2);
            this.$gtm.trackEvent({
                "event": "purchase",
                "ecommerce": {
                    "currencyCode": "USD",
                    "purchase": {
                        "actionField": {
                            "id": this.$store.state.user.id,
                            "affiliation": "Purchase from the Funnel form",
                            "revenue": amount,
                            "shipping": "0",
                            "tax": "0",
                        },
                        "products": [{
                            "name": `${sub.name} ${sub.interval === "month" ? "Monthly" : "Annual"}`,
                            "id": this.$store.state.subscription,
                            "price": amount,
                            "quantity": 1,
                        }],
                    },
                },
            });
        },
    },

};

</script>
