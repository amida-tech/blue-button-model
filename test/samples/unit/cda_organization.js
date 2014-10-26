"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.9999.1393"
    }],
    "name": [
        "Community Health and Hospitals"
    ],
    "address": [{
        "street_lines": [
            "1001 Village Avenue"
        ],
        "city": "Portland",
        "state": "OR",
        "zip": "99123",
        "country": "US"
    }],
    "phone": [{
        "number": "555-555-5000",
        "type": "work place"
    }],
    "email": [{
        "address": "joedoe@FGTRF.COM",
        "type": "work place"
    }]
};

samples.valid_1 = {
    "name": [
        "Community Health and Hospitals"
    ],
    "address": [{
        "street_lines": [
            "1001 Village Avenue"
        ],
        "city": "Portland",
        "state": "OR",
        "zip": "99123",
        "country": "US"
    }]
};

samples.invalid_0 = {
    "name": "Community Health and Hospitals",
    "address": [{
        "street_lines": [
            "1001 Village Avenue"
        ],
        "city": "Portland",
        "state": "OR",
        "zip": "99123",
        "country": "US"
    }],
    "phone": {
        "number": "555-555-5000",
        "type": "work place"
    },
    "mail": {
        "address": "joedoe@FGTRF.COM",
        "type": "work place"
    }
};
