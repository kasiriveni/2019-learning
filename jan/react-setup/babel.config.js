"use strict";

module.exports = function(api) {
    api.cache(true);
    return {
        presets: ["@babel/env", "@babel/react"]
    };
};
