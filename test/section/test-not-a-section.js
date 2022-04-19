"use strict";

var bbm = require('../../index.js');

describe('sanity checks', function () {
  it('invalid section', function () {
    var dummy = {
      "value": "dummy"
    };
    var valid = bbm.validator.validate(dummy, 'not-a-section');
    expect(valid).toBe(false);
  });
});
