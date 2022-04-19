"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/cda_name');

describe('cda_name unit tests', function () {
  it('sample cda_name_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'cda_name');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'cda_name');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(2);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).toHaveLength(1);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).toBe("#/");
    expect(c2p.INVALID_TYPE).toHaveLength(1);
    expect(c2p.INVALID_TYPE[0]).toBe("#/middle");
  });
});
