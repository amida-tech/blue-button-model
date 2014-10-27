"use strict";

var chai = require('chai');

var bbm = require('../../index.js');
var util = require('../lib/util');
var common = require('./common');

var expect = chai.expect;

describe('find errors', function () {
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

    var introduceAndFindErrors = function (filename) {
        var sampleJSON = util.sampleToJSON(filename);
        common.validateSample(sampleJSON);
        Object.keys(sampleJSON.data).forEach(function (sectionName) {
            var original = sampleJSON.data[sectionName];
            sampleJSON.data[sectionName] = invalidSections[sectionName];
            var valid = bbm.validator.validateDocumentModel(sampleJSON);
            var result = bbm.validator.getLastError();
            expect(valid).to.be.false;
            expect(result.valid).to.be.false;
            var components = util.errorsToPathComponents(result.errors, 2);
            expect(components).to.have.length(1);
            expect(components[0]).to.equal(sectionName);
            sampleJSON.data[sectionName] = original;
            common.validateSample(sampleJSON);
        });
    };

    it('c32_sample', function () {
        introduceAndFindErrors('c32_sample.json');
    });

    it('ccd_sample', function () {
        introduceAndFindErrors('ccd_sample.json');
    });

    it('ccda_sample', function () {
        introduceAndFindErrors('ccda_sample.json');
    });

    it('cms_sample', function () {
        introduceAndFindErrors('cms_sample.json');
    });
});
