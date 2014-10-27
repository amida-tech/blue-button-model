"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var samples = require('../samples/section/social_history');

var expect = chai.expect;

describe('social_history section tests', function () {
    it('sample valid_0', function () {
        bbm.validator.validateSection(samples.valid_0, 'social_history');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateSection(samples.invalid_0, 'social_history');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
    });
});
