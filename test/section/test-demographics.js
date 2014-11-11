"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var samples = require('../samples/section/demographics');

var expect = chai.expect;

describe('demographics section tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validateSection(samples.valid_0, 'demographics');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validateSection(samples.invalid_0, 'demographics');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
    });
});
