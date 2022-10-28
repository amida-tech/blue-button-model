module.exports = {
  "id": "mental_status",
  "type": "array",
  "items": {
    "text": {
      "type": "string"
    },
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },

    "observation": {
      "type": "array",
      "items": {
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
    },
    "organizer": {
      "type": "array",
      "items": {
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
    },
    "assessment": {
      "type": "array",
      "items": {
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

      "additionalProperties": false
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
      "additionalProperties": false
    },
  "additionalProperties": false
};
