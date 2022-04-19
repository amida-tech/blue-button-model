module.exports = {
  "type": "object",
  "properties": {
    "name": {
      "$ref": "cda_name"
    },
    "phone": {
      "type": "array",
      "items": {
        "$ref": "cda_phone"
      }
    },
    "role": {
      "type": "string"
    },
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      }
    }
  },
  "additionalProperties": false
};
