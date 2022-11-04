module.exports = {
  "id": "physicalExam",
  "type": "object",
  "properties": {
    "identifiers": {
      "type": "string",
      "$ref": "cda_id"
    },
    "code": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "text": {
      "type": "string",
    },
    "entry": {
      "type": "array",
      "items": {
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
            "value": {
                "type": "string"
            },
            "targetSiteCode": {
                "type": "string",
                "qualifier": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "value": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
      },
      "authorParticipation": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
              "identifiers": {
                "type": "string",
                "$ref": "cda_id"
              },
              "time": {
                "type": "string",
                "$ref": "cda_date"
              },
              "assignedAuthor": {
                "type": "string",
              },
              "code": {
                "type": "string"
              },
              "assignedPerson": {
                "type": "string"
              },
          }
        }
      },
      "entryRelationship": {
        "type": "array",
        "items": {
          "identifiers": {
            "type": "string",
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
          "effectiveTime": {
            "$ref": "cda_date"
          },
          "value": {
            "type": "string"
          },
        },
        "entryRelationship": {
          "type": "array"
        }
      }
    },
    "observation": {
      "type": "array",
      "items": {
        "identifiers": {
          "type": "string",
          "$ref": "cda_id"
        },
        "observation": {
          "type": "object",
          "properties": {
            "identifiers": {
              "type": "string",
              "$ref": "cda_id"
            },
            "code": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "targetSiteCode": {
              "type": "string"
            }
          },
          "entryRelationship": {
            "type": "array"
          }
        }
      },
      "entryRelationship": {
        "type": "array"
      }
    },
    "component": {
      "type": "array",
      "items": {
        "code": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "text": {
          "type": "string"
        }
      }
    },
    "required": [
      "title", "text", "identifiers"
    ]
  },
  "additionalProperties": false
};
