module.exports = {
	"id": "social_history",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "date_time": {
                "$ref": "cda_date"
            },
            "value": {
                "type": "string"
            },
            "code": {
                "$ref": "cda_coded_entry"
            },
            "observation_value": {
                "type": "string"
            },
            "identifiers": {
                "type": "array",
                "items": {
                    "$ref": "cda_id"
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
