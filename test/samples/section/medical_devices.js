"use strict";

var medical_device = require("../unit/medical_device");

var samples = {};

module.exports = samples;

samples.valid_0 = [
    medical_device.valid_0,
    medical_device.valid_1
];

samples.invalid_0 = [
    medical_device.valid_0,
    medical_device.valid_1,
    medical_device.invalid_0,
    medical_device.invalid_0
];
