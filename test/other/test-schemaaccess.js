"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/allergies');

var expect = chai.expect;

describe('expanded schema access', function () {
    var list = bbm.schemas.list(true);
    var map = bbm.schemas.map(true);

    describe('list vs map sanity check', function () {
        list.forEach(function (element) {
            var id = element.id;
            it(id, function () {
                expect(map).to.include.keys(id);
                expect(element).to.deep.equal(map[id]);
            });
        });
    });
});

describe('schema access', function () {
    var list = bbm.schemas.list();
    var map = bbm.schemas.map();

    describe('list vs map sanity check', function () {
        list.forEach(function (element) {
            var id = element.id;
            if (id) {
                it(id, function () {
                    expect(map).to.include.keys(id);
                    expect(element).to.deep.equal(map[id]);
                });
            }
        });
    });

    it('common_models available as array', function () {
        expect(map).to.have.property('common_models').that.is.an('array');
    });
});
