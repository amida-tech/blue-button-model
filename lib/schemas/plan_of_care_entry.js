module.exports = {
	"id": "plan_of_care_entry",
    "type": "object",
    "properties": {
        "plan": {
            "$ref": "cda_coded_entry"
        },
        "type": {
            "type": "string"
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
        }
    },
    "required": [
        "type"
    ],
    "additionalProperties": false
};
