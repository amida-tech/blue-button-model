"use strict";

var social_history_entry = require("../unit/social_history_entry");

var samples = {};

module.exports = samples;

samples.valid_0 = [
  social_history_entry.valid_0,
  social_history_entry.valid_1
];

samples.invalid_0 = [
  social_history_entry.valid_0,
  social_history_entry.invalid_0,
  social_history_entry.valid_1
];

samples.invalid_1 = [
  social_history_entry.invalid_1,
  social_history_entry.valid_0,
  social_history_entry.valid_1
];
