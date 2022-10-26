module.exports = {
  "id": "nutrition",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    },
    "date_time": {
      "$ref": "cda_date"
    },
    "value": {
      "type": "string"
    },
    "assessments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "value": {
            "type": "string"
          },
          "date_time": {
            "$ref": "cda_date"
          },
          "identifiers": {
            "type": "array",
            "items": {
              "$ref": "cda_id"
            }
          },
        },
        "additionalProperties": false,
        "required": [
          "value", "date_time", "identifiers"
        ]
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "value", "assessments", "date_time", "identifiers"
  ]
};
