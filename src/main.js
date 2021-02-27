import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import './styles/bulma-overrides.scss'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
