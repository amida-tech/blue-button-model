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
        "header": {
          "$ref": "header"
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
        "organizations": {
          "$ref": "organizations"
        },
        "medical_devices": {
          "$ref": "medical_devices"
        },
        "family_history": {
          "$ref": "family_history"
        },
        "functional_statuses": {
          "$ref": "functional_statuses"
        },
        "reason_for_referral": {
          "$ref": "reason_for_referral"
        },
        "hospital_discharge_instructions": {
          "$ref": "discharge_instructions"
        },
        "hospital_discharge_medications": {
          "$ref": "hospital_discharge_medications"
        },
        "review_of_systems": {
          "$ref": "review_of_systems_entry"
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
