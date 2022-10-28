module.exports = {
  "id": "mental_status",
  "type": "array",
  "properties": {
    "text": {
      "type": "string"
    },
    "identifiers": {
      "type": "string",
      "items": {
        "$ref": "cda_id"
      }
    },

    "assessment": {
      "type": "array",
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
        "value": {
          "type": "string"
        },
      },

      "additionalProperties": false,
      "required": [
        // "date_time", "identifiers"
      ]
    },
/*     "organizer": {
      "type": "object",
      "properties": {
        "date_time": {
          "$ref": "cda_date"
        },
        "identifiers": {
          "type": "string",
          "items": {
            "$ref": "cda_id"
          }
        },
      },
      "additionalProperties": false,
      "required": [
        "date_time", "identifiers"
      ]
    }, */
/*     "organizer": {
      "type": "string",
      "properties": {
        "value": {
          "type": "string"
        },
        "date_time": {
          "$ref": "cda_date"
        },
        "identifiers": {
          "type": "string",
          "items": {
            "$ref": "cda_id"
          }
        },
      }, */
      "additionalProperties": false,
      "required": [
        // "value", "date_time", "identifiers"
      ]
    },
  "additionalProperties": false,
  "required": [
    // "value", "assessments", "date_time", "identifiers"
  ]
};
