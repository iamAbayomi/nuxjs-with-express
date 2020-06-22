/* eslint-disable */
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],

  serverMiddleware: [
    '~/api/index.js'
]
,

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt', // enables bootsrap vue module
    '@nuxtjs/axios', // enables Nuxt Axios module
    '@nuxtjs/auth', // enables Nuxt Auth module
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
  ,
  auth: {
      strategies: {
          local: {
            endpoints : {
                // these are the API endpoints we created in Express
                login: {

                    url: 'api/users/login',
                    method: 'post',
                    propertyName: 'token'
                
                },
                logout : true,
                users: {
                    url: 'api/users/user',
                    method: 'get',
                    propertyName: 'user'
                }
            },
            tokenRequired : true,
            tokenType : "Bearer"
          }
        },
        redirect: {
            login: '/user/login', // User will be redirected to this path if login is required
            login: '/', // User will be redirected to this path if after logout, current route is protected
            home: '/' // User will be redirected to this path after login if accessed login page directly
        },
        rewriteRedirects: true
  },
}
