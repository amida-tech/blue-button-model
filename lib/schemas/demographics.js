module.exports = {
    "id": "demographics",
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema",
    "properties": {
        "name": {
            "$ref": "http://local.com/cda_name"
        },
        "dob": {
            "$ref": "http://local.com/cda_date"
        },
        "gender": {
            "type": "string"
        },
        "identifiers": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "http://local.com/cda_id"
            }
        },
        "marital_status": {
            "type": "string"
        },
        "addresses": {
            "type": "array",
            "items": {
                "$ref": "http://local.com/cda_address"
            },
            "minItems": 1
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
                "$ref": "http://local.com/cda_email"
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
                            "$ref": "http://local.com/cda_address"
                        }
                    },
                    "names": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_name"
                        }
                    },
                    "phone": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_phone"
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
