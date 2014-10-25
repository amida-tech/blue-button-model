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
