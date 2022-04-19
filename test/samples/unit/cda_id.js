"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "identifier": "2.16.840.1.113883.19.5",
  "extension": "996-756-495"
};

samples.valid_1 = {
  "identifier": "2.16.840.1.113883.19.5"
};

samples.invalid_0 = {};

samples.invalid_1 = {
  "identifier": "2.16.840.1.113883.19.5",
  "extension": "996-756-495",
  "other": "na"
};
