var assessmentSupportingObservation = {
  type: "object",
  properties: {
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
  }
};

var assessmentScaleObservation = {
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
    "derivation_expression": {
      "type": "string"
    },
    "date_time": {
      "$ref": "cda_date"
    },
    "value": {
      "type": "string"
    },
    "supporting_observations": {
      "type": "array",
      "items": assessmentSupportingObservation
    }
  }
};

var mentalStatusObservation = {
  type: "object",
  properties: {
    identifiers: {
      type: "array",
      items: {
        $ref: "cda_id"
      }
    },
    code: {
      type: "string"
    },
    date_time: {
      $ref: "cda_date"
    },
    value: {
      type: "string"
    },
    assessment_observations: {
      type: "array",
      items: assessmentScaleObservation
    },
    reference_range: {
      type: "object",
      properties: {
        text: {
          type: "string"
        },
        low_value: {
          type: "number"
        },
        low_unit: {
          type: "string"
        },
        high_value: {
          type: "number"
        },
        high_unit: {
          type: "string"
        },
        value: {
          type: "object",
          properties: {
            code_system_name: {
              type: "string"
            },
            code: {
              type: "string"
            },
            name: {
              type: "string"
            },
            interpretation: {
              type: "string"
            }
          }
        }
      }
    }
  }
};

var mentalStatusOrganizer = {
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
    "date_time": {
      "$ref": "cda_date"
    },
    observations: {
      "type": "array",
      "items": mentalStatusObservation
    }
  }
};

module.exports = {
  "id": "mental_status",
  "type": "object",
  "properties": {
    "organizers": {
      "type": "array",
      "items": mentalStatusOrganizer
    },
    "observations": {
      "type": "array",
      "items": mentalStatusObservation
    },
    "assessment_observations": {
      "type": "array",
      "items": assessmentScaleObservation
    },
  },
  "additionalProperties": false
};
