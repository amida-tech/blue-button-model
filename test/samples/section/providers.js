"use strict";

var provider = require("../unit/provider");

var samples = {};

module.exports = samples;

samples.valid_0 = [
  provider.valid_0,
  provider.valid_1
];

samples.invalid_0 = [
  provider.valid_0,
  provider.valid_1,
  provider.invalid_0,
  provider.invalid_0
];
