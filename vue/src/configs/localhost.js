// Target remote development version of the app.

const _ = require("lodash");
const common = require("./common");

module.exports = _.merge(common, {
    "debug": true,
    "app": "https://local.meet.ps:8443",
    "baseURL": "/",
    "stripe": {
        "key": "pk_test_PQtSMffE0gWr2tvFgPEgp9BX",
    },
});
