export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Boost Your 5G/4G/3G Network Signal With WirEng® Antenna Products',
        titleTemplate: '%s - WirEng® Australia New Zealand',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/style.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-agile'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://tailwindcss.com/
        '@nuxtjs/tailwindcss',
        //   https://google-fonts.nuxtjs.org/
        '@nuxtjs/google-fonts'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://github.com/nuxt-community/recaptcha-module
        '@nuxtjs/recaptcha',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vue-agile']
    },

    googleFonts: {
        families: {
            'Roboto Condensed': true
        },
        preload: true,
        download: true,
    },
    server: {
        host: '0.0.0.0',
    },
    recaptcha: {
        siteKey: '6Lc_ZU8bAAAAAAWy10acDLVMX8kTs9NYlgn8Ql34',
        size: 'normal',
        version: 2,
        hideBadge: false,
    }
    // router: {
    //     base: '/wordpress/'
    // }
}
