"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "value": 90,
  "unit": "ml/min"
};

samples.invalid_0 = {};

samples.invalid_1 = {
  "value": 90
};

samples.invalid_2 = {
  "unit": "ml/min"
};

samples.invalid_3 = {
  "value": 90,
  "unit": "ml/min",
  "other": "na"
};
