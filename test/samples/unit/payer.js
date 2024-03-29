"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "identifiers": [{
    "identifier": "1fe2cdd0-7aad-11db-9fe1-0800200c9a66"
  }],
  "policy": {
    "identifiers": [{
      "identifier": "3e676a50-7aac-11db-9fe1-0800200c9a66"
    }],
    "code": {
      "code": "SELF",
      "code_system_name": "HL7 RoleCode"
    },
    "insurance": {
      "code": {
        "code": "PAYOR",
        "code_system_name": "HL7 RoleCode"
      },
      "performer": {
        "identifiers": [{
          "identifier": "2.16.840.1.113883.19"
        }],
        "address": [{
          "street_lines": [
            "123 Insurance Road"
          ],
          "city": "Blue Bell",
          "state": "MA",
          "zip": "02368",
          "country": "US",
          "use": "work place"
        }],
        "phone": [{
          "number": "(781)555-1515",
          "type": "work place"
        }],
        "organization": [{
          "name": [
            "Good Health Insurance"
          ],
          "address": [{
            "street_lines": [
              "123 Insurance Road"
            ],
            "city": "Blue Bell",
            "state": "MA",
            "zip": "02368",
            "country": "US",
            "use": "work place"
          }],
          "phone": [{
            "number": "(781)555-1515",
            "type": "work place"
          }]
        }],
        "code": [{
          "code": "PAYOR",
          "code_system_name": "HL7 RoleCode"
        }]
      }
    }
  },
  "guarantor": {
    "code": {
      "code": "GUAR",
      "code_system_name": "HL7 Role"
    },
    "identifiers": [{
      "identifier": "329fcdf0-7ab3-11db-9fe1-0800200c9a66"
    }],
    "name": [{
      "prefix": "Mr.",
      "middle": [
        "Frankie"
      ],
      "last": "Everyman",
      "first": "Adam"
    }],
    "address": [{
      "street_lines": [
        "17 Daws Rd."
      ],
      "city": "Blue Bell",
      "state": "MA",
      "zip": "02368",
      "country": "US",
      "use": "primary home"
    }],
    "phone": [{
      "number": "(781)555-1212",
      "type": "primary home"
    }]
  },
  "participant": {
    "code": {
      "name": "Self",
      "code": "SELF",
      "code_system_name": "HL7 Role"
    },
    "performer": {
      "identifiers": [{
        "identifier": "14d4a520-7aae-11db-9fe1-0800200c9a66",
        "extension": "1138345"
      }],
      "address": [{
        "street_lines": [
          "17 Daws Rd."
        ],
        "city": "Blue Bell",
        "state": "MA",
        "zip": "02368",
        "country": "US",
        "use": "primary home"
      }],
      "code": [{
        "name": "Self",
        "code": "SELF",
        "code_system_name": "HL7 Role"
      }]
    },
    "name": [{
      "prefix": "Mr.",
      "middle": [
        "A."
      ],
      "last": "Everyman",
      "first": "Frank"
    }]
  },
  "policy_holder": {
    "performer": {
      "identifiers": [{
        "identifier": "2.16.840.1.113883.19",
        "extension": "1138345"
      }],
      "address": [{
        "street_lines": [
          "17 Daws Rd."
        ],
        "city": "Blue Bell",
        "state": "MA",
        "zip": "02368",
        "country": "US",
        "use": "primary home"
      }]
    }
  },
  "authorization": {
    "identifiers": [{
      "identifier": "f4dce790-8328-11db-9fe1-0800200c9a66"
    }],
    "procedure": {
      "code": {
        "name": "Colonoscopy",
        "code": "73761001",
        "code_system_name": "SNOMED CT"
      }
    }
  }
};

