export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      // apiUrl: process.env.API_URL,
      // apiKey: process.env.API_KEY,
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', ['defineStore', 'definePiniaStore']] },
    ],
  ],

  imports: {
    dirs: ['stores'],
  },

  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
})
