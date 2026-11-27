export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxtjs/critters'
  ],
  vite: {
    ssr: {
      noExternal: ['unctx'],
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    session: {
      password: '',
      maxAge: 60 * 60 * 24 * 30
    },
    openaiApiKey: '',
    identity: {
      webhookUrl: '',
      webhookSecret: '',
      appUrl: 'https://vipo-controles.vercel.app',
      databaseUrl: '',
      databaseToken: ''
    }
  },
  routeRules: {
    '/confirmar-email': {
      headers: {
        'cache-control': 'no-store',
        'referrer-policy': 'no-referrer'
      }
    },
    '/api/identity/password-token': {
      headers: {
        'cache-control': 'no-store'
      }
    },
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
