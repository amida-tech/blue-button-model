"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "date": "2007-01-03T00:00:00Z",
  "precision": "day"
};

samples.valid_1 = {
  "date": "2007-01-03T00:00:00Z"
};

samples.invalid_0 = {};

samples.invalid_1 = {
  "date": "2007-01-03T00:00:00Z",
  "precision": "day",
  "other": "na"
};
