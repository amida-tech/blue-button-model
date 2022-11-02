module.exports = {
    "id": "physical_exam",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "string",

            "$ref": "cda_id"

        },
        "code": {
            "type": "string"
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
                "identifiers": {
                    "type": "string",
                    "$ref": "cda_id"
                },
                "lcwObservation": {
                  "type": "object",
                  "properties": {
                    "identifiers": {
                        "type": "string",
                        "$ref": "cda_id"
                    },
                  }
                }
            }
        },
        "component": {
            "type": "array",
            "items": {
                "code": "string",
                "title": "string",
                "text": "string",
            }
        },
        "required": [
            "title", "text", "identifiers"
        ]
    },
    "additionalProperties": false
};
