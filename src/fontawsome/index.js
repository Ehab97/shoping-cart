import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faPlus,faPencilAlt,faTrashAlt,faEye,faMinus,faShoppingCart,faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart,faMinus,faPlus,faPencilAlt,faTrashAlt,faEye ,faBars,faKeyboard)
export default  Vue.component('font-awesome-icon', FontAwesomeIcon)