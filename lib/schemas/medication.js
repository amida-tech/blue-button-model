module.exports = {
    "id": "medication",
    "type": "object",
    "properties": {
        "date_time": {
            "$ref": "cda_date"
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "cda_id"
            },
            "minItems": 1
        },
        "sig": {
            "type": "string"
        },
        "status": {
            "type": "string"
        },
        "administration": {
            "type": "object",
            "properties": {
                "dose": {
                    "$ref": "cda_physical_quantity"
                },
                "form": {
                    "$ref": "cda_coded_entry"
                },
                "rate": {
                    "$ref": "cda_physical_quantity"
                },
                "route": {
                    "$ref": "cda_coded_entry"
                },
                "dose_restriction": {
                    "$ref": "cda_physical_quantity"
                },
                "site": {
                    "$ref": "cda_coded_entry"
                },
                "interval": {
                    "type": "object",
                    "properties": {
                        "xsiType": {
                            "type": "string"
                        },
                        "phase": {
                            "$ref": "cda_date"
                        },
                        "period": {
                            "$ref": "cda_physical_quantity"
                        },
                        "frequency": {
                            "type": "boolean"
                        },
                        "alignment": {
                            "type": "string"
                        },
                        "event": {
                            "type": "string"
                        },
                        "event_offset": {
                            "type": "object",
                            "properties": {
                                "low": {
                                    "$ref": "cda_physical_quantity"
                                },
                                "high": {
                                    "$ref": "cda_physical_quantity"
                                },
                                "center": {
                                    "$ref": "cda_physical_quantity"
                                },
                                "width": {
                                    "$ref": "cda_physical_quantity"
                                }

                            },
                            "additionalProperties": false

                        }
                    },
                    "additionalProperties": false
                }

            },
            "additionalProperties": false,
            "minProperties": 1
        },

        "precondition": {
            "type": "object",
            "properties": {
                "code": {
                    "$ref": "cda_coded_entry"
                },
                "value": {
                    "$ref": "cda_coded_entry"
                }
            },
            "additionalProperties": false
        },
        "product": {
            "type": "object",
            "properties": {
                "identifiers": {
                    "type": "array",
                    "items": {
                        "$ref": "cda_id"
                    },
                    "minItems": 1
                },
                "product": {
                    "$ref": "cda_coded_entry"
                },
                "unencoded_name": {
                    "type": "string"
                },
                "manufacturer": {
                    "type": "string"
                }
            },
            "additionalProperties": false,
            "minProperties": 1,
            "required": [
                "product"
            ]
        },
        "supply": {
            "type": "object",
            "properties": {
                "date_time": {
                    "$ref": "cda_date"
                },
                "repeatNumber": {
                    "type": "string"
                },
                "quantity": {
                    "type": "string"
                },
                "author": {
                    "type": "object",
                    "properties": {
                        "identifiers": {
                            "type": "array",
                            "items": {
                                "$ref": "cda_id"
                            },
                            "minItems": 1
                        },
                        "date_time": {
                            "$ref": "cda_date"
                        },
                        "name": {
                            "$ref": "cda_name"
                        },
                        "organization": {
                            "$ref": "cda_organization"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        "indication": {
            "type": "object",
            "properties": {
                "identifiers": {
                    "type": "array",
                    "items": {
                        "$ref": "cda_id"
                    },
                    "minItems": 1
                },
                "code": {
                    "$ref": "cda_coded_entry"
                },
                "date_time": {
                    "$ref": "cda_date"
                },
                "value": {
                    "$ref": "cda_coded_entry"
                }
            },
            "additionalProperties": false
        },
        "performer": {
            "$ref": "cda_performer"
        },
        "drug_vehicle": {
            "$ref": "cda_coded_entry"
        },
        "dispense": {
            "type": "object",
            "properties": {
                "identifiers": {
                    "type": "array",
                    "items": {
                        "$ref": "cda_id"
                    },
                    "minItems": 1
                },
                "performer": {
                    "$ref": "cda_performer"
                }
            },
            "additionalProperties": false
        }
    },
    "additionalProperties": false,
    "minProperties": 1,
    "required": [
        "product",
        "status"
    ]
};
