import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.teal.darken1,
        accent: colors.indigo.darken1,
        info: colors.blue,
        error: colors.teal.darken2,
        success: colors.teal.lighten1,
        warning: colors.purple.darken1
      }
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  }
})
