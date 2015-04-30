module.exports = {
    "id": "organization",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
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
                }
            }
        },
        "type": {
            "type": "object",
            "properties": {
                "coding": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "system": {
                                "type": "string"
                            },
                            "code": {
                                "type": "string"
                            },
                            "display": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        },
        "contact": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "purpose": {
                        "type": "object",
                        "properties": {
                            "coding": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "system": {
                                            "type": "string"
                                        },
                                        "code": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "name": {
                        "type": "string"
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
                            }
                        }
                    },
                    "addresses": {
                        "type": "array",
                        "items": {
                            "$ref": "cda_address"
                        },
                    }
                }
            }
        },
        "identifiers": { //includes npi, replacement_npi
            "type": "array",
            "items": {
                "$ref": "cda_id"
            }
        },
        "part_of": {
            "type": "array",
            "items": {
                "$ref": "cda_organization"
            }
        },
        "active": {
            "type": "string"
        },
    }
};
