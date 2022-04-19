"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/medical_device');

describe('medical_device unit tests', function () {
  it('sample valid_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'medical_device');
    expect(valid).toBe(true);
  });

  it('sample valid_1', function () {
    var valid = bbm.validator.validate(samples.valid_1, 'medical_device');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'medical_device');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(2);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.ARRAY_LENGTH_SHORT).toHaveLength(1);
    expect(c2p.ARRAY_LENGTH_SHORT[0]).toBe("#/identifiers");
    expect(c2p.INVALID_TYPE).toHaveLength(1);
    expect(c2p.INVALID_TYPE[0]).toBe("#/status");
  });
});
