"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/claim');

var expect = chai.expect;

describe('claim unit tests', function () {
    it('sample claim_0', function () {
        bbm.validator.validateSectionObj(samples.valid_0, 'claim');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample valid_1', function () {
        bbm.validator.validateSectionObj(samples.valid_1, 'claim');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateSectionObj(samples.invalid_0, 'claim');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(2);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(2);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.deep.equal(["#/charges", "#/date_time"]);
    });

    it('sample invalid_1', function () {
        bbm.validator.validateSectionObj(samples.invalid_1, 'claim');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        expect(result.errors).to.have.length(2);
        var c2p = util.codeToPath(result.errors);
        expect(c2p.INVALID_TYPE).to.have.length(2);
        expect(c2p.INVALID_TYPE).to.deep.equal(["#/lines", "#/payer/[0]"]);
    });
});
