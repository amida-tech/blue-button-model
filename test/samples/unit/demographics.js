"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "name": {
    "middle": [
      "Isa"
    ],
    "last": "Jones",
    "first": "Isabella"
  },
  "dob": {
    "point": {
      "date": "1975-05-01T00:00:00.000Z",
      "precision": "day"
    }
  },
  "gender": {
    "name": "Female",
    "code": "F",
    "code_system_name": "HL7 AdministrativeGender"
  },
  "identifiers": [{
    "identifier": "2.16.840.1.113883.19.5.99999.2",
    "extension": "998991"
  }, {
    "identifier": "2.16.840.1.113883.4.1",
    "extension": "111-00-2330"
  }],
  "marital_status": {
    "name": "Married",
    "code": "M",
    "code_system_name": "HL7 Marital Status"
  },
  "addresses": [{
    "street_lines": [
      "1357 Amber Drive"
    ],
    "city": "Beaverton",
    "state": "OR",
    "zip": "97867",
    "country": "US",
    "use": "primary home"
  }],
  "phone": [{
    "number": "(816)276-6909",
    "type": "primary home"
  }],
  "race": {
    "name": "White",
    "code": "2106-3",
    "code_system_name": "Race and Ethnicity - CDC"
  },
  "ethnicity": {
    "name": "Not Hispanic or Latino",
    "code": "2186-5",
    "code_system_name": "Race and Ethnicity - CDC"
  },
  "languages": [{
    "language": {
      "code": "en"
    },
    "preferred": true,
    "mode": {
      "name": "Expressed spoken",
      "code": "ESP",
      "code_system_name": "LanguageAbilityMode"
    },
    "proficiency": {
      "name": "Good",
      "code": "G",
      "code_system_name": "LanguageAbilityProficiency"
    }
  }],
  "religion": {
    "name": "Christian (non-Catholic, non-specific)",
    "code": "1013",
    "code_system_name": "HL7 Religious Affiliation"
  },
  "birthplace": {
    "city": "Beaverton",
    "state": "OR",
    "zip": "97867",
    "country": "US"
  },
  "guardians": [{
    "relation": {
      "name": "Parent",
      "code": "PRN",
      "code_system_name": "HL7 Role"
    },
    "addresses": [{
      "street_lines": [
        "1357 Amber Drive"
      ],
      "city": "Beaverton",
      "state": "OR",
      "zip": "97867",
      "country": "US",
      "use": "primary home"
    }],
    "names": [{
      "last": "Jones",
      "first": "Ralph"
    }],
    "phone": [{
      "number": "(816)276-6909",
      "type": "primary home"
    }]
  }]
};

samples.valid_1 = {
  "name": {
    "middle": [
      "Isa"
    ],
    "last": "Jones",
    "first": "Isabella"
  }
};

samples.invalid_0 = {
  "dob": {
    "point": {
      "date": "1975-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "gender": null,
  "identifiers": [{
    "identifier": "2.16.840.1.113883.19.5.99999.2",
    "extension": "998991"
  }, {
    "identifier": "2.16.840.1.113883.4.1",
    "extension": "111-00-2330"
  }],
  "marital_status": "Married",
  "addresses": [{
    "street_lines": [
      "1357 Amber Drive"
    ],
    "city": "Beaverton",
    "state": "OR",
    "zip": "97867",
    "country": "US",
    "use": "primary home"
  }],
  "phone": [{
    "number": "(816)276-6909",
    "type": "primary home"
  }],
  "race": "White",
  "languages": [{
    "language": "en",
    "preferred": true,
    "mode": "Expressed spoken",
    "proficiency": "Good"
  }],
  "religion": "Christian (non-Catholic, non-specific)",
  "birthplace": {
    "city": "Beaverton",
    "state": "OR",
    "zip": "97867",
    "country": "US"
  },
  "guardians": [{
    "relation": "Parent",
    "addresses": [{
      "street_lines": [
        "1357 Amber Drive"
      ],
      "city": "Beaverton",
      "state": "OR",
      "zip": "97867",
      "country": "US",
      "use": "primary home"
    }],
    "names": {
      "last": "Jones",
      "first": "Ralph"
    },
    "phone": [{
      "number": "(816)276-6909",
      "type": "primary home"
    }]
  }]
};

samples.invalid_1 = {
  "name": {
    "middle": [
      "Isa"
    ],
    "last": "Jones",
    "first": "Isabella"
  },
  "race_ethnicity": "White"
};
