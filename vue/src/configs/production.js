// Target main production instance of the app.

import _ from "lodash";
import common from "@/configs/common";

export default _.merge(common, {
    "debug": false,
    "api": "https://backend.meet.ps",
    "client": "https://app.meet.ps",
    // PK stands for "public key", i.e. safe to disseminate.
    "stripe": {
        "key": "pk_live_Gn01j4YTxxT8VrGxA2mFnAjf",
    },

});
