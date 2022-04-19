"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "date_time": {
    "point": {
      "date": "2007-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "observation": {
    "identifiers": [{
      "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
    }],
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system_name": "RXNORM"
    },
    "intolerance": {
      "name": "Propensity to adverse reactions to drug",
      "code": "419511003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2007-05-01T00:00:00Z",
        "precision": "day"
      }
    },
    "status": {
      "name": "Inactive",
      "code": "73425007",
      "code_system_name": "SNOMED CT"
    },
    "reactions": [{
      "identifiers": [{
        "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a64"
      }],
      "date_time": {
        "low": {
          "date": "2007-05-01T00:00:00Z",
          "precision": "day"
        },
        "high": {
          "date": "2009-02-27T13:00:00Z",
          "precision": "second"
        }
      },
      "reaction": {
        "name": "Nausea",
        "code": "422587007",
        "code_system_name": "SNOMED CT"
      },
      "severity": {
        "code": {
          "name": "Mild",
          "code": "255604002",
          "code_system_name": "SNOMED CT"
        },
        "interpretation": {
          "name": "Suceptible",
          "code": "S",
          "code_system_name": "Observation Interpretation"
        }
      }
    }],
    "severity": {
      "code": {
        "name": "Moderate to severe",
        "code": "371924009",
        "code_system_name": "SNOMED CT"
      },
      "interpretation": {
        "name": "Normal",
        "code": "N",
        "code_system_name": "Observation Interpretation"
      }
    }
  }
};

samples.valid_1 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "date_time": {
    "point": {
      "date": "2006-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "observation": {
    "identifiers": [{
      "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
    }],
    "allergen": {
      "name": "Codeine",
      "code": "2670",
      "code_system_name": "RXNORM"
    },
    "intolerance": {
      "name": "Propensity to adverse reactions to drug",
      "code": "419511003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2006-05-01T00:00:00Z",
        "precision": "day"
      }
    },
    "status": {
      "name": "Active",
      "code": "55561003",
      "code_system_name": "SNOMED CT"
    },
    "reactions": [{
      "identifiers": [{
        "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a64"
      }],
      "date_time": {
        "low": {
          "date": "2006-05-01T00:00:00Z",
          "precision": "day"
        },
        "high": {
          "date": "2009-02-27T13:00:00Z",
          "precision": "second"
        }
      },
      "reaction": {
        "name": "Wheezing",
        "code": "56018004",
        "code_system_name": "SNOMED CT"
      },
      "severity": {
        "code": {
          "name": "Mild",
          "code": "255604002",
          "code_system_name": "SNOMED CT"
        },
        "interpretation": {
          "name": "Suceptible",
          "code": "S",
          "code_system_name": "Observation Interpretation"
        }
      }
    }],
    "severity": {
      "code": {
        "name": "Moderate",
        "code": "6736007",
        "code_system_name": "SNOMED CT"
      },
      "interpretation": {
        "name": "Normal",
        "code": "N",
        "code_system_name": "Observation Interpretation"
      }
    }
  }
};

samples.invalid_0 = {
  "identifiers": [],
  "date_time": {
    "point": {
      "date": "2007-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "observation": {
    "identifiers": [{
      "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
    }],
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system_name": "RXNORM"
    },
    "intolerance": {
      "name": "Propensity to adverse reactions to drug",
      "code": "419511003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2007-05-01T00:00:00Z",
        "precision": "day"
      }
    },
    "status": {
      "name": "Inactive",
      "code": "73425007",
      "code_system_name": "SNOMED CT"
    },
    "reactions": [{
      "identifiers": [{
        "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a64"
      }],
      "date_time": {
        "low": {
          "date": "2007-05-01T00:00:00Z",
          "precision": "day"
        },
        "high": {
          "date": "2009-02-27T13:00:00Z",
          "precision": "second"
        }
      },
      "reaction": {
        "name": "Nausea",
        "code": "422587007",
        "code_system_name": "SNOMED CT"
      },
      "severity": {
        "code": {
          "name": "Mild",
          "code": "255604002",
          "code_system_name": "SNOMED CT"
        },
        "interpretation": {
          "name": "Suceptible",
          "code": "S",
          "code_system_name": "Observation Interpretation"
        }
      }
    }],
    "severity": {
      "code": {
        "name": "Moderate to severe",
        "code": "371924009",
        "code_system_name": "SNOMED CT"
      },
      "interpretation": {
        "name": "Normal",
        "code": "N",
        "code_system_name": "Observation Interpretation"
      }
    }
  }
};

