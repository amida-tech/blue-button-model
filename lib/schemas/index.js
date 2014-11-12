"use strict";

var common_models = require('./common_models');

var demographics = require('./demographics');
var allergy = require('./allergy');
var encounter = require('./encounter');
var immunization = require('./immunization');
var medication = require('./medication');
var problem = require('./problem');
var procedure = require('./procedure');
var plan_of_care_entry = require('./plan_of_care_entry');
var payers = require('./payers');
var result = require('./result');
var social_history = require('./social_history');
var vital = require('./vital');
var claim = require('./claim');
var provider = require('./provider');
var medical_device = require('./medical_device');
var family_history_entry = require('./family_history_entry');
var document_model = require('./document_model');

var schemas = module.exports = [].concat(common_models);
schemas.push(demographics);
schemas.push(allergy);
schemas.push(encounter);
schemas.push(immunization);
schemas.push(medication);
schemas.push(problem);
schemas.push(procedure);
schemas.push(plan_of_care_entry);
schemas.push(payers);
schemas.push(result);
schemas.push(social_history);
schemas.push(vital);
schemas.push(claim);
schemas.push(provider);
schemas.push(medical_device);
schemas.push(family_history_entry);

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
		"id": sectionName,
	    "type": "array",
    	"items": {
        	"$ref": sections[sectionName]
    	}
    };
    schemas.push(schema);
});

schemas.push(document_model);
