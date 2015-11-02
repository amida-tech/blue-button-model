module.exports = {
    "id": "demographics",
    "type": "object",
    "properties": {
        "name": {
            "$ref": "cda_name"
        },
        "dob": {
            "$ref": "cda_date"
        },
        "gender": {
            "$ref": "cda_coded_entry"
        },
        "identifiers": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "cda_id"
            }
        },
        "marital_status": {
            "$ref": "cda_coded_entry"
        },
        "addresses": {
            "type": "array",
            "items": {
                "$ref": "cda_address"
            },
            "minItems": 1
        },
        "phone": {
            "type": "array",
            "items": {
                "$ref": "cda_phone"
            }
        },
        "email": {
            "type": "array",
            "items": {
                "$ref": "cda_email"
            }
        },
        "race": {
            "$ref": "cda_coded_entry"
        },
        "ethnicity": {
            "$ref": "cda_coded_entry"
        },
        "religion": {
            "$ref": "cda_coded_entry"
        },
        "birthplace": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "zip": {
                    "type": "string"
                },
                "use": {
                    "type": "string"
                }
            },
            "additionalProperties": false,
            "minProperties": 1,
            "required": [
                "city",
                "country"
            ]
        },
        "guardians": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "addresses": {
                        "type": "array",
                        "items": {
                            "$ref": "cda_address"
                        }
                    },
                    "names": {
                        "type": "array",
                        "items": {
                            "$ref": "cda_name"
                        }
                    },
                    "phone": {
                        "type": "array",
                        "items": {
                            "$ref": "cda_phone"
                        }
                    },
                    "relation": {
                        "$ref": "cda_coded_entry"
                    }
                },
                "required": [
                    "names"
                ],
                "additionalProperties": false,
                "minProperties": 1
            },
            "minItems": 1
        },
        "languages": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "language": {
                        "$ref": "cda_coded_entry"
                    },
                    "mode": {
                        "$ref": "cda_coded_entry"
                    },
                    "preferred": {
                        "type": "boolean"
                    },
                    "proficiency": {
                        "$ref": "cda_coded_entry"
                    }
                },
                "additionalProperties": false,
                "required": [
                    "language"
                ]
            },
            "minItems": 1
        }
    },
    "additionalProperties": false,
    "required": [
        "name"
    ]
};
