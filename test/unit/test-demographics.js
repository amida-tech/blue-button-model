"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/demographics');

describe('demographics unit tests', function () {
  it('sample valid_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'demographics');
    expect(valid).toBe(true);
  });

  it('sample valid_1', function () {
    var valid = bbm.validator.validate(samples.valid_1, 'demographics');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'demographics');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(10);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toHaveLength(1);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY[0]).toBe("#/");
    expect(c2p.INVALID_TYPE).toHaveLength(9);
    expect(c2p.INVALID_TYPE).toEqual(
      ["#/gender", "#/guardians/0/names", "#/guardians/0/relation", "#/languages/0/language", "#/languages/0/mode", "#/languages/0/proficiency", "#/marital_status", "#/race", "#/religion"]
    );
  });
});
