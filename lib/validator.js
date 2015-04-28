"use strict";

var ZSchema = require('z-schema');

var schemas = require('./schemas');

var Validator = function () {
    var zschema = new ZSchema({
        noExtraKeywords: true,
        noEmptyArrays: true,
        breakOnFirstError: false
    });

    var schemaList = schemas.list(true);
    var compiled = zschema.validateSchema(schemaList);
    if (compiled) {
        this.compiledSchemaMap = schemaList.reduce(function (r, schema) {
            r[schema.id] = schema;
            return r;
        }, {});
        this.zschema = zschema;
    } else {
        this.lastError = "Internal Error: Compilation of schemas failed.";
    }
};

Validator.prototype.getLastError = function () {
    return this.lastError;
};

Validator.prototype.validate = function (obj, schemaName) {
    var schema = this.compiledSchemaMap[schemaName];
    if (schema) {
        var valid = this.zschema.validate(obj, schema);
        this.lastError = this.zschema.getLastErrors();
        return valid;
    } else {
        return false;
    }
};

Validator.prototype.validateDocumentModel = function (document) {
    return this.validate(document, 'document_model');
};

module.exports = new Validator();
