"use strict";

var bbm = require('../../index.js');
var util = require('../lib/util');

exports.validateSample = function (sampleJSON) {
  var valid = bbm.validator.validateDocumentModel(sampleJSON);
  var result = bbm.validator.getLastError();
  if (!valid) {
    console.log(JSON.stringify(result, undefined, 2));
  }
  expect(valid).toBe(true);
};
