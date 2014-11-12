module.exports = {
    "id": "claim",
    "type": "object",
    "properties": {
        "number": {
            "type": "string"
        },
        "diagnosis": {
            "type": "array",
            "items": {
                "$ref": "cda_coded_entry"
            }
        },
        "name": {
            "type": "string"
        },
        "payer": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "date_time": {
            "$ref": "cda_date"
        },
        "service": {
            "type": "string"
        },
        "type": {
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
        "performer": {
            "type": "array",
            "items": {
                "$ref": "cda_performer"
            }
        },
        "charges": {
            "type": "object",
            "properties": {
                "insurance_paid": {
                    "type": "string"
                },
                "negotiated_price": {
                    "type": "string"
                },
                "patient_responsibility": {
                    "type": "string"
                },
                "price_billed": {
                    "type": "string"
                },
                "provider_paid": {
                    "type": "string"
                }
            },
            "additionalProperties": false
        },
        "lines": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "line": {
                        "type": "string"
                    },
                    "charges": {
                        "type": "object",
                        "properties": {
                            "insurance_paid": {
                                "type": "string"
                            },
                            "negotiated_price": {
                                "type": "string"
                            },
                            "patient_responsibility": {
                                "type": "string"
                            },
                            "price_billed": {
                                "type": "string"
                            },
                            "provider_paid": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    "drug": {
                        "type": "object",
                        "properties": {
                            "code": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    "modifier": {
                        "type": "array",
                        "items": {
                            "properties": {
                                "code": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                }
                            },
                            "additionalProperties": false
                        }
                    },
                    "number": {
                        "type": "string"
                    },
                    "place_of_service": {
                        "type": "object",
                        "properties": {
                            "code": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    "procedure": {
                        "type": "object",
                        "properties": {
                            "code": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    "quantity": {
                        "type": "object",
                        "properties": {
                            "value": {
                                "type": "number"
                            },
                            "unit": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    "performer": {
                        "type": "array",
                        "items": {
                            "$ref": "cda_performer"
                        }
                    },
                    "revenue": {
                        "type": "object",
                        "properties": {
                            "code": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    "date_time": {
                        "$ref": "cda_date"
                    },
                    "type": {
                        "type": "object",
                        "properties": {
                            "code": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "name": {
                                "type": "string"
                            }
                        },
                        "additionalProperties": false
                    },
                    "type_of_service_code": {
                        "type": "string"
                    },
                    "type_of_service": {
                        "type": "number"
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "additionalProperties": false
};
