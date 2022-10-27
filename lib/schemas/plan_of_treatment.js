module.exports = {
  "id": "plan_of_treatment",
  "type": "object",
  "properties": {
    "indications": {
      "type": "array",
      "items": {
        "$ref": "indication"
      }
    },
    "nutrition_recommendations": {
      "type": "array",
      "items": {
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
          "code": {
            "$ref": "cda_coded_entry"
          },
        },
        "required": ["code"],
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false,
};
