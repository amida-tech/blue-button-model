"use strict";

exports.codeToPath = function (errors) {
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

exports.arrayLocations = function (errors) {
    return errors.reduce(function (result, error) {
        var path = error.path;
        var index = Number(path.charAt(3));
        if (result.indexOf(index) < 0) {
            result.push(index);
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
