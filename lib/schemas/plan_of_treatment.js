module.exports = {
  "id": "plan_of_treatment",
  "type": "object",
  "properties": {
    "indications": {
      "type": "array",
      "items": {
        "$ref": "indication"
      }
    }
  },
  "additionalProperties": false,
};
