var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/unit/cda_location');

describe('cda_location unit tests', function () {
  it('sample cda_location_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'cda_location');
    expect(valid).toBe(true);
  });

  it('sample cda_location_1', function () {
    var valid = bbm.validator.validate(samples.valid_1, 'cda_location');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'cda_location');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(1);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY).toHaveLength(1);
    expect(c2p.OBJECT_MISSING_REQUIRED_PROPERTY[0]).toBe("#/");
  });

  it('sample invalid_1', function () {
    var valid = bbm.validator.validate(samples.invalid_1, 'cda_location');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    expect(result).toHaveLength(3);
    var c2p = util.errorsToCodePathMap(result);
    expect(c2p.INVALID_TYPE).toHaveLength(2);
    expect(c2p.INVALID_TYPE).toEqual(["#/address", "#/phone"]);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES).toHaveLength(1);
    expect(c2p.OBJECT_ADDITIONAL_PROPERTIES[0]).toBe("#/");
  });
});
