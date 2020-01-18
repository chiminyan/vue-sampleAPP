const path = require('path')
module.exports = {
    pluginOptions: {
        preProcessor: 'scss',
        patterns: [
            path.resolve(__dirname, './src.styles/abstracts/:.styl'),
        ]
    }
}