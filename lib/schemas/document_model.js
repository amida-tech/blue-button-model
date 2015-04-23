module.exports = {
    "id": "document_model",
    "type": "object",
    "properties": {
        "data": {
            "type": "object",
            "properties": {
                "allergies": {
                    "$ref": "allergies"
                },
                "demographics": {
                    "$ref": "demographics"
                },
                "encounters": {
                    "$ref": "encounters"
                },
                "immunizations": {
                    "$ref": "immunizations"
                },
                "medications": {
                    "$ref": "medications"
                },
                "problems": {
                    "$ref": "problems"
                },
                "plan_of_care": {
                    "$ref": "plan_of_care"
                },
                "procedures": {
                    "$ref": "procedures"
                },
                "results": {
                    "$ref": "results"
                },
                "social_history": {
                    "$ref": "social_history"
                },
                "payers": {
                    "$ref": "payers"
                },
                "vitals": {
                    "$ref": "vitals"
                },
                "claims": {
                    "$ref": "claims"
                },
                "providers": {
                    "$ref": "providers"
                },
                "medical_devices": {
                    "$ref": "medical_devices"
                },
                "family_history": {
                    "$ref": "family_history"
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
                },
                "confidentiality": {
                    "type": "string"
                },
                "patient_entered": {
                    "type": "boolean"
                }
            },
            "additionalProperties": true
        }
    }
};
