"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "address": "xde@sjdu.com",
    "type": "work place"
};

samples.valid_1 = {
    "address": "xde@sjdu.com"
};

samples.invalid_0 = {};

samples.invalid_1 = {
    "address": "xde@sjdu.com",
    "type": "work place",
    "other": "na"
};
