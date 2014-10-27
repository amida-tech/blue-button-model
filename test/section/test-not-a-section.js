"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var expect = chai.expect;

describe('sanity checks', function () {
    it('invalid section', function () {
        var dummy = {
            "value": "dummy"
        };
        var valid = bbm.validator.validateSection(dummy, 'not-a-section');
        expect(valid).to.be.false;
    });
});
