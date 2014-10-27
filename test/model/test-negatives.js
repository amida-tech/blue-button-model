"use strict";

var chai = require('chai');
var fs = require("fs");
var path = require('path');
var _ = require('underscore');

var bbm = require('../../index.js');

var util = require('../lib/util');
var expect = chai.expect;

var sectionNames = [
    'allergies',
    'claims',
    'demographics',
    'encounters',
    'family_history',
    'immunizations',
    'medical_devices',
    'medications',
    'payers',
    'plan_of_care',
    'problems',
    'procedures',
    'providers',
    'results',
    'social_history',
    'vitals'
];

var invalidSections = sectionNames.reduce(function (r, name) {
    var sectionSamples = require('../samples/section/' + name);
    r[name] = sectionSamples.invalid_0;
    return r;
}, {});

describe('check valid json\'s', function () {
    var fileToJSON = function (filename) {
        var directory = path.join(__dirname, '../samples/actual');
        var p = path.join(directory, filename);
        var content = fs.readFileSync(p);
        var result = JSON.parse(content);
        return result;
    };

    var checkValid = function (filename) {
        var json = fileToJSON(filename);
        var val = bbm.validator.validateDocumentModel(json);
        var err = bbm.validator.getLastError();
        expect(err.valid).to.be.true;
        Object.keys(json.data).forEach(function (sectionName) {
            var original = json.data[sectionName];
            json.data[sectionName] = invalidSections[sectionName];
            bbm.validator.validateDocumentModel(json);
            var e = bbm.validator.getLastError();
            expect(e.valid).to.be.false;
            var components = util.errorsToPathComponents(e.errors, 2);
            expect(components).to.have.length(1);
            expect(components[0]).to.equal(sectionName);
            json.data[sectionName] = original;
            bbm.validator.validateDocumentModel(json);
            var e2 = bbm.validator.getLastError();
            expect(e2.valid).to.be.true;
        });
    };

    it('c32_sample', function () {
        checkValid('c32_sample.json');
    });

    it('ccd_sample', function () {
        checkValid('ccd_sample.json');
    });

    it('ccda_sample', function () {
        checkValid('ccda_sample.json');
    });

    it('cms_sample', function () {
        checkValid('cms_sample.json');
    });
});
