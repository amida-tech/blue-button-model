"use strict";

var ZSchema = require("z-schema");

var schemas = require('./schemas');
var schemaMap = schemas.reduce(function (r, schema) {
    var key = schema.id;
    var url = 'http://local.com/' + key;
    delete schema.id;
    var json = schema;
    var jsonString = JSON.stringify(json);
    ZSchema.setRemoteReference(url, jsonString);
    r[key] = {
        '$ref': url
    };
    return r;
}, {});

var Validator = function () {
    var zschema = new ZSchema({
        sync: true,
        noExtraKeywords: true
    });

    this.zschema = zschema;
};

Validator.prototype.getLastError = function () {
    return this.lastError;
};

Validator.prototype.validateWithSchema = function (obj, schema) {
    var compiledSchema = this.zschema.compileSchema(schema);
    var valid = this.zschema.validate(obj, compiledSchema);
    this.lastError = this.zschema.getLastError();
    return valid;
};

Validator.prototype.validateComponent = function (component, componentName) {
    var componentSchema = schemaMap[componentName];
    if (componentSchema) {
        return this.validateWithSchema(component, componentSchema);
    } else {
        return false;
    }
};

Validator.prototype.validateSection = function (section, sectionName) {
    var sectionSchema = schemaMap[sectionName];
    if (sectionSchema) {
        return this.validateWithSchema(section, sectionSchema);
    } else {
        return false;
    }
};

Validator.prototype.validateDocumentModel = function (documentModel) {
    return this.validateWithSchema(documentModel, schemaMap.document_model);
};

module.exports = new Validator();
