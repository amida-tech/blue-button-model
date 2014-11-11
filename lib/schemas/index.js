"use strict";

var schemas = module.exports = {};

schemas.common_models = require('./common_models');
schemas.demographics = require('./demographics');
schemas.allergy = require('./allergy');
schemas.encounter = require('./encounter');
schemas.immunization = require('./immunization');
schemas.medication = require('./medication');
schemas.problem = require('./problem');
schemas.procedure = require('./procedure');
schemas.plan_of_care_entry = require('./plan_of_care_entry');
schemas.payers = require('./payers');
schemas.result = require('./result');
schemas.social_history = require('./social_history');
schemas.vital = require('./vital');
schemas.claim = require('./claim');
schemas.provider = require('./provider');
schemas.medical_device = require('./medical_device');
schemas.family_history_entry = require('./family_history_entry');

var sections = {
	allergies: 'allergy',
	encounters: 'encounter',
	immunizations: 'immunization',
	medications: 'medication',
	problems: 'problem',
	procedures: 'procedure',
	plan_of_care: 'plan_of_care_entry',
	results: 'result',
	vitals: 'vital',
	claims: 'claim',
	providers: 'provider',
	medical_devices: 'medical_device',
	family_history: 'family_history_entry'
};

Object.keys(sections).forEach(function(sectionName) {
	var schema = {
	    "type": "array",
    	"$schema": "http://json-schema.org/draft-04/schema",
    	"items": {
        	"$ref": "http://local.com/" + sections[sectionName]
    	}
    };
    schemas[sectionName] = schema;
});

schemas.document_model = require('./document_model');
