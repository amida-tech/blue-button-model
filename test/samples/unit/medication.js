"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "date_time": {
    "low": {
      "date": "2007-01-03T00:00:00Z",
      "precision": "day"
    },
    "high": {
      "date": "2012-05-15T00:00:00Z",
      "precision": "day"
    }
  },
  "identifiers": [{
    "identifier": "cdbd33f0-6cde-11db-9fe1-0800200c9a66"
  }],
  "status": "Completed",
  "sig": "Proventil HFA",
  "product": {
    "identifiers": [{
      "identifier": "2a620155-9d11-439e-92b3-5d9815ff4ee8"
    }],
    "unencoded_name": "Proventil HFA",
    "product": {
      "name": "Proventil HFA",
      "code": "219483",
      "translations": [{
        "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
        "code": "573621",
        "code_system_name": "RXNORM"
      }],
      "code_system_name": "RXNORM"
    },
    "manufacturer": "Medication Factory Inc."
  },
  "supply": {
    "date_time": {
      "low": {
        "date": "2007-01-03T00:00:00Z",
        "precision": "day"
      }
    },
    "repeatNumber": "1",
    "quantity": "75",
    "author": {
      "identifiers": [{
        "identifier": "2a620155-9d11-439e-92b3-5d9815fe4de8"
      }],
      "name": {
        "prefix": "Dr.",
        "last": "Seven",
        "first": "Henry"
      }
    },
    "instructions": {
      "code": {
        "code": "171044003",
        "code_system_name": "2.16.840.1.113883.6.96",
        "name": "immunization education"
      },
      "free_text": "Possible flu-like symptoms for three days."
    },
    "product": {
      "identifiers": [{
        "identifier": "2a620155-9d11-439e-92b3-5d9815ff4ee8"
      }],
      "unencoded_name": "Proventil HFA",
      "product": {
        "name": "Proventil HFA",
        "code": "219483",
        "translations": [{
          "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
          "code": "573621",
          "code_system_name": "RXNORM"
        }],
        "code_system_name": "RXNORM"
      },
      "manufacturer": "Medication Factory Inc."
    },
  },
  "administration": {
    "route": {
      "name": "RESPIRATORY (INHALATION)",
      "code": "C38216",
      "code_system_name": "Medication Route FDA"
    },
    "form": {
      "name": "INHALANT",
      "code": "C42944",
      "code_system_name": "Medication Route FDA"
    },
    "dose": {
      "value": 1,
      "unit": "mg/actuat"
    },
    "rate": {
      "value": 90,
      "unit": "ml/min"
    },
    "interval": {
      "period": {
        "value": 6,
        "unit": "h"
      },
      "frequency": true
    }
  },
  "performer": {
    "organization": [{
      "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.9999.1393"
      }],
      "name": [
        "Community Health and Hospitals"
      ]
    }]
  },
  "drug_vehicle": {
    "name": "Aerosol",
    "code": "324049",
    "code_system_name": "RXNORM"
  },
  "precondition": {
    "code": {
      "code": "ASSERTION",
      "code_system_name": "HL7ActCode"
    },
    "value": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system_name": "SNOMED CT"
    }
  },
  "indication": {
    "identifiers": [{
      "identifier": "db734647-fc99-424c-a864-7e3cda82e703",
      "extension": "45665"
    }],
    "code": {
      "name": "Finding",
      "code": "404684003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2007-01-03T00:00:00Z",
        "precision": "day"
      }
    },
    "value": {
      "name": "Pneumonia",
      "code": "233604007",
      "code_system_name": "SNOMED CT"
    }
  },
  "dispense": {
    "identifiers": [{
      "identifier": "1.2.3.4.56789.1",
      "extension": "cb734647-fc99-424c-a864-7e3cda82e704"
    }],
    "performer": {
      "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.9999.456",
        "extension": "2981823"
      }],
      "address": [{
        "street_lines": [
          "1001 Village Avenue"
        ],
        "city": "Portland",
        "state": "OR",
        "zip": "99123",
        "country": "US"
      }],
      "organization": [{
        "identifiers": [{
          "identifier": "2.16.840.1.113883.19.5.9999.1393"
        }],
        "name": [
          "Community Health and Hospitals"
        ]
      }]
    },
    "product": {
      "identifiers": [{
        "identifier": "2a620155-9d11-439e-92b3-5d9815ff4ee8"
      }],
      "unencoded_name": "Proventil HFA",
      "product": {
        "name": "Proventil HFA",
        "code": "219483",
        "translations": [{
          "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
          "code": "573621",
          "code_system_name": "RXNORM"
        }],
        "code_system_name": "RXNORM"
      },
      "manufacturer": "Medication Factory Inc."
    },
  }
};

