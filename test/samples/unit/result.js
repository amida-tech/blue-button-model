"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "identifiers": [{
    "identifier": "7d5a02b0-67a4-11db-bd13-0800200c9a66"
  }],
  "result_set": {
    "name": "CBC WO DIFFERENTIAL",
    "code": "43789009",
    "code_system_name": "SNOMED CT"
  },
  "results": [{
    "identifiers": [{
      "identifier": "107c2dc0-67a5-11db-bd13-0800200c9a66"
    }],
    "result": {
      "name": "HGB",
      "code": "30313-1",
      "code_system_name": "LOINC"
    },
    "date_time": {
      "point": {
        "date": "2000-03-23T14:30:00Z",
        "precision": "minute"
      }
    },
    "status": "completed",
    "reference_range": {
      "range": "M 13-18 g/dl; F 12-16 g/dl"
    },
    "interpretations": [{
      "name": "Normal",
      "code": "N/A",
      "code_system_name": "N/A"
    }],
    "value": 13.2,
    "unit": "g/dl"
  }, {
    "identifiers": [{
      "identifier": "107c2dc0-67a5-11db-bd13-0800200c9a66"
    }],
    "result": {
      "name": "WBC",
      "code": "33765-9",
      "code_system_name": "LOINC"
    },
    "date_time": {
      "point": {
        "date": "2000-03-23T14:30:00Z",
        "precision": "minute"
      }
    },
    "status": "completed",
    "reference_range": {
      "low": "4.3",
      "high": "10.8",
      "unit": "10+3/ul"
    },
    "interpretations": [{
      "name": "Normal",
      "code": "N/A",
      "code_system_name": "N/A"
    }],
    "value": 6.7,
    "unit": "10+3/ul"
  }, {
    "identifiers": [{
      "identifier": "107c2dc0-67a5-11db-bd13-0800200c9a66"
    }],
    "result": {
      "name": "PLT",
      "code": "26515-7",
      "code_system_name": "LOINC"
    },
    "date_time": {
      "point": {
        "date": "2000-03-23T14:30:00Z",
        "precision": "minute"
      }
    },
    "status": "completed",
    "reference_range": {
      "low": "150",
      "high": "350",
      "unit": "10+3/ul"
    },
    "interpretations": [{
      "name": "Low",
      "code": "N/A",
      "code_system_name": "N/A"
    }],
    "value": 123,
    "unit": "10+3/ul"
  }]
};

samples.valid_1 = {
  "result_set": {
    "name": "Glucose Level"
  },
  "results": [{
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "FBS"
    },
    "status": "completed",
    "value": 135,
    "unit": "mg/dL"
  }, {
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "RBS"
    },
    "status": "completed",
    "value": 170,
    "unit": "mg/dL"
  }, {
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "RBS"
    },
    "status": "completed",
    "value": 150,
    "unit": "mg/dL"
  }, {
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "RBS"
    },
    "status": "completed",
    "value": 120,
    "unit": "mg/dL"
  }]
};

samples.invalid_0 = {
  "result_set": {
    "name": "Glucose Level"
  },
  "results": [{
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "FBS"
    },
    "status": "completed",
    "value": 135,
    "unit": "mg/dL",
    "provider": "Joe Doe"
  }]
};

samples.invalid_1 = {
  "result_set": {
    "name": "Glucose Level"
  },
  "results": [{
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "FBS"
    },
    "status": "completed",
    "value": 135,
    "unit": "mg/dL"
  }, {
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "FBS"
    },
    "value": 135,
    "unit": "mg/dL"
  }]
};

samples.invalid_2 = {
  "result_set": {
    "name": "Glucose Level"
  },
  "results": [{
    "date_time": {
      "point": {
        "date": "2008-03-21T00:00:00Z",
        "precision": "day"
      }
    },
    "result": {
      "name": "FBS"
    },
    "status": "completed",
    "value": "135",
    "unit": "mg/dL"
  }]
};
