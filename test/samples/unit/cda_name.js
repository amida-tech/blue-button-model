"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "prefix": "Dr",
    "last": "Levin",
    "middle": ["R"],
    "suffix": "the 7th",
    "first": "Henry"
};

samples.invalid_0 = {
    "last": "Levin",
    "middle": "R",
    "suffix": "the 7th",
    "first": "Henry",
    "other": "na"
};
