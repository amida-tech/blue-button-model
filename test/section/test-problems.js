"use strict";

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/problems');

describe('problems section tests', function () {
  it('sample valid_0', function () {
    var valid = bbm.validator.validate(samples.valid_0, 'problems');
    expect(valid).toBe(true);
  });

  it('sample invalid_0', function () {
    var valid = bbm.validator.validate(samples.invalid_0, 'problems');
    expect(valid).toBe(false);
    var result = bbm.validator.getLastError();
    var al = util.errorsToArrayIndices(result);
    expect(al).toEqual([1]);
  });
});
