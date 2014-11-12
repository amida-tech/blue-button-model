"use strict";

var claim = require("../unit/claim.js");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    claim.valid_0,
    claim.valid_1
];

samples.invalid_0 = [
    claim.valid_0,
    claim.valid_1,
    claim.invalid_1,
    claim.valid_0
];

samples.invalid_1 = [
    claim.invalid_0,
    claim.valid_1,
    claim.valid_1,
    claim.valid_0
];
