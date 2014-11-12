module.exports = {
	"id": "document_model",
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
        "data": {
            "type": "object",
            "properties": {
                "allergies": {
                    "$ref": "http://local.com/allergies"
                },
                "demographics": {
                    "$ref": "http://local.com/demographics"
                },
                "encounters": {
                    "$ref": "http://local.com/encounters"
                },
                "immunizations": {
                    "$ref": "http://local.com/immunizations"
                },
                "medications": {
                    "$ref": "http://local.com/medications"
                },
                "problems": {
                    "$ref": "http://local.com/problems"
                },
                "plan_of_care": {
                    "$ref": "http://local.com/plan_of_care"
                },
                "procedures": {
                    "$ref": "http://local.com/procedures"
                },
                "results": {
                    "$ref": "http://local.com/results"
                },
                "social_history": {
                    "$ref": "http://local.com/social_history"
                },
                "payers": {
                    "$ref": "http://local.com/payers"
                },
                "vitals": {
                    "$ref": "http://local.com/vitals"
                },
                "claims": {
                    "$ref": "http://local.com/claims"
                },
                "providers": {
                    "$ref": "http://local.com/providers"
                },
                "medical_devices": {
                    "$ref": "http://local.com/medical_devices"
                },
                "family_history": {
                    "$ref": "http://local.com/family_history"
                }
            },
            "additionalProperties": true
        },
        "errors": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "meta": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                }
            },
            "additionalProperties": true
        }
    }
};
