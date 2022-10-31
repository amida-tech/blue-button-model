module.exports = {
    "id": "instructions",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "string",

            "$ref": "cda_id"

        },
        "title": {
            "type": "string"
        },
        "text": {
            "type": "string",
        },
        "entry": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "identifiers": {
                        "type": "string",
                    },
                    "code": "string"
                }
            }
        },
        "required": [
            "title", "text", "identifiers"
        ]
    },
    "additionalProperties": false
};
