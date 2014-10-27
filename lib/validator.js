"use strict";
/*jslint node: true */

var fs = require("fs");
var ZSchema = require("z-schema");

var schemaMap = (function () {
    var map = {};

    //setup references
    var shared = fs.readFileSync(__dirname + '/schemas/shared.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/common_models', shared);
    map.shared = {
        '$ref': 'http://local.com/common_models'
    };

    var demographics = fs.readFileSync(__dirname + '/schemas/demographics.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/demographics', demographics);
    map.demographics = {
        '$ref': 'http://local.com/demographics'
    };

    var allergy = fs.readFileSync(__dirname + '/schemas/allergy.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/allergy', allergy);
    map.allergy = {
        '$ref': 'http://local.com/allergy'
    };

    var encounter = fs.readFileSync(__dirname + '/schemas/encounter.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/encounter', encounter);
    map.encounter = {
        '$ref': 'http://local.com/encounter'
    };

    var immunization = fs.readFileSync(__dirname + '/schemas/immunization.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/immunization', immunization);
    map.immunization = {
        '$ref': 'http://local.com/immunization'
    };

    var medication = fs.readFileSync(__dirname + '/schemas/medication.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/medication', medication);
    map.medication = {
        '$ref': 'http://local.com/medication'
    };

    var problem = fs.readFileSync(__dirname + '/schemas/problem.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/problem', problem);
    map.problem = {
        '$ref': 'http://local.com/problem'
    };

    var procedure = fs.readFileSync(__dirname + '/schemas/procedure.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/procedure', procedure);
    map.procedure = {
        '$ref': 'http://local.com/procedure'
    };

    var plan_of_care_entry = fs.readFileSync(__dirname + '/schemas/plan_of_care_entry.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/plan_of_care_entry', plan_of_care_entry);
    map.plan_of_care_entry = {
        '$ref': 'http://local.com/plan_of_care_entry'
    };

    var payers = fs.readFileSync(__dirname + '/schemas/payers.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/payers', payers);
    map.payers = {
        '$ref': 'http://local.com/payers'
    };

    var result = fs.readFileSync(__dirname + '/schemas/result.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/result', result);
    map.result = {
        '$ref': 'http://local.com/result'
    };

    var social_history = fs.readFileSync(__dirname + '/schemas/social_history.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/social_history', social_history);
    map.social_history = {
        '$ref': 'http://local.com/social_history'
    };

    var vital = fs.readFileSync(__dirname + '/schemas/vital.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/vital', vital);
    map.vital = {
        '$ref': 'http://local.com/vital'
    };

    var claim = fs.readFileSync(__dirname + '/schemas/claim.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/claim', claim);
    map.claim = {
        '$ref': 'http://local.com/claim'
    };

    var provider = fs.readFileSync(__dirname + '/schemas/provider.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/provider', provider);
    map.provider = {
        '$ref': 'http://local.com/provider'
    };

    var medical_device = fs.readFileSync(__dirname + '/schemas/medical_device.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/medical_device', medical_device);
    map.medical_device = {
        '$ref': 'http://local.com/medical_device'
    };

    var family_history_entry = fs.readFileSync(__dirname + '/schemas/family_history_entry.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/family_history_entry', family_history_entry);
    map.family_history_entry = {
        '$ref': 'http://local.com/family_history_entry'
    };

    return map;
})();

var documentModelSchema = (function () {
    var document_model = fs.readFileSync(__dirname + '/schemas/document_model.json', 'utf8');
    ZSchema.setRemoteReference('http://local.com/document_model', document_model);
    return {
        '$ref': 'http://local.com/document_model'
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
    var sharedSchema = this.zschema.compileSchema(schemaMap.shared);
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
