module.exports = {
    "id": "vital",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "cda_id"
            },
            "minItems": 1
        },
        "vital": {
            "$ref": "cda_coded_entry"
        },
        "status": {
            "type": "string"
        },
        "date_time": {
            "$ref": "cda_date"
        },
        "interpretations": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "value": {
            "type": "number"
        },
        "text": {
            "type": "string"
        },
        "unit": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": ["vital"]
};
