import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 样式初始化
import 'normalize.css/normalize.css'
// 完全引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
