"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/cda_coded_entry');

var expect = chai.expect;

describe('cda_coded_entry unit tests', function () {
    it('sample cda_date_0', function () {
        var valid = bbm.validator.validate(samples.valid_0, 'cda_coded_entry');
        expect(valid).to.be.true;
    });

    it('sample valid_1', function () {
        var valid = bbm.validator.validate(samples.valid_1, 'cda_coded_entry');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validate(samples.invalid_0, 'cda_coded_entry');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result).to.have.length(1);
        var c2p = util.errorsToCodePathMap(result);
        expect(c2p.OBJECT_PROPERTIES_MINIMUM).to.have.length(1);
        expect(c2p.OBJECT_PROPERTIES_MINIMUM[0]).to.equal("#/");
    });

    it('sample invalid_1', function () {
        var valid = bbm.validator.validate(samples.invalid_1, 'cda_coded_entry');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result).to.have.length(2);
        var c2p = util.errorsToCodePathMap(result);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(1);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).to.equal("#/");
        expect(c2p.INVALID_TYPE).to.have.length(1);
        expect(c2p.INVALID_TYPE[0]).to.equal("#/translations");
    });
});
