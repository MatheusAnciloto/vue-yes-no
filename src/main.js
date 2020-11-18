import Vue from 'vue'
import App from './Answer.vue'
import vuetify from './plugins/vuetify';
// import Cats from './apis/showcat'
// import Dogs from './apis/showdogs'
// import Fox from './apis/showfox'


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
