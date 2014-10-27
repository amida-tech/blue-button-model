"use strict";

var problem = require("../unit/problem");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    problem.valid_0,
    problem.valid_1
];

samples.invalid_0 = [
    problem.valid_0,
    problem.invalid_0,
    problem.valid_1
];
