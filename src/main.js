import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import router from './router/index.js'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#0277BD',
          secondary: '#2E7D32',
          accent: '#00BCD4',
          surface: '#FFFFFF',
          background: '#F8FAFB',
        },
      },
    },
  },
  defaults: {
    global: {
      fontFamily: "'Noto Sans JP', sans-serif",
    },
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
