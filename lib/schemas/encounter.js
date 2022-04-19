module.exports = {
  "id": "encounter",
  "type": "object",
  "properties": {
    "date_time": {
      "$ref": "cda_date"
    },
    "encounter": {
      "$ref": "cda_coded_entry"
    },
    "findings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "value": {
            "$ref": "cda_coded_entry"
          },
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"

            }
          },
          "date_time": {
            "$ref": "cda_date"
          }
        },
        "additionalProperties": false
      }
    },
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"

      }
    },
    "performers": {
      "type": "array",
      "items": {
        "$ref": "cda_performer"
      }
    },
    "locations": {
      "type": "array",
      "items": {
        "$ref": "cda_location"
      }
    }
  },
  "additionalProperties": false,
  "required": ["encounter"]
};
