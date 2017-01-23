"use strict";

var _ = require('lodash');

var common_models = require('./common_models');

var header = require('./header');
var demographics = require('./demographics');
var allergy = require('./allergy');
var encounter = require('./encounter');
var immunization = require('./immunization');
var medication = require('./medication');
var problem = require('./problem');
var procedure = require('./procedure');
var plan_of_care_entry = require('./plan_of_care_entry');
var payer = require('./payer');
var result = require('./result');
var social_history_entry = require('./social_history_entry');
var vital = require('./vital');
var claim = require('./claim');
var provider = require('./provider');
var organization = require('./organization');
var medical_device = require('./medical_device');
var family_history_entry = require('./family_history_entry');
var document_model = require('./document_model');
var functional = require('./functional');
var reason_for_referral = require('./reason_for_referral');
var discharge_instructions = require('./discharge_instructions');

var list = exports.list = function (expandCommon) {
    var schemas = [];
    if (expandCommon) {
        Array.prototype.push.apply(schemas, common_models);
    } else {
        schemas.push(common_models);
    }

    schemas.push(demographics);
    schemas.push(header);
    schemas.push(allergy);
    schemas.push(encounter);
    schemas.push(immunization);
    schemas.push(medication);
    schemas.push(problem);
    schemas.push(procedure);
    schemas.push(plan_of_care_entry);
    schemas.push(payer);
    schemas.push(result);
    schemas.push(social_history_entry);
    schemas.push(vital);
    schemas.push(claim);
    schemas.push(provider);
    schemas.push(organization);
    schemas.push(medical_device);
    schemas.push(family_history_entry);
    schemas.push(functional);
    schemas.push(reason_for_referral);
    schemas.push(discharge_instructions);

    var sections = {
        allergies: 'allergy',
        encounters: 'encounter',
        immunizations: 'immunization',
        medications: 'medication',
        problems: 'problem',
        procedures: 'procedure',
        plan_of_care: 'plan_of_care_entry',
        payers: 'payer',
        results: 'result',
        social_history: 'social_history_entry',
        vitals: 'vital',
        claims: 'claim',
        providers: 'provider',
        organizations: 'organization',
        medical_devices: 'medical_device',
        family_history: 'family_history_entry',
        functional_statuses: 'functional'
    };

    Object.keys(sections).forEach(function (sectionName) {
        var schema = {
            "id": sectionName,
            "type": "array",
            "items": {
                "$ref": sections[sectionName]
            }
        };
        schemas.push(schema);
    });

    schemas.push(document_model);

    return _.cloneDeep(schemas);
};

exports.map = function (expandCommon) {
    return list(expandCommon).reduce(function (r, schema) {
        if (schema.id) {
            r[schema.id] = schema;
        } else {
            r.common_models = schema;
        }
        return r;
    }, {});
};
