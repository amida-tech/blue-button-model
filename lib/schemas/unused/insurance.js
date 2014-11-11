module.exports = {
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {

        "code": {
            "$ref": "http://local.com/cda_coded_entry"
        },
        "addresses": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_address"
            },
            "minItems": 1
        },
        "date_time": {
            "$ref": "http://local.com/cda_date"
        },
        "plan_id": {
            "$ref": "http://local.com/cda_id"
        },
        "plan_information": {
            "type": "string"
        },
        "performer": {
            "$ref": "http://local.com/cda_performer"
        },
        "plan_name": {
            "type": "string"
        },
        "policy_number": {
            "type": "string"
        },
        "type": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "group_name": {
            "type": "string"
        },
        "group_number": {
            "type": "string"
        },
        "member_name": {
            "$ref": "http://local.com/cda_name"
        },
        "member_id": {
            "$ref": "http://local.com/cda_id"
        },
        "payer_name": {
            "type": "string"
        },
        "payer_id": {
            "$ref": "http://local.com/cda_id"
        },
        "email ": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_email"
            }
        },
        "phone ": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_phone"
            }
        }
    },
    "additionalProperties": false
};
