"use strict";

var result = require("../unit/result");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    result.valid_0,
    result.valid_1
];

samples.invalid_0 = [
    result.invalid_0,
    result.valid_1,
    result.valid_0,
    result.valid_1
];

samples.invalid_1 = [
    result.valid_0,
    result.invalid_1,
    result.valid_0,
    result.valid_1
];
