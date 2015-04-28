"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/procedure');

var expect = chai.expect;

describe('procedure unit tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validate(samples.valid_0, 'procedure');
        expect(valid).to.be.true;
    });

    it('sample valid_1', function () {
        var valid = bbm.validator.validate(samples.valid_1, 'procedure');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validate(samples.invalid_0, 'procedure');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result).to.have.length(2);
        var c2p = util.errorsToCodePathMap(result);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).to.have.length(2);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).to.deep.equal(["#/", "#/date_time/point"]);
    });

    it('sample invalid_1', function () {
        var valid = bbm.validator.validate(samples.invalid_1, 'procedure');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        expect(result).to.have.length(2);
        var c2p = util.errorsToCodePathMap(result);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(1);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.deep.equal(["#/"]);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).to.have.length(1);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).to.deep.equal(["#/date_time/point"]);
    });

    it('sample invalid_2', function () {
        var valid = bbm.validator.validate(samples.invalid_2, 'procedure');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        console.log("Martz: " + JSON.stringify(result));
        expect(result).to.have.length(2);
        var c2p = util.errorsToCodePathMap(result);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.have.length(1);
        expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).to.deep.equal(["#/specimen"]);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).to.have.length(1);
        expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).to.deep.equal(["#/date_time/point"]);
    });
});
