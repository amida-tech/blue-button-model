"use strict";
/*jslint node: true */

var fs = require("fs");
var ZSchema = require("z-schema");

var updateRemoteReference = function (key, jsonFile) {
    var url = 'http://local.com/' + key;
    var jsonString = fs.readFileSync(__dirname + jsonFile, 'utf8');
    ZSchema.setRemoteReference(url, jsonString);
    return url;
};

var schemaMap = (function () {
    var remoteReferences = [{
        key: 'common_models',
        file: '/schemas/shared.json'
    }, {
        key: 'demographics',
        file: '/schemas/demographics.json'
    }, {
        key: 'allergy',
        file: '/schemas/allergy.json'
    }, {
        key: 'encounter',
        file: '/schemas/encounter.json'
    }, {
        key: 'immunization',
        file: '/schemas/immunization.json'
    }, {
        key: 'medication',
        file: '/schemas/medication.json'
    }, {
        key: 'problem',
        file: '/schemas/problem.json'
    }, {
        key: 'procedure',
        file: '/schemas/procedure.json'
    }, {
        key: 'plan_of_care_entry',
        file: '/schemas/plan_of_care_entry.json'
    }, {
        key: 'payers',
        file: '/schemas/payers.json'
    }, {
        key: 'result',
        file: '/schemas/result.json'
    }, {
        key: 'social_history',
        file: '/schemas/social_history.json'
    }, {
        key: 'vital',
        file: '/schemas/vital.json'
    }, {
        key: 'claim',
        file: '/schemas/claim.json'
    }, {
        key: 'provider',
        file: '/schemas/provider.json'
    }, {
        key: 'medical_device',
        file: '/schemas/medical_device.json'
    }, {
        key: 'family_history_entry',
        file: '/schemas/family_history_entry.json'
    }];

    return remoteReferences.reduce(function (r, rr) {
        var url = updateRemoteReference(rr.key, rr.file);
        r[rr.key] = {
            '$ref': url
        };
        return r;
    }, {});
})();

var documentModelSchema = (function () {
    var url = updateRemoteReference('document_model', '/schemas/document_model.json');
    return {
        '$ref': url
    };
})();

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
    }
    var sharedSchema = this.zschema.compileSchema(schemaMap.common_models);
    var sharedComponentSchemas = sharedSchema['__$refResolved'].properties;
    var sharedComponentSchema = sharedComponentSchemas[componentName];
    if (sharedComponentSchema) {
        return this.validateWithSchema(component, sharedComponentSchema);
    }
    return false;
};

Validator.prototype.validateSection = function (section, sectionName) {
    var compiledDocSchema = this.zschema.compileSchema(documentModelSchema);
    var sectionSchemas = compiledDocSchema['__$refResolved'].properties.data.properties;
    var sectionSchema = sectionSchemas[sectionName];
    if (sectionSchema) {
        return this.validateWithSchema(section, sectionSchema);
    } else {
        return false;
    }
};

Validator.prototype.validateDocumentModel = function (documentModel) {
    return this.validateWithSchema(documentModel, documentModelSchema);
};

module.exports = new Validator();
