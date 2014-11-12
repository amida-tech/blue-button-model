module.exports = {
	"id": "payers",
    "type": "array",
    "$schema": "http://json-schema.org/draft-04/schema",
    "items": {
        "type": "object",
        "properties": {
            "identifiers": {
                "type": "array",
                "items": {
                    "$ref": "http://local.com/cda_id"
                },
                "minItems": 1
            },
            "policy": {
                "type": "object",
                "properties": {
                    "identifiers": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_id"
                        },
                        "minItems": 1
                    },
                    "code": {

                        "$ref": "http://local.com/cda_coded_entry"

                    },
                    "insurance": {
                        "type": "object",
                        "properties": {
                            "code": {
								"$ref": "http://local.com/cda_coded_entry"
                            },
                            "performer": {
                                "$ref": "http://local.com/cda_performer"
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "additionalProperties": false
            },
            "guarantor": {
                "type": "object",
                "properties": {
                    "code": {
                        "$ref": "http://local.com/cda_coded_entry"

                    },
                    "identifiers": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_id"
                        },
                        "minItems": 1
                    },
                    "address": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_address"
                        }
                    },
                    "phone": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_phone"
                        }
                    },
                    "name": {
                        "type": "array",
                        "items": {
                            "type": "object"
                        }
                    }
                },
                "additionalProperties": false
            },
            "participant": {
                "type": "object",
                "properties": {
                    "date_time": {
                        "$ref": "http://local.com/cda_date"
                    },
                    "code": {
                        "$ref": "http://local.com/cda_coded_entry"

                    },
                    "performer": {
                        "$ref": "http://local.com/cda_performer"
                    },
                    "name": {
                        "type": "array",
                        "items": {
                            "type": "object"
                        }
                    }
                },
                "additionalProperties": false
            },
            "policy_holder": {
                "type": "object",
                "properties": {
                    "performer": {
                        "type": "object",
                        "properties": {
                            "identifiers": {
                                "type": "array",
                                "items": {
                                    "$ref": "http://local.com/cda_id"
                                },
                                "minItems": 1
                            },
                            "address": {
                                "type": "array",
                                "items": {
                                    "$ref": "http://local.com/cda_address"
                                }
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "additionalProperties": false
            },
            "authorization": {
                "type": "object",
                "properties": {
                    "identifiers": {
                        "type": "array",
                        "items": {
                            "$ref": "http://local.com/cda_id"
                        },
                        "minItems": 1
                    },
                    "procedure": {
                        "type": "object",
                        "properties": {
                            "code": {
                                "$ref": "http://local.com/cda_coded_entry"
                            }

                        },
                        "additionalProperties": false
                    }
                }
            }
        },
        "required": [
            "policy",
            "participant"
        ],
        "additionalProperties": false
    }
};
