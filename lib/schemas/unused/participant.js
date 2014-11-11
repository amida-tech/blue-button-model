module.exports = {
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
        "name": {
            "$ref": "http://local.com/cda_name"
        },
        "phone": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_phone"
            }
        },
        "role": {
            "type": "string"
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_id"
            }
        }
    },
    "additionalProperties": false
};
