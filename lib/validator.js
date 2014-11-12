"use strict";

var ZSchema = require("z-schema");

var schemas = require('./schemas');

var Validator = function () {
    var zschema = new ZSchema({
        noExtraKeywords: true,
        noEmptyArrays: true
    });

    schemas.forEach(function (schema) {
        var schemasValid = zschema.validateSchema(schema);
    });

    this.schemaMap = schemas.reduce(function (r, schema) {
        r[schema.id] = schema;
        return r;
    }, {});

    this.zschema = zschema;
};

Validator.prototype.getLastError = function () {
    return this.lastError;
};

Validator.prototype.validate = function (obj, schemaName) {
    var schema = this.schemaMap[schemaName];
    if (schema) {
        var valid = this.zschema.validate(obj, schema);
        this.lastError = this.zschema.getLastErrors();
        return valid;
    } else {
        return false;
    }
};

Validator.prototype.validateDocumentModel = function (documentModel) {
    return this.validate(documentModel, 'document_model');
};

module.exports = new Validator();
