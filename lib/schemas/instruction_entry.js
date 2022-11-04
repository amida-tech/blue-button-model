module.exports = {
  "id": "instruction_entry",
  "type": "object",
  "properties": {
    "code": {
      "$ref": "cda_coded_entry"
    },
  },
  "required": ["code"],
  "additionalProperties": false
};
