module.exports = {
	"id": "plan_of_care_entry",
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
        "plan": {
            "$ref": "http://local.com/cda_coded_entry"
        },
        "type": {
            "type": "string"
        },
        "date_time": {
            "$ref": "http://local.com/cda_date"
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_id"
            },
            "minItems": 1
        },
        "status": {
            "type": "string"
        }
    },
    "required": [
        "type"
    ],
    "additionalProperties": false
};
