"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "number": "555-555-5000",
    "type": "work place"
};

samples.valid_1 = {
    "number": "555-555-5000"
};

samples.invalid_0 = {};

samples.invalid_1 = {
    "number": "555-555-5000",
    "type": "work place",
    "other": "na"
};
