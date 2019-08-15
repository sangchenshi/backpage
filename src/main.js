import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 导入ElementUI
import ElementUI from "element-ui"
// 导入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'
// 使用ElementUI
Vue.use(ElementUI)
// 导入路由
import router from './router/router'
new Vue({
  render: h => h(App),
  // 挂载路由
  router
}).$mount('#app')
