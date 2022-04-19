"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/cda_physical_quantity');

describe('cda_physical_quantity unit tests', function () {
  it('sample cda_physical_quantity_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'cda_physical_quantity');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'cda_physical_quantity');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(2);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toHaveLength(2);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toEqual(["#/", "#/"]);
  });

  it('sample invalid_1', function () {
    var valid = bbm.validator.validate(samples.invalid_1, 'cda_physical_quantity');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(1);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toHaveLength(1);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY[0]).toBe("#/");
  });

  it('sample invalid_2', function () {
    var valid = bbm.validator.validate(samples.invalid_2, 'cda_physical_quantity');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(1);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toHaveLength(1);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY[0]).toBe("#/");
  });

  it('sample invalid_3', function () {
    var valid = bbm.validator.validate(samples.invalid_3, 'cda_physical_quantity');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(1);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).toHaveLength(1);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).toBe("#/");
  });
});
