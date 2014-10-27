"use strict";

var util = require('../lib/util');
var common = require('./common');

describe('validate actual samples', function () {
    var validate = function (filename) {
        var sampleJSON = util.sampleToJSON(filename);
        common.validateSample(sampleJSON);
    };

    it('c32_sample', function () {
        validate('c32_sample.json');
    });

    it('ccd_sample', function () {
        validate('ccd_sample.json');
    });

    it('ccda_sample', function () {
        validate('ccda_sample.json');
    });

    it('cms_sample', function () {
        validate('cms_sample.json');
    });
});
