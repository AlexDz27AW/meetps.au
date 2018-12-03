// Target remote development version of the app.

import _ from "lodash";
import common from "@/configs/common";

export default _.merge(common, {
    "debug": true,
    "api": "https://dev.meet.ps",
    "client": "https://dev.meet.ps",
    "stripe": {
        "key": "pk_test_PQtSMffE0gWr2tvFgPEgp9BX",
    },
});
