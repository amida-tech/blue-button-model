"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/social_history_entry');

describe('social_history_entry unit tests', function () {
  it('sample valid_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'social_history_entry');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'social_history_entry');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(1);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toBeDefined();
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toHaveLength(1);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY[0]).toBe("#/");
  });

  it('sample invalid_1', function () {
    var valid = bbm.validator.validate(samples.invalid_1, 'social_history_entry');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(1);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).toBeDefined();
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).toHaveLength(1);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).toBe("#/");
  });
});
