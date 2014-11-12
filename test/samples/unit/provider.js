"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "address": {
        "use": "primary home",
        "street_lines": [
            "123 Any Rd"
        ],
        "city": "Anywhere",
        "state": "MD",
        "zip": "99999",
        "country": "United States"
    },
    "type": {
        "name": "NHC"
    },
    "organization": {
        "name": [
            "ANY CARE"
        ]
    }
};

samples.valid_1 = {
    "name": {
        "first": "Jane",
        "last": "Doe"
    },
    "type": {
        "name": "PHY"
    }
};

samples.invalid_0 = {
    "name": {
        "first": "Jane",
        "last": "Doe"
    },
    "type": {
        "name": "PHY"
    },
    "organization": "PCC",
    "validstate": "OR"
};

samples.invalid_1 = {
    "name": {
        "first": "Jane",
        "last": "Doe"
    },
    "type": {
        "name": "PHY"
    },
    "organization": "PCC"
};

samples.invalid_2 = {
    "name": {
        "given": "Jane",
        "last": "Doe"
    },
    "type": {
        "name": "PHY"
    }
};
