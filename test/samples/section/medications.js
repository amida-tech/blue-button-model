"use strict";

var medication = require("../unit/medication");

var samples = {};

module.exports = samples;

samples.valid_0 = [
  medication.valid_0,
  medication.valid_1
];

samples.invalid_0 = [
  medication.valid_0,
  medication.invalid_0,
  medication.invalid_0
];
