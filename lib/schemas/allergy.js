module.exports = {
  "id": "allergy",
  "type": "object",
  "properties": {
    "date_time": {
      "$ref": "cda_date"
    },
    "identifiers": {
      "type": "array",
      "minItems": 1,
      "items": {
        "$ref": "cda_id"
      }
    },
    "observation": {
      "type": "object",
      "properties": {
        "identifiers": {
          "type": "array",
          "minItems": 1,
          "items": {
            "$ref": "cda_id"
          }
        },

        "negation_indicator": {
          "type": "boolean"
        },

        "allergen": {
          "$ref": "cda_coded_entry"
        },
        "intolerance": {
          "$ref": "cda_coded_entry"
        },
        "date_time": {
          "$ref": "cda_date"
        },
        "status": {
          "$ref": "cda_coded_entry"
        },

        "reactions": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "object",
            "properties": {
              "identifiers": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "$ref": "cda_id"
                }
              },

              "date_time": {
                "$ref": "cda_date"
              },
              "reaction": {
                "$ref": "cda_coded_entry"
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

          }
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
    }
  },
  "additionalProperties": false
};
