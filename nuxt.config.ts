export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxtjs/critters'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    openaiApiKey: '',
    identity: {
      databaseUrl: '',
      databaseToken: ''
    }
  },
  app: {
    head: {
      title: 'Admin · Vipo Eletrônica',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico'
        }
      ]
    }
  }
})
