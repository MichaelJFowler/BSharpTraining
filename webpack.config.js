// Import the Node.js file package
const path = require('path');

// PostCSS plugins variable
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    // looks in directory for App.js (may contain multiple files)
    entry: './app/assets/scripts/App.js',
    // outputs the js sripts into a single file called bundled.js
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    // stops error message about mode not being set
    mode: 'development',
    // to watch the file and automatically rebuild on file change
    watch: true,
    module: {
        rules: [{
            // test for files ending in .css
            test: /\.css$/i,
            // style-loader applies styles to the page and css-loader loads css into bundled.js
            // postcss adds postcss support - requires variable postCSSPlugins
            use: ['style-loader', 'css-loader?url=false',
                {
                    loader: 'postcss-loader',
                    options: {
                        postCSSPlugins
                    }
                }
            ]
        }]
    }
}