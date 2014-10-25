"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "encounter": {
        "name": "OFFICE/OUTPATIENT VISIT EST",
        "code": "99211",
        "code_system_name": "CPT"
    },
    "date_time": {
        "low": {
            "date": "2012-12-10T17:16:12Z",
            "precision": "second"
        }
    },
    "performers": [{
        "name": [{
            "last": "One",
            "first": "Provider,"
        }]
    }]
};

samples.valid_1 = {
    "encounter": {
        "name": "Office outpatient visit 15 minutes",
        "code": "99213",
        "code_system_name": "CPT",
        "translations": [{
            "name": "Ambulatory",
            "code": "AMB",
            "code_system_name": "HL7ActCode"
        }]
    },
    "identifiers": [{
        "identifier": "2a620155-9d11-439e-92b3-5d9815ff4de8"
    }],
    "date_time": {
        "point": {
            "date": "2009-02-27T13:00:00Z",
            "precision": "second"
        }
    },
    "performers": [{
        "identifiers": [{
            "identifier": "PseduoMD-3"
        }],
        "code": [{
            "name": "General Physician",
            "code": "59058001",
            "code_system_name": "SNOMED CT"
        }]
    }],
    "locations": [{
        "name": "Community Urgent Care Center",
        "location_type": {
            "name": "Urgent Care Center",
            "code": "1160-1",
            "code_system_name": "HealthcareServiceLocation"
        },
        "address": [{
            "street_lines": [
                "17 Daws Rd."
            ],
            "city": "Blue Bell",
            "state": "MA",
            "zip": "02368",
            "country": "US"
        }]
    }],
    "findings": [{
        "identifiers": [{
            "identifier": "db734647-fc99-424c-a864-7e3cda82e703",
            "extension": "45665"
        }],
        "value": {
            "name": "Pneumonia",
            "code": "233604007",
            "code_system_name": "SNOMED CT"
        },
        "date_time": {
            "low": {
                "date": "2007-01-03T00:00:00Z",
                "precision": "day"
            }
        }
    }]
};

samples.invalid_0 = {
    "identifiers": [{
        "identifier": "2a620155-9d11-439e-92b3-5d9815ff4de8"
    }, "errenous string"],
    "date_time": {
        "low": {
            "date": "2012-12-10T17:16:12Z",
            "precision": "second"
        }
    },
    "performers": [{
        "name": [{
            "last": "One",
            "first": "Provider,"
        }]
    }]
};
