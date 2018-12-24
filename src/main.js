// 引入vue
import Vue from 'vue'

// 引入App.vue组件
import App from './App'

// 导入路由对象
import router from './router'
// 关闭生产提示的
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
