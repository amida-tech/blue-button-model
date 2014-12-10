"use strict";

var ZSchema = require('z-schema');
var _ = require('lodash');

var schemas = require('./schemas');
var commonModels = require('./schemas/common_models');

var schemasToSchemaMap = function (inputSchemas) {
    return inputSchemas.reduce(function (r, schema) {
        r[schema.id] = schema;
        return r;
    }, {});
};

var Validator = function () {
    var zschema = new ZSchema({
        noExtraKeywords: true,
        noEmptyArrays: true
    });

    var compiledSchemas = schemas.map(function (schema) {
        var schemaClone = _.cloneDeep(schema);
        zschema.validateSchema(schemaClone);
        return schemaClone;
    });

    this.schemaMap = schemasToSchemaMap(schemas);
    this.compiledSchemaMap = schemasToSchemaMap(compiledSchemas);

    this.zschema = zschema;
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

Validator.prototype.validateDocumentModel = function (documentModel) {
    return this.validate(documentModel, 'document_model');
};

Validator.prototype.getSchema = function (schemaName) {
	if (schemaName === 'common_models') {
		return commonModels;
	} else {
	    return this.schemaMap[schemaName];
	}
};

module.exports = new Validator();
