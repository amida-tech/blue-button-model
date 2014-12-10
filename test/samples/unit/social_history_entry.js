"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "date_time": {
        "low": {
            "date": "2005-05-01T00:00:00Z",
            "precision": "day"
        },
        "high": {
            "date": "2009-02-27T13:00:00Z",
            "precision": "second"
        }
    },
    "identifiers": [{
        "identifier": "2.16.840.1.113883.19",
        "extension": "123456789"
    }],
    "code": {
        "name": "Smoking Status"
    },
    "value": "Former smoker"
};

samples.valid_1 = {
    "date_time": {
        "low": {
            "date": "2005-05-01T00:00:00Z",
            "precision": "day"
        },
        "high": {
            "date": "2009-02-27T13:00:00Z",
            "precision": "second"
        }
    },
    "identifiers": [{
        "identifier": "9b56c25d-9104-45ee-9fa4-e0f3afaa01c1"
    }],
    "code": {
        "name": "Tobacco use and exposure",
        "code": "229819007",
        "code_system_name": "SNOMED CT"
    },
    "value": "1 pack per day"
};

samples.invalid_0 = {
    "date_time": {
        "low": {
            "date": "2005-05-01T00:00:00Z",
            "precision": "day"
        },
        "high": {
            "date": "2009-02-27T13:00:00Z",
            "precision": "second"
        }
    },
    "identifiers": [{
        "identifier": "2.16.840.1.113883.19",
        "extension": "123456789"
    }],
    "code": {
        "name": "Smoking Status"
    },
};

samples.invalid_1 = {
    "code": {
        "name": "Tobacco use and exposure",
        "code": "229819007",
        "code_system_name": "SNOMED CT"
    },
    "value": "1 pack per day",
    "other": "na"
};
