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
            "type": "string"
        },
        "identifiers": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "cda_id"
            }
        },
        "marital_status": {
            "type": "string"
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
        "race_ethnicity": {
            "type": "string"
        },
        "religion": {
            "type": "string"
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
                        "type": "string"
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
                        "type": "string"
                    },
                    "mode": {
                        "type": "string"
                    },
                    "preferred": {
                        "type": "boolean"
                    },
                    "proficiency": {
                        "type": "string"
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