samples.valid_1 = {
  "policy": {
    "identifiers": [{
      "identifier": "3e676a50-7aac-11db-9fe1-0800200c9a66"
    }],
    "code": {
      "code": "SELF",
      "code_system_name": "HL7 RoleCode"
    },
    "insurance": {
      "code": {
        "code": "PAYOR",
        "code_system_name": "HL7 RoleCode"
      },
      "performer": {
        "identifiers": [{
          "identifier": "2.16.840.1.113883.19"
        }],
        "address": [{
          "street_lines": [
            "123 Insurance Road"
          ],
          "city": "Blue Bell",
          "state": "MA",
          "zip": "02368",
          "country": "US",
          "use": "work place"
        }],
        "phone": [{
          "number": "(781)555-1515",
          "type": "work place"
        }],
        "organization": [{
          "name": [
            "Good Health Insurance"
          ],
          "address": [{
            "street_lines": [
              "123 Insurance Road"
            ],
            "city": "Blue Bell",
            "state": "MA",
            "zip": "02368",
            "country": "US",
            "use": "work place"
          }],
          "phone": [{
            "number": "(781)555-1515",
            "type": "work place"
          }]
        }],
        "code": [{
          "code": "PAYOR",
          "code_system_name": "HL7 RoleCode"
        }]
      }
    }
  },
  "participant": {
    "code": {
      "name": "Self",
      "code": "SELF",
      "code_system_name": "HL7 Role"
    },
    "performer": {
      "identifiers": [{
        "identifier": "14d4a520-7aae-11db-9fe1-0800200c9a66",
        "extension": "1138345"
      }],
      "address": [{
        "street_lines": [
          "17 Daws Rd."
        ],
        "city": "Blue Bell",
        "state": "MA",
        "zip": "02368",
        "country": "US",
        "use": "primary home"
      }],
      "code": [{
        "name": "Self",
        "code": "SELF",
        "code_system_name": "HL7 Role"
      }]
    },
    "name": [{
      "prefix": "Mr.",
      "middle": [
        "A."
      ],
      "last": "Everyman",
      "first": "Frank"
    }]
  },
  "authorization": {
    "identifiers": [{
      "identifier": "f4dce790-8328-11db-9fe1-0800200c9a66"
    }],
    "procedure": {
      "code": {
        "name": "Colonoscopy",
        "code": "73761001",
        "code_system_name": "SNOMED CT"
      }
    }
  }
};

samples.invalid_0 = {
  "policy": {
    "identifiers": [{
      "identifier": "3e676a50-7aac-11db-9fe1-0800200c9a66"
    }],
    "code": {
      "code": "SELF",
      "code_system_name": "HL7 RoleCode"
    },
    "insurance": {
      "code": {
        "code": "PAYOR",
        "code_system_name": "HL7 RoleCode"
      },
      "performer": {
        "identifiers": [{
          "identifier": "2.16.840.1.113883.19"
        }],
        "address": [{
          "street_lines": [
            "123 Insurance Road"
          ],
          "city": "Blue Bell",
          "state": "MA",
          "zip": "02368",
          "country": "US",
          "use": "work place"
        }],
        "phone": [{
          "number": "(781)555-1515",
          "type": "work place"
        }],
        "organization": [{
          "name": [
            "Good Health Insurance"
          ],
          "address": [{
            "street_lines": [
              "123 Insurance Road"
            ],
            "city": "Blue Bell",
            "state": "MA",
            "zip": "02368",
            "country": "US",
            "use": "work place"
          }],
          "phone": [{
            "number": "(781)555-1515",
            "type": "work place"
          }]
        }],
        "code": [{
          "code": "PAYOR",
          "code_system_name": "HL7 RoleCode"
        }]
      }
    }
  },
  "authorization": [{
    "identifiers": [{
      "identifier": "f4dce790-8328-11db-9fe1-0800200c9a66"
    }],
    "procedure": {
      "code": {
        "name": "Colonoscopy",
        "code": "73761001",
        "code_system_name": "SNOMED CT"
      }
    }
  }]
};
