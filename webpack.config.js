const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'resources/js'),
            '@': path.resolve(__dirname, 'resources/sass'),
        },
    },
    watchOptions: {ignored: /node_modules/},
};
