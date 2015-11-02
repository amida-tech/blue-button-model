module.exports = {
    "id": "header",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "cda_id"
            }
        },
        "date_time": {
            "$ref": "cda_date"
        },

        "confidentiality_code": {
            "$ref": "cda_coded_entry"
        },
        "code": {
            "$ref": "cda_coded_entry"
        },
        "template": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "title": {
            "type": "string"
        },
        "author": {

            "type": "object",
            "properties": {
                "date_time": {
                    "$ref": "cda_date"
                },
                "author": {
                    "type": "array",
                    "items": {
                        "$ref": "cda_performer"
                    }

                }
            },
            "additionalProperties": false,
        },
        "data_enterer": {
            "$ref": "cda_performer"
        },
        "informant": {
            "$ref": "cda_performer"
        },
        "custodian": {
            "$ref": "cda_performer"
        },

        "service_event": {

            "type": "object",
            "properties": {
                "date_time": {
                    "$ref": "cda_date"
                },
                "code": {
                    "$ref": "cda_coded_entry"
                },
                "performer": {
                    "type": "array",
                    "items": {

                        "type": "object",
                        "properties": {

                            "code": {
                                "$ref": "cda_coded_entry"
                            },
                            "performer": {
                                "type": "array",
                                "items": {
                                    "$ref": "cda_performer"
                                }
                            }
                        }
                    }
                }
            },
            "additionalProperties": false,

        }
    },
    "additionalProperties": false,
    "required": [
        "title"
    ]
};
