"use strict";

module.exports = function(api) {
    api.cache(true);
    return {
        presets: ["@babel/env", "@babel/react"],
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }]
        ]
    };
};
