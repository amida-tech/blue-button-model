"use strict";

var chai = require('chai');
var fs = require("fs");
var path = require('path');
var _ = require('underscore');

var bbm = require('../../index.js');

var expect = chai.expect;

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
        if (!err.valid) {

            var _ = require("underscore");

            var count = function (numbers) {
                return _.reduce(numbers, function (result, current) {
                    return result + 1;
                }, 0);
            }
            var result = _.chain(err.errors)
                .groupBy("code")
                .map(function (value, key) {
                    return {
                        code: key,
                        count: count(_.pluck(value, "code"))
                    }
                })
                .value();

            console.log("Errors: \n", JSON.stringify(bb.validator.getLastError(), null, 4));
            console.log("Errors summary: \n ", JSON.stringify(result, null, 4));
        }

        expect(err.valid).to.equal(true);
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
