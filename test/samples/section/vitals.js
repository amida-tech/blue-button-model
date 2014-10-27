"use strict";

var vital = require("../unit/vital");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    vital.valid_0,
    vital.valid_1
];

samples.invalid_0 = [
    vital.invalid_0,
    vital.invalid_0,
    vital.valid_0,
    vital.valid_1
];
