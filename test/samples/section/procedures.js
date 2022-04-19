"use strict";

var procedure = require("../unit/procedure");

var samples = {};

module.exports = samples;

samples.valid_0 = [
  procedure.valid_0,
  procedure.valid_1
];

samples.invalid_0 = [
  procedure.valid_0,
  procedure.invalid_0,
  procedure.valid_1
];
