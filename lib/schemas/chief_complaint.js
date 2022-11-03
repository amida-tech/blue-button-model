module.exports = {
  "id": "chief_complaint",
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "text": {
      "type": "string",
    }
  },
  "additionalProperties": false,
  "required": [
    "title", "text"
  ]
};
