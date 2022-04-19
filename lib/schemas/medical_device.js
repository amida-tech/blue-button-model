module.exports = {
  "id": "medical_device",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "array",
      "items": {
        "$ref": "cda_id"
      },
      "minItems": 1 //in z-schema this essentially makes identifiers a required field
    },
    "product": {
      "$ref": "cda_coded_entry"
    },
    "status": {
      "type": "string"
    },
    "date_time": {
      "$ref": "cda_date"
    }
  },
  "additionalProperties": false,
  "required": ["product"]
};
