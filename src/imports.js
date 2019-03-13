import 'bulma'
import './layouts'
import Vue from 'vue'
import $service from './plugins/services'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use($service)
