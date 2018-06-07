var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
var config={
    mode : "development",
    entry:{
        main:'./main'
    },
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'[name].js',
        chunkFilename: "[name].chunk.js"
    },
        resolve: {
            // alias: {
            //     'vue$': 'vue/dist/vue.esm.js'
            // },
            extensions: ['*', '.js', '.vue', '.json','.es6']
        },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options: {
                    loader:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader:'url-loader?limit=1024'
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename:'[name].css',
            allChunks:true
        }),
        new VueLoaderPlugin()
    ]
};

module.exports=config;