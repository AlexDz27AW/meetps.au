import config from "@config";

// Hacky: inject client-side dependency on Stripe.
// No proper webpack-capable Stripe package found :(
const [body] = document.querySelectorAll("body");
const script = document.createElement("script");
script.src = "https://js.stripe.com/v1/";
script.onload = () => {
    window.Stripe.setPublishableKey(config.stripe.key);
};
body.appendChild(script);


// Get a corresponding payment token from billing details.
const getToken = ({ card, expiry, cvv }) => {
    if (!(card && expiry && cvv)) {
        return Promise.reject(new Error("Some of the billing information is missing"));
    }

    const expMatch = expiry.toString().match(/(^\d{2})[^\d]?(\d{2})/);
    const [, expMonth, expYear] = expMatch;
    if (!(expMonth && expYear)) {
        return Promise.reject(new Error("Please recheck your card expiry date"));
    }

    const payload = {
        "number": card,
        "exp_month": expMonth,
        "exp_year": expYear,
        "cvc": cvv,
    };

    return new Promise((resolve, reject) => {
        window.Stripe.createToken(payload, (status, response) => {
            if (response.error) {
                const msg = (response.error && response.error.message) || "Please recheck your card data";
                return reject(new Error(msg));
            }
            return resolve(response.id);
        });
    });
};


export default {
    getToken,
};
