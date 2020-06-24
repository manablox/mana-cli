import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'

export default {
    server: {
        host: '0.0.0.0'
    },
    plugins: [
        { ssr: false, src: '~plugins/nuxtClientInit' },
        { ssr: true, src: '~plugins/components' },
        { ssr: false, src: '~plugins/draggable' },
        { ssr: true, src: '~plugins/icons' },
        { ssr: true, src: '~plugins/datatypes' },
        { ssr: false, src: '~plugins/monaco' }
    ],

    buildModules: [
        '@nuxtjs/tailwindcss'
    ],

    build: {
        /*
        ** You can extend webpack config here
        */
        plugins: [
            new MonacoWebpackPlugin({
                languages: ['javascript', 'python', 'java']
            })
        ],

        extend(config, ctx){}
    }
}