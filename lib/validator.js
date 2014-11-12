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

Validator.prototype.validateWithSchema = function (obj, schema) {
    var valid = this.zschema.validate(obj, schema);
    this.lastError = this.zschema.getLastErrors();
    return valid;
};

Validator.prototype.validateComponent = function (component, componentName) {
    var componentSchema = this.schemaMap[componentName];
    if (componentSchema) {
        return this.validateWithSchema(component, componentSchema);
    } else {
        return false;
    }
};

Validator.prototype.validateSection = function (section, sectionName) {
    var sectionSchema = this.schemaMap[sectionName];
    if (sectionSchema) {
        return this.validateWithSchema(section, sectionSchema);
    } else {
        return false;
    }
};

Validator.prototype.validateDocumentModel = function (documentModel) {
    return this.validateWithSchema(documentModel, this.schemaMap.document_model);
};

module.exports = new Validator();
