"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
  "procedure": {
    "name": "Colonoscopy",
    "code": "73761001",
    "code_system_name": "SNOMED CT"
  },
  "identifiers": [{
    "identifier": "d68b7e32-7810-4f5b-9cc2-acd54b0fd85d"
  }],
  "status": "Completed",
  "date_time": {
    "point": {
      "date": "2012-05-12T00:00:00Z",
      "precision": "day"
    }
  },
  "body_sites": [{
    "name": "colon",
    "code": "appropriate_code",
    "code_system_name": "Body Site Value Set"
  }],
  "specimen": {
    "identifiers": [{
      "identifier": "c2ee9ee9-ae31-4628-a919-fec1cbb58683"
    }],
    "code": {
      "name": "colonic polyp sample",
      "code": "309226005",
      "code_system_name": "SNOMED CT"
    }
  },
  "performers": [{
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
    "phone": [{
      "number": "555-555-5000",
      "type": "work place"
    }],
    "organization": [{
      "identifiers": [{
        "identifier": "2.16.840.1.113883.19.5.9999.1393"
      }],
      "name": [
        "Community Health and Hospitals"
      ],
      "address": [{
        "street_lines": [
          "1001 Village Avenue"
        ],
        "city": "Portland",
        "state": "OR",
        "zip": "99123",
        "country": "US"
      }],
      "phone": [{
        "number": "555-555-5000",
        "type": "work place"
      }]
    }]
  }],
  "procedure_type": "procedure"
};

samples.valid_1 = {
  "procedure": {
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system_name": "SNOMED CT"
  },
  "status": "Aborted",
  "date_time": {
    "point": {
      "date": "2011-02-03T00:00:00Z",
      "precision": "day"
    }
  },
  "procedure_type": "observation"
};

samples.invalid_0 = {
  "status": "Aborted",
  "date_time": {
    "point": {
      "precision": "day"
    }
  },
  "specimen": {
    "identifiers": [{
      "identifier": "c2ee9ee9-ae31-4628-a919-fec1cbb58683"
    }],
    "code": {
      "name": "colonic polyp sample",
      "code": "309226005",
      "code_system_name": "SNOMED CT"
    }
  },
  "procedure_type": "observation"
};

samples.invalid_1 = {
  "procedure": {
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system_name": "SNOMED CT"
  },
  "status": "Aborted",
  "date_time": {
    "point": {
      "precision": "day"
    }
  },
  "specimen": {
    "identifiers": [{
      "identifier": "c2ee9ee9-ae31-4628-a919-fec1cbb58683"
    }],
    "code": {
      "name": "colonic polyp sample",
      "code": "309226005",
      "code_system_name": "SNOMED CT"
    }
  },
  "procedure_type": "observation",
  "other": "na"
};

samples.invalid_2 = {
  "procedure": {
    "name": "Colonic polypectomy",
    "code": "274025005",
    "code_system_name": "SNOMED CT"
  },
  "status": "Aborted",
  "date_time": {
    "point": {
      "precision": "day"
    }
  },
  "specimen": {
    "identifiers": [{
      "identifier": "c2ee9ee9-ae31-4628-a919-fec1cbb58683"
    }],
    "code": {
      "name": "colonic polyp sample",
      "code": "309226005",
      "code_system_name": "SNOMED CT"
    },
    "type": "liquid"
  },
  "procedure_type": "observation"
};
