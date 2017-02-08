module.exports = {
    "id": "procedure",
    "type": "object",
    "properties": {
        "procedure": {
            "$ref": "cda_coded_entry"
        },
        "procedure_type": {
            "type": "string"
        },
        "body_sites": {
            "type": "array",
            "items": {
                "$ref": "cda_coded_entry"
            },
            "minItems": 1
        },
        "specimen": {
            "type": "object",
            "properties": {
                "code": {
                    "$ref": "cda_coded_entry"
                },
                "identifiers": {
                    "type": "array",
                    "items": {
                        "$ref": "cda_id"
                    }
                }
            },
            "additionalProperties": false
        },
        "priority": {
            "$ref": "cda_coded_entry"
        },
        "date_time": {
            "$ref": "cda_date"
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "cda_id"
            },
            "minItems": 1
        },
        "status": {
            "type": "string"
        },
        "performers": {
            "type": "array",
            "items": {
                "$ref": "cda_performer"
            }
        },
        "locations": {
            "type": "array",
            "items": {
                "$ref": "cda_location"
            }
        },
        "value": {
            "$ref": "cda_coded_entry"
        },
    },
    "required": [
        "procedure"
    ],
    "additionalProperties": false
};
