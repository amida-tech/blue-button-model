module.exports = {
	"id": "family_history_entry",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "cda_id"
            },
            "minItems": 1
        },
        "name": {
            "$ref": "cda_name"
        },
        "relationship": {
            "type": "string"
        },
        "dead": {
            "type": "boolean"
        },
        "conditions": {
            "type": "array",
            "items": {
                "$ref": "cda_coded_entry"
            },
            "minItems": 1
        },
        "dob": {
            "$ref": "cda_date"
        }
    },
    "additionalProperties": false,
    "required": ["name", "relationship"]
};
