import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Icon } from '@iconify/vue2'
import VueMeta from 'vue-meta'
import 'animate.css'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(bootstrapVue)
AOS.init()
Vue.use(VueMeta)
Vue.component('icon', Icon)
Vue.component('slick', Slick)
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube" })

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')