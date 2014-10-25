"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "identifiers": [{
        "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
    }],
    "product": {
        "code": "72506001",
        "name": "Automatic implantable cardioverter/defibrillator",
        "code_system_name": "SNOMED CT"
    },
    "date_time": {
        "point": {
            "date": "2007-05-01T00:00:00Z",
            "precision": "day"
        }
    }
};

samples.valid_1 = {
    "product": {
        "code": "72506001",
        "name": "Automatic implantable cardioverter/defibrillator",
        "code_system_name": "SNOMED CT"
    }
};

samples.invalid_0 = {
    "identifiers": [],
    "product": {
        "code": "72506001",
        "name": "Automatic implantable cardioverter/defibrillator",
        "code_system_name": "SNOMED CT"
    },
    status: 21,
    "date_time": {
        "point": {
            "date": "2007-05-01T00:00:00Z",
            "precision": "day"
        }
    }
};
