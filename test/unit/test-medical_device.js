"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/medical_device');

var expect = chai.expect;

describe('medical_device unit tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validateComponent(samples.valid_0, 'medical_device');
        expect(valid).to.be.true;
    });

    it('sample valid_1', function () {
        var valid = bbm.validator.validateComponent(samples.valid_1, 'medical_device');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validateComponent(samples.invalid_0, 'medical_device');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result.errors).to.have.length(2);
        var c2p = util.errorsToCodePathMap(result.errors);
        expect(c2p.ARRAY_LENGTH_SHORT).to.have.length(1);
        expect(c2p.ARRAY_LENGTH_SHORT[0]).to.equal("#/identifiers");
        expect(c2p.INVALID_TYPE).to.have.length(1);
        expect(c2p.INVALID_TYPE[0]).to.equal("#/status");
    });
});
