"use strict";

var samples = {};

module.exports = samples;

samples.valid_0 = {
    "center": {
        "date": "2012-05-12T00:00:00Z",
        "precision": "day"
    }
};

samples.valid_1 = {
    "point": {
        "date": "2000-03-23T14:30:00Z",
        "precision": "minute"
    }
};

samples.valid_2 = {
    "low": {
        "date": "2007-01-03T00:00:00Z",
        "precision": "day"
    },
    "high": {
        "date": "2012-05-15T00:00:00Z",
        "precision": "day"
    }
};

samples.invalid_0 = {};

samples.invalid_1 = {
    "point": {
        "date": "2000-03-23T14:30:00Z",
        "precision": "minute"
    },
    "other": {
        "date": "2007-01-03T00:00:00Z",
        "precision": "day"
    }
};

samples.invalid_2 = {
    "low": {
        "precision": "day"
    },
    "high": {
        "date": "2012-05-15T00:00:00Z",
        "precision": "day",
        "at_night": false
    }
};
