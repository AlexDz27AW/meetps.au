// Target remote development version of the app.

const _ = require("lodash");
const common = require("./common");

module.exports = _.merge(common, {
    // This is more like a "staging/development", for black-box testing.
    "debug": false,
    "app": "https://dev.meet.ps",
    "baseURL": "/funnel/",
    "stripe": {
        "key": "pk_test_PQtSMffE0gWr2tvFgPEgp9BX",
    },
});
