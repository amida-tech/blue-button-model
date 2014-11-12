module.exports = {
	"id": "social_history",
    "type": "array",
    "$schema": "http://json-schema.org/draft-04/schema",

    "items": {
        "type": "object",
        "properties": {
            "date_time": {
                "$ref": "http://local.com/cda_date"
            },
            "value": {
                "type": "string"
            },
            "code": {
                "$ref": "http://local.com/cda_coded_entry"
            },
            "observation_value": {
                "type": "string"
            },
            "identifiers": {
                "type": "array",
                "items": {
                    "$ref": "http://local.com/cda_id"
                }
            }
        },
        "required": [
            "value"
        ],
        "additionalProperties": false
    },
    "additionalProperties": true
};
