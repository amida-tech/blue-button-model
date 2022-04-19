"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
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
  }],
  "phone": [{
    "number": "555-555-5000"
  }]
};
samples.valid_1 = {
  "name": "Community Urgent Care Center"
};

samples.invalid_0 = {};

samples.invalid_1 = {
  "name": "Community Urgent Care Center",
  "phone": {
    "number": "555-555-5000"
  },
  "address": {
    "street_lines": [
      "17 Daws Rd."
    ],
    "city": "Blue Bell",
    "state": "MA",
    "zip": "02368",
    "country": "US"
  },
  "other": "na"

};
