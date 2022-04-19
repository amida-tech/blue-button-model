"use strict";

var encounter = require("../unit/encounter");

var samples = {};

module.exports = samples;

samples.valid_0 = [
  encounter.valid_0,
  encounter.valid_1
];

samples.invalid_0 = [
  encounter.valid_0,
  encounter.invalid_0,
  encounter.valid_1
];
