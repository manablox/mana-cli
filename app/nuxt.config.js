export default {
    server: {
        host: '0.0.0.0'
    },
    plugins: [
        { ssr: false, src: '~plugins/nuxtClientInit' },
        { ssr: true, src: '~plugins/components' },
        { ssr: false, src: '~plugins/draggable' },
        { ssr: true, src: '~plugins/icons' },
        { ssr: true, src: '~plugins/datatypes' }
    ],

    buildModules: [
        '@nuxtjs/tailwindcss'
    ],
}