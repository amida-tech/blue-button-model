"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var samples = require('../samples/section/social_history');

var expect = chai.expect;

describe('social_history section tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validateSection(samples.valid_0, 'social_history');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validateSection(samples.invalid_0, 'social_history');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
    });
});
