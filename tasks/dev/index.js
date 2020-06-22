const webpack = require('webpack')
const nodemon = require('nodemon')
const path = require('path')
const fsJetpack = require('fs-jetpack')
const nodeExternals = require('webpack-node-externals')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')


const taskDir = __dirname
const cliRootDir = process.cwd()
const workDir = process.env.WORKDIR
const args = process.argv.slice(2)

let entryFile = process.env.ENTRYFILE

console.log(taskDir, cliRootDir, workDir)
console.log('start manablox dev', entryFile)

if(!entryFile.endsWith('.js')) entryFile = path.join(entryFile, 'index.js')

let sourceFilePath = path.join(workDir, entryFile)
let sourceFileName = path.basename(sourceFilePath)

let hasConfigFile = fsJetpack.exists(`${ workDir }/manablox.config.js`) !== false
let hasBabelRcFile = fsJetpack.exists(`${ workDir }/.babelrc`) !== false

let webpackConfig = (options) => {
    const mainBabelOptions = {
        babelrc: true,
        cacheDirectory: true,
        presets: [],
    }

    if(hasBabelRcFile){
        console.log('> Using .babelrc defined in your app root')
    }else{
        mainBabelOptions.presets.push(`${ cliRootDir }/babel.js`)
    }

    console.log(mainBabelOptions)

    return {
        mode: options.env === 'development' ? 'development' : 'production',
        target: 'node',
        // devtool: 'source-map',
        externals: [
            nodeExternals({
                modulesFromFile: true,
                whitelist: [
                    // /manablox/,
                    /\.(eot|woff|woff2|ttf|otf)$/,
                    /\.(svg|png|jpg|jpeg|gif|ico|webm)$/,
                    /\.(mp4|mp3|ogg|swf|webp)$/,
                    /\.(css|scss|sass|less|styl)$/,
                ],
            })
        ],
        performance: { hints: false },
        
        resolve: {
            extensions: ['.js', '.json'],
        },
        
        resolveLoader: {},

        node: {
            __filename: true,
            __dirname: true,
        },
        entry: {
            main: [`${ options.paths.sourceFilePath }`],
        },

        output: {
            path: options.paths.serverBuildPath,
            filename: options.paths.sourceFileName,
            sourceMapFilename: `${ options.paths.sourceFileName }.map`,
            publicPath: options.paths.publicPath,
            libraryTarget: 'commonjs2',
        },

        module: {
            rules: [
                // Process JS with Babel (transpiles ES6 code into ES5 code).
                {
                    test: /\.(js|jsx)$/,
                    loader: require.resolve('babel-loader'),
                    exclude: [/node_modules/, options.paths.buildPath],
                    options: mainBabelOptions,
                }
            ],
        },

        optimization: {
            noEmitOnErrors: true,
        },


        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(options.env),
                __DEV__: options.env === 'development',
            }),
            
            // new webpack.BannerPlugin({
            //     raw: true,
            //     entryOnly: false,
            //     banner: `require('${
            //         // Is source-map-support installed as project dependency, or linked?
            //         require.resolve('source-map-support').indexOf(process.cwd()) === 0
            //             ? // If it's resolvable from the project root, it's a project dependency.
            //             'source-map-support/register'
            //             : // It's not under the project, it's linked via lerna.
            //             require.resolve('source-map-support/register')
            //         }');`,
            // }),
            
            new FriendlyErrorsWebpackPlugin({
                clearConsole: options.env === 'development',
            }),
        ],
    }
}

let userConfig = {}
if(hasConfigFile){
    let userConfigFile = require(`${ workDir }/manablox.config.js`)
    console.log(userConfigFile)
}


console.log(webpackConfig({
    paths: {}
}))


