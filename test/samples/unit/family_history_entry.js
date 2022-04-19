"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "name": {
    "last": "Doe",
    "first": "Joe"
  },
  "relationship": "Father",
  "dead": false,
  "conditions": [{
    "code": "22298006",
    "code_system_name": "SNOMED CT",
    "name": "Myocardial infarction"
  }],
  "dob": {
    "point": {
      "date": "1975-05-01T00:00:00Z",
      "precision": "day"
    }
  }
};

samples.valid_1 = {
  "name": {
    "last": "Doe",
    "first": "Joe"
  },
  "relationship": "Father",
};

samples.invalid_0 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "name": {
    "last": "Doe",
    "first": "Joe"
  },
  "dead": "F",
  "conditions": [{
    "code": "22298006",
    "code_system_name": "SNOMED CT",
    "name": "Myocardial infarction"
  }],
  "dob": {
    "point": {
      "date": "1975-05-01T00:00:00Z",
      "precision": "day"
    }
  }
};

samples.invalid_1 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "relationship": "Father",
  "name": {
    "last": "Doe",
    "first": "Joe"
  },
  "dead": "F",
  "conditions": [{
    "code": "22298006",
    "code_system_name": "SNOMED CT",
    "name": "Myocardial infarction"
  }],
  "dob": {
    "point": {
      "date": "1975-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "other": "na"
};
