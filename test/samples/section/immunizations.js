"use strict";

var immunization = require("../unit/immunization");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    immunization.valid_0,
    immunization.valid_1
];

samples.invalid_0 = [
    immunization.invalid_0,
    immunization.valid_0,
    immunization.valid_1
];
