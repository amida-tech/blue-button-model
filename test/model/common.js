"use strict";

var chai = require('chai');

var bbm = require('../../index.js');
var util = require('../lib/util');

var expect = chai.expect;

exports.validateSample = function (sampleJSON) {
    var valid = bbm.validator.validateDocumentModel(sampleJSON);
    var result = bbm.validator.getLastError();
    if (!valid) {
        console.log(JSON.stringify(result, undefined, 2));
    }
    expect(valid).to.be.true;
    expect(result.valid).to.be.true;
};
