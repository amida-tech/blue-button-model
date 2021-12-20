blue-button-model
=================

Blue Button Model Definition and Validation

[![NPM](https://nodei.co/npm/blue-button-model.png)](https://nodei.co/npm/blue-button-model/)

[![Build Status](https://travis-ci.org/amida-tech/blue-button-model.svg)](https://travis-ci.org/amida-tech/blue-button-model)
[![Coverage Status](https://coveralls.io/repos/amida-tech/blue-button-model/badge.png)](https://coveralls.io/r/amida-tech/blue-button-model)
[![Dependency Status](https://david-dm.org/amida-tech/blue-button-model.svg)](https://david-dm.org/amida-tech/blue-button-model)

This library defines a JSON Blue Button health data model. All parsers in [blue-button](https://github.com/amida-tech/blue-button) library generate data that follow this model.  The schema can be found [here](http://developers.amida-tech.com/document_model.html) or programmatically [here](#schemaListMethod).  The implementation uses [z-schema](https://github.com/zaggino/z-schema).

## Quick up and running quide

### Prerequisites

- Node.js (v0.10+) and NPM
- Grunt.js

```
# Install dependencies
npm i

# Install grunt
npm i -g grunt

# Test
grunt

```

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

## API

### validator.validateDocumentModel(document)

Primary method to validate Blue Button JSON documents.

__Arguments__

* `document` - JSON health data document.
* returns - `true` or `false`.

### validator.validate(obj, schemaName)

Validates individual components in Blue Button documents such as sections and entries.

__Arguments__

* `obj` - Component in the JSON health data document.
* `schemaName` - Type of `obj`.  You can use `id` property of any schema avaiable in the [list](#schemaListMethod).
* returns - `true` or `false`.

### validator.getLastError()

If validation fails this method returns the details of the errors.  The error object is actually an array of errors and directly provided by the underlying library [z-schema](https://github.com/zaggino/z-schema).

<a name="schemaListMethod" />
### schemas.list(expandCommon)

Provides the list of schemas that are used in the model.  The list includes section schemas, entry schemas and common component schemas.  Full document schema is also available with id `document_model`.

__Arguments__

* `expandCommon` - If this is falsy, common component (such as address, time, etc.) schemas are provided in an array.
* returns - List of schemas.

### schemas.map(expandCommon)

Similar to [list](#schemaListMethod) but provides a map of schema ids (name) to schemas.  If `expandCommon` is falsy, the array of common component schemas are provided with `common_models` key.

## License

Licensed under [Apache 2.0](./LICENSE).
