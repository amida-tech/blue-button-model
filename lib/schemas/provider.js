module.exports = {
  "id": "provider",
  "type": "object",
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
    "type": {
      "$ref": "cda_coded_entry"
    },
    "role": {
      "$ref": "cda_coded_entry"
    },
    "name": {
      "$ref": "cda_name"
    },
    "address": {
      "$ref": "cda_address"
    },
    "phone": {
      "type": "array",
      "items": {
        "$ref": "cda_phone"
      }
    },
    "email": {
      "type": "array",
      "items": {
        "$ref": "cda_phone"
      }
    },
    "organization": {
      "$ref": "cda_organization"
    }
  },
  "additionalProperties": false
};
