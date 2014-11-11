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
schemas.document_model = require('./document_model');
