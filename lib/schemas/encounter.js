module.exports = {
    "id": "encounter",
    "type": "object",
    "properties": {
      "date_time": {
        "$ref": "cda_date"
      },
      "encounter": {
        "$ref": "cda_coded_entry",
        // put new code here?

        "diagnosis": {
          "type": "object",
          "properties": {
            "identifiers": {
              "type": "array",
              "items": {
                "$ref": "cda_id"
              }
            },
            "id": {
              "type": "array",
              "items": {
                "$ref": "cda_id"
              }
            },
            "code": {
              "type": "string"
            },
            "statusCode": {
              "type": "string"
            },
            "date_time": {
              "$ref": "cda_date"
            },
            "value": {
              "type": "string"
            },
            "authorParticipation": {
              "type": "string"
            },
            "observation": {
              "type": "object",
              "properties": {
                "identifiers": {
                  "$ref": "cda_id"
                }
              },
              "code": {
                "type": "string"
              },
              "statusCode": {
                "type": "string"
              },
              "time": {
                "$ref": "cda_date"
              },
              "value": {
                "type": "string"
              },

              "priority": {
                "type": "array",
                "items": {
                  "templateId": {
                    "$ref": "cda_id"
                  },
                  "code": {
                    "type": "string"
                  },
                  "time": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                  "author": {
                    "type": "array",
                    "items": {
                      "templateId": {
                        "$ref": "cda_id"
                      },
                      "code": {
                        "type": "string"
                      },
                      "assignedPerson": {
                        "type": "string",
                        "organization": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "array",
                              "name": {
                                "type": "array"
                              },
                              "telecom": {
                                "type": "array"
                              },
                              "addr": {
                                "type": "array"
                              }
                            }
                          }
                        },
                      }
                    }
                  }
                }
              },

              "age": {
                "type": "object",
                "properties": {
                  "identifiers": {
                    "type": "array",
                    "items": {
                      "$ref": "cda_id"
                    }
                  },
                  "code": {
                    "type": "string"
                  },
                  "statusCode": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                }
              },

              "prognosis": {
                "type": "object",
                "properties": {
                  "identifiers": {
                    "type": "array",
                    "items": {
                      "$ref": "cda_id"
                    }
                  },
                  "code": {
                    "type": "string"
                  },
                  "statusCode": {
                    "type": "string"
                  },
                  "time": {
                    "$ref": "cda_date"
                  },
                  "value": {
                    "type": "string"
                  },
                }
              },

              "problemStatus": {
                "type": "object",
                "properties": {
                  "identifiers": {
                    "type": "array",
                    "items": {
                      "$ref": "cda_id"
                    }
                  },
                  "code": {
                    "type": "string"
                  },
                  "statusCode": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  },
                }
              },
              "authorParticipation": {
                "type": "object",
                "properties": {
                  "identifiers": {
                    "type": "array",
                    "items": {
                      "$ref": "cda_id"
                    }
                  },
                  "id": {
                    "type": "string"
                  },
                  "code": {
                    "type": "string"
                  },
                  "assignedPerson": {
                    "type": "object",
                    "properties": {
                      "name": "array"
                    }
                  },
                  "organization": {
                    "type": "object",
                    "properties": {
                      "id": "array",
                      "name": "array",
                      "telecom": "array",
                      "addr": "array"
                    }
                  }
                }
              },
              "scale": {
                "type": "object",
                "properties": {
                  "identifiers": {
                    "$ref": "cda_id"
                  },
                  "id": {
                    "type": "array"
                  },
                  "code": {
                    "type": "string"
                  },
                  "derivation": {
                    "type": "string"
                  },
                  "statusCode": {
                    "type": "string"
                  },
                  "time": {
                    "$ref": "cda_date"
                  },
                  "value": {
                    "type": "string"
                  },
                  "interpretationCode": {
                    "type": "array",
                    "items": {
                      "translation": {
                        "type": "array"
                      }
                    }
                  },
                  "author": {
                    "type": "array",
                  },
                  "observation": {
                    "type": "object",
                    "properties": {
                      "identifiers": {
                        "$ref": "cda_id"
                      },
                      "id": {
                        "type": "array"
                      },
                      "code": {
                        "type": "string"
                      },
                      "statusCode": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                    },
                    // "required": ["identifiers", "id", "code", "statusCode", "value"]
                  }
                },
                "additionalProperties": false,
                // "required": ["identifiers", "time", "code", "statusCode", "value"]
              },
              "range": {
                "type": "array",
                "items": {
                  "observation": {
                    "type": "string",

                  }
                },
                "entry": {
                  "type": "object",
                  "properties": {
                    "identifiers": {
                      "$ref": "cda_id"
                    },
                    "id": {
                      "type": "array"
                    },
                    "code": {
                      "type": "string"
                    },
                    "statusCode": {
                      "type": "string"
                    },
                    "value": {
                      "type": "string"
                    },
                  },
                  "additionalProperties": false,
                  // "required": ["identifiers", "code", "statusCode"]
                },
                "diagnosisDate": {
                  "type": "object",
                  "properties": {
                    "identifiers": {
                      "$ref": "cda_id"
                    },
                    "code": {
                      "type": "string"
                    },
                    "statusCode": {
                      "type": "string"
                    },
                    "time": {
                      "$ref": "cda_date"
                    },
                  },
                  "additionalProperties": false,
                  // "required": ["identifiers", "code", "time", "statusCode"]
                },

              },
              "findings": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "value": {
                      "$ref": "cda_coded_entry"
                    },
                    "identifiers": {
                      "type": "array",
                      "items": {
                        "$ref": "cda_id"

                      }
                    },
                    "date_time": {
                      "$ref": "cda_date"
                    }
                  },
                  "additionalProperties": false
                }
              },
              "identifiers": {
                "type": "array",
                "items": {
                  "$ref": "cda_id"

                }
              },
              "performers": {
                "type": "array",
                "items": {
                  "$ref": "cda_performer"
                }
              },
              "locations": {
                "type": "array",
                "items": {
                  "$ref": "cda_location"
                }
              }
            },
            "additionalProperties": false,
            "required": ["encounter"]
          }
        }
      }
    }
  };