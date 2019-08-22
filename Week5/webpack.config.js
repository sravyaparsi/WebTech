//for regex use-/regex/ and \is escape char

const path=require('path')

module.exports={
   
    entry:{
        app:'./src/newsfeed.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'newsfeed.bundle.js'
    },
    module:{

        rules:[{
            test:/\.js?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            options:{
                presets:['env'],
                plugins: ["@babel/plugin-syntax-dynamic-import"]
            }
        },
        {
            test:/\.css?$/,
            use:[{
                loader:'style-loader'
            },
            {
                loader:'css-loader'
            }]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline:true,
        port: 8080,
        open: true,
      },
}