samples.valid_1 = {
  "status": "Completed",
  "sig": "Proventil HFA",
  "product": {
    "identifiers": [{
      "identifier": "2a620155-9d11-439e-92b3-5d9815ff4ee8"
    }],
    "unencoded_name": "Proventil HFA",
    "product": {
      "name": "Proventil HFA",
      "code": "219483",
      "translations": [{
        "name": "Proventil 0.09 MG/ACTUAT inhalant solution",
        "code": "573621",
        "code_system_name": "RXNORM"
      }],
      "code_system_name": "RXNORM"
    },
    "manufacturer": "Medication Factory Inc."
  }
};

samples.invalid_0 = {
  "date_time": {},
  "identifiers": [{
    "identifier": "cdbd33f0-6cde-11db-9fe1-0800200c9a66"
  }],
  "status": "Completed",
  "sig": "Proventil HFA",
  "product": {
    "identifiers": [{
      "identifier": "2a620155-9d11-439e-92b3-5d9815ff4ee8"
    }],
    "unencoded_name": "Proventil HFA",
    "manufacturer": "Medication Factory Inc."
  },
  "supply": {
    "date_time": {
      "low": {
        "date": "2007-01-03T00:00:00Z",
        "precision": "day"
      }
    },
    "repeatNumber": "1",
    "quantity": "75",
    "author": {
      "identifiers": [{
        "identifier": "2a620155-9d11-439e-92b3-5d9815fe4de8"
      }],
      "name": {
        "prefix": "Dr.",
        "last": "Seven",
        "first": "Henry"
      }
    }
  },
  "administration": {
    "route": {
      "name": "RESPIRATORY (INHALATION)",
      "code": "C38216",
      "code_system_name": "Medication Route FDA"
    },
    "form": {
      "name": "INHALANT",
      "code": "C42944",
      "code_system_name": "Medication Route FDA"
    },
    "dose": {
      "value": 1,
      "unit": "mg/actuat"
    },
    "rate": {
      "value": 90,
      "unit": "ml/min"
    },
    "interval": {
      "period": {
        "value": 6,
        "unit": "h"
      },
      "frequency": "true"
    }
  },
  "performer": {
    "organization": [{
      "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.9999.1393"
      }],
      "name": [
        "Community Health and Hospitals"
      ]
    }]
  },
  "drug_vehicle": {
    "name": "Aerosol",
    "code": "324049",
    "code_system_name": "RXNORM"
  },
  "precondition": {
    "code": {
      "code": "ASSERTION",
      "code_system_name": "HL7ActCode"
    },
    "value": {
      "name": "Wheezing",
      "code": "56018004",
      "code_system_name": "SNOMED CT"
    }
  },
  "indication": {
    "identifiers": [{
      "identifier": "db734647-fc99-424c-a864-7e3cda82e703",
      "extension": "45665"
    }],
    "code": {
      "name": "Finding",
      "code": "404684003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2007-01-03T00:00:00Z",
        "precision": "day"
      }
    },
    "value": {
      "name": "Pneumonia",
      "code": "233604007",
      "code_system_name": "SNOMED CT"
    }
  },
  "dispense": {
    "identifiers": [{
      "identifier": "1.2.3.4.56789.1",
      "extension": "cb734647-fc99-424c-a864-7e3cda82e704"
    }],
    "performer": {
      "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.9999.456",
        "extension": "2981823"
      }],
      "address": [{
        "street_lines": [
          "1001 Village Avenue"
        ],
        "city": "Portland",
        "state": "OR",
        "zip": "99123",
        "country": "US"
      }],
      "organization": [{
        "identifiers": [{
          "identifier": "2.16.840.1.113883.19.5.9999.1393"
        }],
        "name": [
          "Community Health and Hospitals"
        ]
      }]
    }
  }
};
