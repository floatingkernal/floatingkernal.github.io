import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// import StoryblokVue from 'storyblok-vue'
// import VueAnalytics from 'vue-analytics'

import { store } from './store'

// Vue.config.productionTip = false
// const isProd = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue.use(StoryblokVue)
// Vue.use(VueAnalytics, {
//   id: 'UA-139190314-1',
//   router,
//   store,
//   debug: {
//     enabled: !isProd,
//     sendHitTask: isProd
//   }
// })
