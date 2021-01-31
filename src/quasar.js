import Vue from 'vue'

import 'quasar/dist/quasar.css'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {},
  iconSet: iconSet
})