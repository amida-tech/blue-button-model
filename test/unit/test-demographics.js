"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/demographics');

var expect = chai.expect;

describe('demographics unit tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validate(samples.valid_0, 'demographics');
        expect(valid).to.be.true;
    });

    it('sample valid_1', function () {
        var valid = bbm.validator.validate(samples.valid_1, 'demographics');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validate(samples.invalid_0, 'demographics');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result).to.have.length(10);
        var c2p = util.errorsToCodePathMap(result);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).to.have.length(1);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY[0]).to.equal("#/");
        expect(c2p.INVALID_TYPE).to.have.length(9);
        expect(c2p.INVALID_TYPE).to.deep.equal(["#/gender", "#/guardians/0/names", "#/guardians/0/relation", "#/languages/0/language", "#/languages/0/mode", "#/languages/0/proficiency", "#/marital_status", "#/race", "#/religion"]);
    });
});