samples.invalid_1 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "date_time": {
    "point": {
      "date": "2006-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "observation": {
    "identifiers": [{
      "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
    }],
    "allergen": {},
    "intolerance": {
      "name": "Propensity to adverse reactions to drug",
      "code": "419511003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2006-05-01T00:00:00Z",
        "precision": "day"
      }
    },
    "status": {
      "name": "Active",
      "code": "55561003",
      "code_system_name": "SNOMED CT"
    },
    "reactions": [{
      "identifiers": [{
        "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a64"
      }],
      "date_time": {
        "low": {
          "date": "2006-05-01T00:00:00Z",
          "precision": "day"
        },
        "high": {
          "date": "2009-02-27T13:00:00Z",
          "precision": "second"
        }
      },
      "reaction": {
        "name": "Wheezing",
        "code": "56018004",
        "code_system_name": "SNOMED CT"
      },
      "severity": {
        "code": {
          "name": "Mild",
          "code": "255604002",
          "code_system_name": "SNOMED CT"
        },
        "interpretation": {
          "name": "Suceptible",
          "code": "S",
          "code_system_name": "Observation Interpretation"
        }
      }
    }],
    "severity": {
      "code": {
        "name": "Moderate",
        "code": "6736007",
        "code_system_name": "SNOMED CT"
      },
      "interpretation": {
        "name": "Normal",
        "code": "N",
        "code_system_name": "Observation Interpretation"
      }
    }
  }
};

samples.invalid_2 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "date_time": {
    "point": {
      "date": "2007-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "observation": {
    "identifiers": [{
      "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
    }],
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system_name": "RXNORM"
    },
    "intolerance": {
      "name": "Propensity to adverse reactions to drug",
      "code": "419511003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2007-05-01T00:00:00Z",
        "precision": "day"
      }
    },
    "status": {
      "name": "Inactive",
      "code": "73425007",
      "code_system_name": "SNOMED CT"
    },
    "reactions": {
      "identifiers": [{
        "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a64"
      }],
      "date_time": {
        "low": {
          "date": "2007-05-01T00:00:00Z",
          "precision": "day"
        },
        "high": {
          "date": "2009-02-27T13:00:00Z",
          "precision": "second"
        }
      },
      "reaction": {
        "name": "Nausea",
        "code": "422587007",
        "code_system_name": "SNOMED CT"
      },
      "severity": {
        "code": {
          "name": "Mild",
          "code": "255604002",
          "code_system_name": "SNOMED CT"
        },
        "interpretation": {
          "name": "Suceptible",
          "code": "S",
          "code_system_name": "Observation Interpretation"
        }
      }
    },
    "severity": {
      "code": {
        "name": "Moderate to severe",
        "code": "371924009",
        "code_system_name": "SNOMED CT"
      },
      "interpretation": {
        "name": "Normal",
        "code": "N",
        "code_system_name": "Observation Interpretation"
      }
    }
  }
};

samples.invalid_3 = {
  "identifiers": [{
    "identifier": "36e3e930-7b14-11db-9fe1-0800200c9a66"
  }],
  "date_time": {
    "point": {
      "date": "2006-05-01T00:00:00Z",
      "precision": "day"
    }
  },
  "observation": {
    "identifiers": [{
      "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a66"
    }],
    "allergen": {
      "name": "ALLERGENIC EXTRACT, PENICILLIN",
      "code": "314422",
      "code_system_name": "RXNORM"
    },
    "intolerance": {
      "name": "Propensity to adverse reactions to drug",
      "code": "419511003",
      "code_system_name": "SNOMED CT"
    },
    "date_time": {
      "low": {
        "date": "2006-05-01T00:00:00Z",
        "precision": "day"
      }
    },
    "status": {
      "name": "Active",
      "code": "55561003",
      "code_system_name": "SNOMED CT"
    },
    "reactions": [{
      "identifiers": [{
        "identifier": "4adc1020-7b14-11db-9fe1-0800200c9a64"
      }],
      "date_time": {
        "low": {
          "date": "2006-05-01T00:00:00Z",
          "precision": "day"
        },
        "high": {
          "date": "2009-02-27T13:00:00Z",
          "precision": "second"
        }
      },
      "reaction": {
        "name": "Wheezing",
        "code": "56018004",
        "code_system_name": "SNOMED CT"
      },
      "severity": {
        "code": {
          "name": "Mild",
          "code": "255604002",
          "code_system_name": "SNOMED CT"
        },
        "interpretation": {
          "name": "Suceptible",
          "code": "S",
          "code_system_name": "Observation Interpretation"
        }
      }
    }],
    "severity": {
      "code": {
        "name": "Moderate",
        "code": "6736007",
        "code_system_name": "SNOMED CT"
      },
      "interpretation": {
        "name": "Normal",
        "code": "N",
        "code_system_name": "Observation Interpretation"
      }
    },
    "additional": "value"
  }
};
