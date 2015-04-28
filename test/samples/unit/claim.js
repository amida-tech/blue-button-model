"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "payer": [
        "medicare"
    ],
    "number": "1234567890000",
    "date_time": {
        "low": {
            "date": "2012-10-18T00:00:00Z",
            "precision": "day"
        },
        "high": {
            "date": "2012-10-18T00:00:00Z",
            "precision": "day"
        }
    },
    "lines": [{
        "line": "1",
        "date_time": {
            "low": {
                "date": "2012-10-18T00:00:00Z",
                "precision": "day"
            },
            "high": {
                "date": "2012-10-18T00:00:00Z",
                "precision": "day"
            }
        },
        "procedure": {
            "code": "98941",
            "description": "Chiropractic Manipulative Treatment (Cmt); Spinal, Three To Four Regions"
        },
        "quantity": {
            "value": 1,
            "unit": "line"
        },
        "modifier": [{
            "code": "AT",
            "description": "Acute Treatment (This Modifier Should Be Used When Reporting Service 98940, 98941, 98942)"
        }],
        "charges": {
            "price_billed": "$60.00",
            "insurance_paid": "$34.00",
            "patient_responsibility": "$26.00"
        },
        "place_of_service": {
            "code": "11",
            "name": "Office"
        },
        "type": {
            "code": "1",
            "name": "Medical Care"
        },
        "performers": [{
            "type": "rendering provider",
            "identifiers": [{
                "identifier": "2.16.840.1.113883.4.6",
                "extension": "123456789"
            }]
        }]
    }],
    "charges": {
        "price_billed": "$60.00",
        "insurance_paid": "$34.00",
        "provider_paid": "$27.20",
        "patient_responsibility": "$6.80"
    },
    "type": [
        "medicare PartB"
    ],
    "diagnosis": [{
        "code": "3534"
    }, {
        "code": "7393"
    }, {
        "code": "7392"
    }, {
        "code": "3533"
    }]
};

samples.valid_1 = {
    "payer": [
        "medicare"
    ],
    "number": "12345678900000VAA",
    "date_time": {
        "low": {
            "date": "2012-09-22T00:00:00Z",
            "precision": "day"
        }
    },
    "lines": [{
        "line": "1",
        "date_time": {
            "low": {
                "date": "2012-09-22T00:00:00Z",
                "precision": "day"
            }
        },
        "revenue": {
            "code": "0250",
            "description": "General Classification PHARMACY"
        },
        "quantity": {
            "value": 1,
            "unit": "line"
        },
        "charges": {
            "price_billed": "$14.30",
            "insurance_paid": "$14.30",
            "patient_responsibility": "$0.00"
        }
    }, {
        "line": "2",
        "date_time": {
            "low": {
                "date": "2012-09-22T00:00:00Z",
                "precision": "day"
            }
        },
        "revenue": {
            "code": "0320",
            "description": "General Classification DX X"
        },
        "procedure": {
            "code": "74020",
            "description": "Radiologic Examination, Abdomen; Complete, Including Decubitus And/Or Erect Views"
        },
        "quantity": {
            "value": 1,
            "unit": "line"
        },
        "charges": {
            "price_billed": "$175.50",
            "insurance_paid": "$175.50",
            "patient_responsibility": "$0.00"
        }
    }, {
        "line": "3",
        "date_time": {
            "low": {
                "date": "2012-09-22T00:00:00Z",
                "precision": "day"
            }
        },
        "revenue": {
            "code": "0450",
            "description": "General Classification EMERG ROOM"
        },
        "procedure": {
            "code": "99283",
            "description": "Emergency Department Visit For The Evaluation And Management Of A Patient, Which Requires Th"
        },
        "quantity": {
            "value": 1,
            "unit": "line"
        },
        "modifier": [{
            "code": "25",
            "description": "Significant, Separately Identifiable Evaluation And Management Service By The Same Physician On"
        }],
        "charges": {
            "price_billed": "$315.00",
            "insurance_paid": "$315.00",
            "patient_responsibility": "$0.00"
        }
    }, {
        "line": "4",
        "revenue": {
            "code": "0001",
            "description": "Total Charges"
        },
        "quantity": {
            "value": 0,
            "unit": "line"
        },
        "charges": {
            "price_billed": "$504.80",
            "insurance_paid": "$504.80",
            "patient_responsibility": "$0.00"
        }
    }],
    "charges": {
        "price_billed": "$504.80",
        "insurance_paid": "$504.80",
        "provider_paid": "$126.31",
        "patient_responsibility": "$38.84"
    },
    "type": [
        "medicare Outpatient"
    ],
    "diagnosis": [{
        "code": "56400"
    }, {
        "code": "7245"
    }, {
        "code": "V1588"
    }]
};

samples.invalid_0 = {
    "payer": [
        "medicare"
    ],
    "number": "1234567890000",
    "date_time": {
        "low": {
            "date": "2012-10-18T00:00:00Z",
            "precision": "day"
        }
    },
    "charges": {
        "price_billed": "$60.00",
        "insurance_paid": "$34.00",
        "provider_paid": "$27.20",
        "patient_responsibility": "$6.80",
        "writeoff": "$10.00"
    },
    "type": [
        "medicare PartB"
    ],
    "diagnosis": [{
        "code": "3534"
    }, {
        "code": "7393"
    }, {
        "code": "7392"
    }, {
        "code": "3533"
    }]
};

samples.invalid_1 = {
    "payer": [
        true
    ],
    "number": "12345678900000VAA",
    "date_time": {
        "low": {
            "date": "2012-09-22T00:00:00Z",
            "precision": "day"
        }
    },
    "lines": {
        "line": "1",
        "date_time": {
            "low": {
                "date": "2012-09-22T00:00:00Z",
                "precision": "day"
            }
        },
        "revenue": {
            "code": "0250",
            "description": "General Classification PHARMACY"
        },
        "quantity": {
            "value": 1,
            "unit": "line"
        },
        "charges": {
            "price_billed": "$14.30",
            "insurance_paid": "$14.30",
            "patient_responsibility": "$0.00"
        }
    },
    "charges": {
        "price_billed": "$504.80",
        "insurance_paid": "$504.80",
        "provider_paid": "$126.31",
        "patient_responsibility": "$28.84"
    },
    "type": [
        "medicare Outpatient"
    ],
    "diagnosis": [{
        "code": "56400"
    }, {
        "code": "7245"
    }, {
        "code": "V1588"
    }]
};
