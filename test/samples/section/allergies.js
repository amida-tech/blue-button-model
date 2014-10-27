"use strict";

var allergy = require("../unit/allergy");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    allergy.valid_0,
    allergy.valid_1
];

samples.invalid_0 = [
    allergy.valid_0,
    allergy.invalid_0,
    allergy.valid_1,
    allergy.invalid_1
];
