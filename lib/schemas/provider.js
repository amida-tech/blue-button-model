module.exports = {
    "id": "provider",
    "type": "object",
    "properties": {
        "name": {
            "$ref": "cda_name"
        },
        "other_name": {
            "$ref": "cda_name"
        },
        "addresses": {
            "type": "array",
            "items": {
                "$ref": "cda_address"
            }
        },
        "phone": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "number": {
                        "type": "string"
                    }
                },
                "additionalProperties": false
            }
        },
        "organizations": {
            "type": "array",
            "items": {
                "$ref": "cda_organization"
            }
        },
        "credential": {
            "type": "string"
        },
        "other_credential": {
            "type": "string"
        },
        "gender": {
            "type": "string"
        },
        "enumeration_date": {
            "type": "string"
        },
        "deactivation_reason": {
            "type": "string"
        },
        "deactivation_date": {
            "type": "string"
        },
        "reactivation_date": {
            "type": "string"
        },
        "identifiers": { //includes npi, replacement_npi
            "type": "array",
            "items": {
                "$ref": "cda_id"
            }
        },
        "provider_details": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "healthcare_taxonomy_code": {
                        "type": "string"
                    },
                    "license_number": {
                        "type": "string"
                    },
                    "license_number_state": {
                        "type": "string"
                    },
                    "taxonomy_switch": {
                        "type": "string"
                    }
                },
                "additionalProperties": false
            }
        },
        "sole_proprietor": {
            "type": "string"
        }
    },
    "additionalProperties": false
};