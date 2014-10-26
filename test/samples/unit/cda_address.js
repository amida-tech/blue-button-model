"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "street_lines": [
        "1357 Amber Drive"
    ],
    "city": "Beaverton",
    "state": "OR",
    "zip": "97867",
    "country": "US",
    "use": "primary home"
};

samples.valid_1 = {
    "street_lines": [
        "1357 Amber Drive"
    ],
    "city": "Beaverton",
};

samples.invalid_0 = {
    "street_lines": {
        "1": "1357 Amber Drive"
    },
    "state": "OR",
    "zip": "97867",
    "country": "US",
    "use": "primary home",
    "other": "na"
};
