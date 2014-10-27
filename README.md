blue-button-model
=================

Blue Button Model Validation

[![NPM](https://nodei.co/npm/blue-button-model.png)](https://nodei.co/npm/blue-button-model/)

[![Build Status](https://travis-ci.org/amida-tech/blue-button-model.svg)](https://travis-ci.org/amida-tech/blue-button-model)
[![Coverage Status](https://coveralls.io/repos/amida-tech/blue-button-model/badge.png)](https://coveralls.io/r/amida-tech/blue-button-model)

## Usage

``` javascript
var fs = require('fs');
var bb = require('blue-button');
bar bbm = require('blue-button-model');

var xmlString = fs.readFileSync('CCD_1.xml', 'utf-8');
var record = bb.parseString(xmlString);

var valid = bbm.validator.validateDocumentModel(record);
if (!valid) {
	var error = bbm.validator.getLastError();
    console.log(error);
}
```
