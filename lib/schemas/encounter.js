module.exports = {
    "id": "encounter",
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
        "date_time": {
            "$ref": "http://local.com/cda_date"
        },
        "encounter": {
            "$ref": "http://local.com/cda_coded_entry"
        },
        "findings": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "value": {
                        "$ref": "http://local.com/cda_coded_entry"
                    },
                    "identifiers": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_id"

                        }
                    },
                    "date_time": {
                        "$ref": "http://local.com/cda_date"
                    }
                },
                "additionalProperties": false
            }
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_id"

            }
        },
        "performers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_performer"
            }
        },
        "locations": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_location"
            }
        }
    },
    "additionalProperties": false,
    "required": ["encounter"]
};
