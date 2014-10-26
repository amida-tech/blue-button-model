"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/plan_of_care_entry');

var expect = chai.expect;

describe('plan_of_care_entry unit tests', function () {
    it('sample valid_0', function () {
        bbm.validator.validateSectionObj(samples.valid_0, 'plan_of_care_entry');
        var result = bbm.validator.getLastError();
        console.log(result.errors);
        expect(result.valid).to.be.true;
    });

    it('sample valid_1', function () {
        bbm.validator.validateSectionObj(samples.valid_1, 'plan_of_care_entry');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateSectionObj(samples.invalid_0, 'plan_of_care_entry');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(2);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(1);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).to.equal("#/");
        expect(c2p.OBJECT_REQUIRED).to.have.length(1);
        expect(c2p.OBJECT_REQUIRED[0]).to.equal("#/");
    });
});
