"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "name": "Pneumonia",
  "code": "233604007",
  "code_system_name": "SNOMED CT"
};

samples.valid_1 = {
  "code": "233604007"
};

samples.valid_2 = {
  "name": "Proventil HFA",
  "code": "219483",
  "translations": [{
    "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
    "code": "573621",
    "code_system_name": "RXNORM"
  }],
  "code_system_name": "RXNORM"
};

samples.invalid_0 = {};

samples.invalid_1 = {
  "name": "Proventil HFA",
  "code": "219483",
  "translations": {
    "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
    "code": "573621",
    "code_system_name": "RXNORM"
  },
  "code_system_name": "RXNORM",
  "code_system_version": 2
};
