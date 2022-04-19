"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/medical_devices');

describe('medical_devices section tests', function () {
  it('sample valid_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'medical_devices');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'medical_devices');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    var al = util.errorsToArrayIndices(result);
    expect(al).toEqual([2, 3]);
  });
});
