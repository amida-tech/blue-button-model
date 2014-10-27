"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/plan_of_care');

var expect = chai.expect;

describe('plan_of_care section tests', function () {
    it('sample valid_0', function () {
        bbm.validator.validateSection(samples.valid_0, 'plan_of_care');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateSection(samples.invalid_0, 'plan_of_care');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        var al = util.errorsToArrayIndices(result.errors);
        expect(al).to.deep.equal([1]);
    });
});
