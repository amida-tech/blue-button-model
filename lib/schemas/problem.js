module.exports = {
  "id": "problem",
  "type": "object",
  "properties": {
    "date_time": {
      "$ref": "cda_date"
    },
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },
    "problem": {
      "type": "object",
      "properties": {
        "code": {
          "$ref": "cda_coded_entry"
        },
        "date_time": {
          "$ref": "cda_date"
        },
        "severity": {
          "type": "object",
          "properties": {
            "code": {
              "$ref": "cda_coded_entry"
            },
            "interpretation": {
              "$ref": "cda_coded_entry"
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "negation_indicator": {
      "type": "boolean"
    },
    "onset_age": {
      "type": "string"
    },
    "onset_age_unit": {
      "type": "string"
    },
    "patient_status": {
      "type": "string"
    },
    "status": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "date_time": {
          "$ref": "cda_date"
        }
      },
      "additionalProperties": false
    },
    "source_list_identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    }
  },
  "additionalProperties": false,
  "required": ["problem"]
};
