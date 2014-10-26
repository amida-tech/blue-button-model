"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "date_time": {
        "low": {
            "date": "2008-01-03T00:00:00Z",
            "precision": "day"
        },
        "high": {
            "date": "2008-01-03T00:00:00Z",
            "precision": "day"
        }
    },
    "identifiers": [{
        "identifier": "ab1791b0-5c71-11db-b0de-0800200c9a66"
    }],
    "problem": {
        "code": {
            "name": "Pneumonia",
            "code": "233604007",
            "code_system_name": "SNOMED CT"
        },
        "date_time": {
            "low": {
                "date": "2008-01-03T00:00:00Z",
                "precision": "day"
            },
            "high": {
                "date": "2008-01-03T00:00:00Z",
                "precision": "day"
            }
        }
    },
    "onset_age": "57",
    "onset_age_unit": "Year",
    "status": {
        "name": "Resolved",
        "date_time": {
            "low": {
                "date": "2008-01-03T00:00:00Z",
                "precision": "day"
            },
            "high": {
                "date": "2009-02-27T13:00:00Z",
                "precision": "second"
            }
        }
    },
    "patient_status": "Alive and well",
    "source_list_identifiers": [{
        "identifier": "ec8a6ff8-ed4b-4f7e-82c3-e98e58b45de7"
    }]
};

samples.valid_1 = {
    "problem": {
        "code": {
            "name": "Asthma",
            "code": "195967001",
            "code_system_name": "SNOMED CT"
        },
        "date_time": {
            "low": {
                "date": "2007-01-03T00:00:00Z",
                "precision": "day"
            },
            "high": {
                "date": "2008-01-03T00:00:00Z",
                "precision": "day"
            }
        }
    }
};

samples.invalid_0 = {
    "negation_indicator": "true",
    "problem": {
        "code": {
            "name": "Asthma",
            "code": "195967001",
            "code_system_name": "SNOMED CT"
        },
        "date_time": {
            "low": {
                "date": "2007-01-03T00:00:00Z",
                "precision": "day"
            },
            "high": {
                "date": "2008-01-03T00:00:00Z",
                "precision": "day",
                "time_zone": "EST"
            }
        }
    }
};
