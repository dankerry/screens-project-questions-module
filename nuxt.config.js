import { join } from "path";
import webpack from 'webpack';

export default {
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",

  generate: {
    routes: [
      "/details"
    ]
  },
  
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }, { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css' }, { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.8.55/css/materialdesignicons.min.css'}]
  },

  /*
   ** Global CSS
   */
  css: [
    // ⚠️ do not add other icon packs
    "@fortawesome/fontawesome-free/css/fontawesome.min.css",
    "@fortawesome/fontawesome-free/css/solid.min.css",
    "@fortawesome/fontawesome-free/css/brands.min.css",
    "@fortawesome/fontawesome-free/css/regular.min.css"
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/vee-validate"],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [join(__dirname, "components"), join(__dirname, "screens")],

  styleResources: {
    sass: [],
    stylus: []
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",

    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",

    // https://github.com/nuxt-community/style-resources-module#readme
    "@nuxtjs/style-resources"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",

    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },

  proxy: {},

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    transpile: ["vee-validate/dist/rules"],
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: "lodash"
      })
    ]
  },

  server: {
    host: "127.0.0.1",
    port: 10101
  },

  serverMiddleware: [{ path: "/api/person", handler: "~/api/person.js" }],

  telemetry: false
};
