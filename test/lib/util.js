"use strict";

var fs = require("fs");
var path = require("path");

exports.sampleToJSON = function (filename) {
    var directory = path.join(__dirname, '../samples/actual');
    var p = path.join(directory, filename);
    var content = fs.readFileSync(p);
    var result = JSON.parse(content);
    return result;
};

exports.errorsToCodePathMap = function (errors) {
    return errors.reduce(function (result, error) {
        var paths = result[error.code];
        if (!paths) {
            result[error.code] = paths = [];
        }
        paths.push(error.path);
        paths.sort();
        return result;
    }, {});
};

exports.errorsToArrayIndices = function (errors) {
    return errors.reduce(function (result, error) {
        var path = error.path;
        var arrayIndex = Number(path.charAt(3));
        if (result.indexOf(arrayIndex) < 0) {
            result.push(arrayIndex);
            result.sort();
        }
        return result;
    }, []);
};

exports.errorsToPathComponents = function (errors, componentIndex) {
    return errors.reduce(function (result, error) {
        var path = error.path;
        var components = path.split('/');
        var component = (components.length <= componentIndex) ? '*' : components[componentIndex];
        if (result.indexOf(component) < 0) {
            result.push(component);
            result.sort();
        }
        return result;
    }, []);
};
