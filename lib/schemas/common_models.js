module.exports = [{
    "id": "cda_address",
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
        "street_lines": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "minItems": 1
        },
        "use": {
            "type": "string"
        },
        "zip": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "street_lines",
        "city"
    ]
}, {
    "id": "cda_date_element",
    "type": "object",
    "properties": {
        "date": {
            "type": "string",
            "format": "date-time"
        },
        "precision": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "date"
    ]
}, {
    "id": "cda_date",
    "type": "object",
    "properties": {
        "low": {
            "$ref": "cda_date_element"
        },
        "point": {
            "$ref": "cda_date_element"
        },
        "high": {
            "$ref": "cda_date_element"
        },
        "center": {
            "$ref": "cda_date_element"
        }
    },
    "additionalProperties": false,
    "minProperties": 1
}, {
    "id": "cda_phone",
    "type": "object",
    "properties": {
        "number": {
            "type": "string"
        },
        "type": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "number"
    ]
}, {
    "id": "cda_email",
    "type": "object",
    "properties": {
        "address": {
            "type": "string"
        },
        "type": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "address"
    ]
}, {
    "id": "cda_id",
    "type": "object",
    "properties": {
        "extension": {
            "type": "string"
        },
        "identifier": {
            "type": "string"
        }
    },
    "additionalProperties": false,
    "required": [
        "identifier"
    ]
}, {
    "id": "cda_name",
    "type": "object",
    "properties": {
        "prefix": {
            "type": "string"
        },
        "first": {
            "type": "string"
        },
        "last": {
            "type": "string"
        },
        "middle": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "suffix": {
            "type": "string"
        }
    },
    "additionalProperties": false
}, {
    "id": "cda_coded_entry",
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
        "translations": {
            "type": "array",
            "items": {
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
                    "nullFlavor": {
                        "type": "string"
                    }
                },
                "additionalProperties": false,
                "minProperties": 1
            },
            "minItems": 1
        }
    },
    "minProperties": 1,
    "additionalProperties": false
}, {
    "id": "cda_physical_quantity",
    "type": "object",
    "properties": {
        "unit": {
            "type": "string"
        },
        "value": {
            "type": "number"
        }
    },
    "additionalProperties": false,
    "required": [
        "unit",
        "value"
    ]
}, {
    "id": "cda_location",
    "type": "object",
    "properties": {
        "address": {
            "type": "array",
            "items": {
                "$ref": "cda_address"
            },
            "minItems": 1
        },
        "location_type": {
            "$ref": "cda_coded_entry"
        },
        "name": {
            "type": "string"
        },
        "phone": {
            "type": "array",
            "items": {
                "$ref": "cda_phone"
            }
        }
    },
    "required": [
        "name"
    ],
    "additionalProperties": false
}, {
    "id": "cda_organization",
    "type": "object",
    "properties": {
        "address": {
            "type": "array",
            "items": {
                "$ref": "cda_address"
            }
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "cda_id"
            }
        },
        "name": {
            "type": "array",
            "items": {
                "type": "string"
            }
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
        }
    },
    "additionalProperties": false
}, {
    "id": "cda_performer",
    "type": "object",
    "properties": {
        "type": {
            "type": "string"
        },
        "address": {
            "type": "array",
            "items": {
                "$ref": "cda_address"
            }
        },
        "identifiers": {
            "type": "array",
            "items": {
                "$ref": "cda_id"
            }
        },
        "name": {
            "type": "array",
            "items": {
                "anyOf": [{
                    "$ref": "cda_name"
                }, {
                    "type": "string"
                }]
            }
        },
        "organization": {
            "type": "array",
            "items": {
                "$ref": "cda_organization"
            }
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
        "code": {
            "type": "array",
            "items": {
                "$ref": "cda_coded_entry"
            }
        }
    },
    "additionalProperties": false
}];
