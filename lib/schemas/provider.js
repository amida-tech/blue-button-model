module.exports = {
	"id": "provider",
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "properties": {
        "date_time": {
            "$ref": "http://local.com/cda_date"
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_id"
            }
        },
        "type": {
            "$ref": "http://local.com/cda_coded_entry"
        },
        "role": {
            "$ref": "http://local.com/cda_coded_entry"
        },
        "name": {
            "$ref": "http://local.com/cda_name"
        },
        "address": {
            "$ref": "http://local.com/cda_address"
        },
        "phone": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_phone"
            }
        },
        "email": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_phone"
            }
        },
        "organization": {
            "$ref": "http://local.com/cda_organization"
        }
    },
    "additionalProperties": false
};
