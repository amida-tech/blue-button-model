"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var expect = chai.expect;

describe('sanity checks', function () {
    it('invalid component', function () {
        var dummy = {
            "value": "dummy"
        };
        var valid = bbm.validator.validateComponent(dummy, 'not-a-component');
        expect(valid).to.be.false;
    });
});
