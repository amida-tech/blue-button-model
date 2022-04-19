"use strict";

var bbm = require('../../index.js');

describe('sanity checks', function () {
  it('invalid component', function () {
    var dummy = {
      "value": "dummy"
    };
    var valid = bbm.validator.validate(dummy, 'not-a-component');
    expect(valid).toBe(false);
  });
});
