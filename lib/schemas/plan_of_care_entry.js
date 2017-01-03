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
        "text": {
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
            "$ref": "cda_coded_entry"
        }
    },
    "required": [
        "type"
    ],
    "additionalProperties": false
};
