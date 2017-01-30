module.exports = {
    "id": "result",
    "type": "object",
    "properties": {
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "cda_id"
            },
            "minItems": 1
        },
        "result_set": {
            "$ref": "cda_coded_entry"
        },
        "results": {
            "type": "array",
            "minItems": 1,
            "items": {
                "type": "object",
                "properties": {
                    "date_time": {
                        "$ref": "cda_date"
                    },
                    "identifiers": {
                        "type": "array",
                        "items": {
                            "$ref": "cda_id"
                        }
                    },
                    "interpretations": {
                        "type": "array",
                        "items": {
                            "$ref": "cda_coded_entry"
                        }
                    },
                    "result": {
                        "$ref": "cda_coded_entry"
                    },
                    "status": {
                        "type": "string"
                    },
                    "unit": {
                        "type": "string"
                    },
                    "value": {
                        "type": "number"
                    },
                    "text": {
                        "type": "string"
                    },
                    "reference_range": {
                        "type": "object",
                        "properties": {
                            "text": {
                                "type": "string"
                            },
                            "low_value": {
                                "type": "number"
                            },
                            "low_unit": {
                                "type": "string"
                            },
                            "high_value": {
                                "type": "number"
                            },
                            "high_unit": {
                                "type": "string"
                            },
                            "value": {
                                "type": "object",
                                "properties": {
                                    "code_system_name": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "interpretation": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                },
                "required": [
                    "result",
                    "date_time",
                    "status"
                ],
                "additionalProperties": false
            }

        }
    },
    "additionalProperties": false,
    "required": [
        "results"
    ]
};
