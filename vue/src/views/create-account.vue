<template>

    <div class="login-container">

        <div class="login-left-part">

            <div class="logo-section"></div>
            <div class="live-audience-platform">LIVE AUDIENCE PLATFORM</div>

        </div>

        <div class="login-right-part">

            <div class="main-title">
                Create your {{ subscription ? '' : "free" }} account
            </div>

            <div class="or-login">
                or <a href="//app.meet.ps/login">login in to your account</a>
            </div>

            <form
                class="right-form"
                @submit.prevent="submit"
            >

                <input-text
                    v-model="email"
                    :error="errEmail"
                    placeholder="Your email"
                    autocomplete="email"
                    required
                ></input-text>

                <input-text
                    v-model="password"
                    :error="errPassword"
                    placeholder="Password"
                    autocomplete="current-password"
                    password
                    required
                ></input-text>

                <input-text
                    v-model="name"
                    :error="errName"
                    placeholder="Name"
                    autocomplete="name"
                    required
                ></input-text>

                <div v-if="!subscription">

                    <input-phone
                        v-model="phone"
                        :error="errPhone"
                        placeholder="Phone"
                        required
                    ></input-phone>

                    <input-text
                        v-model="company"
                        :error="errCompany"
                        placeholder="Company"
                    ></input-text>

                    <input-text
                        v-model="title"
                        :error="errTitle"
                        placeholder="Title"
                    ></input-text>

                </div>

                <input-checkbox
                    v-model="tos"
                    :error="errTos"
                >
                    I agree to the
                    <a
                        href="//meet.ps/terms-of-service/"
                        target="_blank"
                    >
                        Terms and Conditions
                    </a>
                    and to receive emails from MeetingPulse. I may unsubscribe at any time.
                    More details are in the
                    <a
                        href="//meet.ps/privacy-policy/"
                        target="_blank"
                    >
                        Privacy policy
                    </a>
                    .
                </input-checkbox>

                <generic-error :text="errGeneral"></generic-error>

                <input
                    :disabled="!isFilled || isLocked"
                    :value="!isLocked ? 'Create account' : 'Creating...'"
                    type="submit"
                    name="submit"
                    class="submit-btn"
                    @submit.prevent="submit"
                />

            </form>

        </div>

    </div>

</template>


<script>

import Joi from "joi";

import config from "@config";
import { state } from "@/store";
import InputText from "@/components/input-text.vue";
import InputCheckbox from "@/components/input-checkbox.vue";
import InputPhone from "@/components/input-phone.vue";
import GenericError from "@/components/generic-error.vue";


const validators = {
    "paid": Joi.object().keys({
        "name": Joi.string().required().min(2),
        "email": Joi.string().email({ "minDomainAtoms": 2 }),
        "password": Joi.string().min(8),
        "intent": Joi.string().allow(""),
    }),
    "free": Joi.object().keys({
        "name": Joi.string().required().min(2),
        "email": Joi.string().email({ "minDomainAtoms": 2 }),
        "password": Joi.string().min(8),
        // Proper phone validation is done on server-side.
        "phone": Joi.string().min(4),
        "company": Joi.string().allow(""),
        "title": Joi.string().allow(""),
    }),
};

const validatorMessages = {
    "name": "Please provide your name",
    "email": "A valid email is required",
    "password": "Password must have at least 8 characters",
};


export default {

    "data": () => ({
        // Main data chunk.
        "name": "",
        "email": "",
        "password": "",
        "tos": false,
        // Required field for the Basic flow.
        "phone": "",
        "company": "",
        "title": "",
        // Error reporting for the above.
        "errName": "",
        "errPassword": "",
        "errTos": "",
        "errEmail": "",
        "errPhone": "",
        "errCompany": "",
        "errTitle": "",
        // General error message.
        "errGeneral": "",
        "isLocked": false,
        // Target sub is deduced from the URL.
    }),

    // Input goes from Router parameters.
    "props": [
        "subscription",
    ],

    "computed": {
        isFilled() {
            return !!(this.name && this.email && this.password && this.tos);
        },
        isLoggedIn() {
            return !!this.$store.state.user.token;
        },
    },

    "components": {
        InputText,
        InputCheckbox,
        InputPhone,
        GenericError,
    },

    "watch": {
        isLoggedIn(flag) {
            // No "complete" view for now.
            if (!flag) {
                return;
            }

            if (this.subscription) {
                this.$router.push(`/register/subscribe/${this.subscription}`);
            }
            else {
                const pageView = "/register/complete/";
                this.$gtm.trackView("Basic registration complete", pageView);
                setTimeout(() => {
                    window.location.href = `${config.client}/?t=${this.$store.state.user.cToken}`;
                }, 1000);
            }
        },
    },

    "methods": {

        getPayload() {
            let base = {
                "name": this.name,
                "email": this.email,
                "password": this.password,
            };
            if (this.subscription) {
                base.intent = this.subscription;
            }
            else {
                base = {
                    ...base,
                    "phone": this.phone,
                    "company": this.company,
                    // FIXME: add person's title to Pipedrive.
                    "title": this.title,
                };
            }
            return base;
        },

        validate() {
            const payload = this.getPayload();
            const validator = validators[payload.intent ? "paid" : "free"];
            const result = Joi.validate(payload, validator, { "abortEarly": false });
            const fields = result.error && result.error.details.map(d => {
                const field = d.path && d.path[0];
                this[`err${field.charAt(0).toUpperCase()}${field.substring(1)}`] = validatorMessages[field];
                return field;
            });
            if (fields && fields.length) {
                this.errGeneral = "There was a problem with your information";
                return false;
            }
            if (!this.tos) {
                this.errTos = this.errGeneral = "Please accept the Terms of Service";
                return false;
            }

            return true;
        },

        // Revert all UI errors.
        clearErrors() {
            this.errName = this.errEmail = this.errPassword = this.errPhone = this.errCompany = this.errTitle = "";
            this.errGeneral = this.errTos = "";
        },

        // Process the form.
        submit() {
            // Client-side validation.
            this.clearErrors();
            const check = this.validate();
            if (!check) {
                return;
            }

            this.isLocked = true;

            // Successful signup will switch to another view, so no UI unlock will be needed.
            this.$store.dispatch("signup", this.getPayload())
                .catch(err => {
                    this.errGeneral = err.message;
                    this.isLocked = false;
                });
        },

    },

    // View prerequisites regarding the main store.
    beforeRouteEnter(from, to, next) {
        // Need a blank session.
        let isOk;
        if (state.user.id) {
            isOk = false;
        }
        next(isOk);
    },

    beforeMount() {
        // Persist the target subscription to our state on load.
        this.$store.dispatch("selectSubscription", this.subscription);
    },

};
</script>
