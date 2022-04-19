"use strict";

var payer = require("../unit/payer");

var samples = {};

module.exports = samples;

samples.valid_0 = [
  payer.valid_0,
  payer.valid_1
];

samples.invalid_0 = [
  payer.valid_0,
  payer.invalid_0,
  payer.valid_1
];
