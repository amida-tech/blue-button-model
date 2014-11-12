"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/cda_performer');

var expect = chai.expect;

describe('cda_performer unit tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validate(samples.valid_0, 'cda_performer');
        expect(valid).to.be.true;
    });

    it('sample valid_1', function () {
        var valid = bbm.validator.validate(samples.valid_1, 'cda_performer');
        expect(valid).to.be.true;
    });

    it('sample valid_2', function () {
        var valid = bbm.validator.validate(samples.valid_2, 'cda_performer');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validate(samples.invalid_0, 'cda_performer');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result).to.have.length(3);
        var c2p = util.errorsToCodePathMap(result);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(1);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).to.equal("#/");
        expect(c2p.INVALID_TYPE).to.have.length(2);
        expect(c2p.INVALID_TYPE).to.deep.equal(["#/code", "#/name"]);
    });
});
