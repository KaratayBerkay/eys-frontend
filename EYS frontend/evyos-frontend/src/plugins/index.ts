import { loadFonts } from './webfontloader'
import type { App } from 'vue'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

export function registerPlugins(app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
