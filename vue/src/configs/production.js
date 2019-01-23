// Target main production instance of the app.

const _ = require("lodash");
const common = require("./common");

module.exports = _.merge(common, {
    "debug": false,
    "app": "https://app.meet.ps",
    "baseURL": "/register/",
    // PK stands for "public key", i.e. safe to disseminate.
    "stripe": {
        "key": "pk_live_Gn01j4YTxxT8VrGxA2mFnAjf",
    },

});
