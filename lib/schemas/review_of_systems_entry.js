module.exports = {
  "id": "review_of_systems_entry",
  "type": "object",
  "properties": {
    "code": {
      "$ref": "cda_coded_entry"
    },
    "title": {
      "type": "string"
    },
    "text": {
      "type": "string"
    }
  },
  "required": ["code", "title", "text"],
  "additionalProperties": false,
};