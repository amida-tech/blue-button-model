"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "plan": {
        "name": "Colonoscopy",
        "code": "73761001",
        "code_system_name": "SNOMED CT"
    },
    "identifiers": [{
        "identifier": "9a6d1bac-17d3-4195-89a4-1121bc809b4a"
    }],
    "date_time": {
        "center": {
            "date": "2012-05-12T00:00:00Z",
            "precision": "day"
        }
    },
    "type": "observation"
};

samples.valid_1 = {
    "plan": {
        "name": "Colonoscopy",
        "code": "73761001",
        "code_system_name": "SNOMED CT"
    },
    "type": "procedure"
};

samples.invalid_0 = {
    "plan": {
        "name": "Colonoscopy",
        "code": "73761001",
        "code_system_name": "SNOMED CT"
    }
};

samples.invalid_1 = {
    "plan": {
        "name": "Colonoscopy",
        "code": "73761001",
        "code_system_name": "SNOMED CT"
    },
    "type": "procedure",
    "other": "na"
};
