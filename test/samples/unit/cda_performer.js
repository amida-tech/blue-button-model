"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.9999.456",
        "extension": "2981824"
    }],
    "name": [{
        "last": "Assigned",
        "first": "Amanda"
    }],
    "address": [{
        "street_lines": [
            "1021 Health Drive"
        ],
        "city": "Ann Arbor",
        "state": "MI",
        "zip": "99099",
        "country": "US"
    }],
    "organization": [{
        "identifiers": [{
            "identifier": "2.16.840.1.113883.19.5.9999.1394"
        }],
        "name": [
            "Good Health Clinic"
        ]
    }],
    "phone": [{
        "number": "555-555-5000",
        "type": "work place"

    }]
};

samples.valid_1 = {
    "name": ["Amana"],
    "type": "rendering provider",
};

samples.valid_2 = {
    "identifiers": [{
        "identifier": "2.16.840.1.113883.19"
    }],
    "address": [{
        "street_lines": [
            "123 Insurance Road"
        ],
        "city": "Blue Bell",
        "state": "MA",
        "zip": "02368",
        "country": "US",
        "use": "work place"
    }],
    "phone": [{
        "number": "(781)555-1515",
        "type": "work place"
    }],
    "organization": [{
        "name": [
            "Good Health Insurance"
        ],
        "address": [{
            "street_lines": [
                "123 Insurance Road"
            ],
            "city": "Blue Bell",
            "state": "MA",
            "zip": "02368",
            "country": "US",
            "use": "work place"
        }],
        "phone": [{
            "number": "(781)555-1515",
            "type": "work place"
        }]
    }],
    "code": [{
        "code": "PAYOR",
        "code_system_name": "HL7 RoleCode"
    }]
};

samples.invalid_0 = {
    "name": null,
    "other": "na",
    "code": "anything"
};
