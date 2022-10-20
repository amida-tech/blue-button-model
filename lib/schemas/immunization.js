module.exports = {
  "id": "immunization",
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
    "status": {
      "type": "string"
    },
    "sequence_number": {
      "type": "string"
    },
    "administration": {
      "type": "object",
      "properties": {
        "dose": {
          "$ref": "cda_physical_quantity"
        },
        "route": {
          "$ref": "cda_coded_entry"
        },
        "body_site": {
          "$ref": "cda_coded_entry"
        },
        "form": {
          "$ref": "cda_coded_entry"
        }
      },
      "additionalProperties": false
    },
    "product": {
      "type": "object",
      "properties": {
        "lot_number": {
          "type": "string"
        },
        "manufacturer": {
          "type": "string"
        },
        "product": {
          "$ref": "cda_coded_entry"
        }
      },
      "required": [
        "product"
      ],
      "additionalProperties": false
    },
    "performer": {
      "$ref": "cda_performer"
    },
    "instructions": {
      "type": "object",
      "properties": {
        "free_text": {
          "type": "string"
        },
        "code": {
          "$ref": "cda_coded_entry"
        }
      },

      "additionalProperties": false
    },
    "refusal_reason": {
      "type": "string"
    },
    "indications": {
      "type": "array",
      "items": {
        "$ref": "indication"
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "status",
    "product"
  ]
};
