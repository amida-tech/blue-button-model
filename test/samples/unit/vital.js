"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "vital": {
        "code": "8480-6",
        "name": "Intravascular Systolic",
        "code_system_name": "LOINC"
    },
    "date_time": {
        "point": {
            "date": "2011-07-22T15:00:00Z",
            "precision": "hour"
        }
    },
    "value": 120,
    "unit": "mm[Hg]",
    "status": "completed"
};

samples.valid_1 = {
    "identifiers": [{
        "identifier": "c6f88321-67ad-11db-bd13-0800200c9a66"
    }],
    "vital": {
        "name": "Height",
        "code": "8302-2",
        "code_system_name": "LOINC"
    },
    "status": "completed",
    "date_time": {
        "point": {
            "date": "1999-11-14T00:00:00Z",
            "precision": "day"
        }
    },
    "interpretations": [
        "Normal"
    ],
    "value": 177,
    "unit": "cm"
};

samples.invalid_0 = {
    "identifiers": [{
        "identifier": "c6f88321-67ad-11db-bd13-0800200c9a66"
    }],
    "vital": {
        "name": "Height",
        "code": "8302-2",
        "code_system_name": "LOINC"
    },
    "status": undefined,
    "date_time": {
        "point": {
            "date": "1999-11-14T00:00:00Z",
            "precision": "day"
        }
    },
    "interpretations": {
        "value": "Normal"
    },
    "value": 177,
    "unit": "cm"
};
