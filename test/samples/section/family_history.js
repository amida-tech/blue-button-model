"use strict";

var family_history_entry = require("../unit/family_history_entry");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    family_history_entry.valid_0,
    family_history_entry.valid_1
];

samples.invalid_0 = [
    family_history_entry.valid_0,
    family_history_entry.valid_1,
    family_history_entry.invalid_0,
    family_history_entry.invalid_0
];
