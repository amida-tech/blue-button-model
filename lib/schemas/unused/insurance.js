module.exports = {
    "type": "object",
    "properties": {

        "code": {
            "$ref": "cda_coded_entry"
        },
        "addresses": {
            "type": "array",
            "items": {
                "$ref": "cda_address"
            },
            "minItems": 1
        },
        "date_time": {
            "$ref": "cda_date"
        },
        "plan_id": {
            "$ref": "cda_id"
        },
        "plan_information": {
            "type": "string"
        },
        "performer": {
            "$ref": "cda_performer"
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
            "$ref": "cda_name"
        },
        "member_id": {
            "$ref": "cda_id"
        },
        "payer_name": {
            "type": "string"
        },
        "payer_id": {
            "$ref": "cda_id"
        },
        "email ": {
            "type": "array",
            "items": {
                "$ref": "cda_email"
            }
        },
        "phone ": {
            "type": "array",
            "items": {
                "$ref": "cda_phone"
            }
        }
    },
    "additionalProperties": false
};
