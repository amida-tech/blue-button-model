"use strict";

var plan_of_care_entry = require("../unit/plan_of_care_entry");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    plan_of_care_entry.valid_0,
    plan_of_care_entry.valid_1
];

samples.invalid_0 = [
    plan_of_care_entry.valid_0,
    plan_of_care_entry.invalid_0,
    plan_of_care_entry.valid_1
];
