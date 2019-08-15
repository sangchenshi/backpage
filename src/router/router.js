// 导入路由前导入Vue
import Vue from 'vue'
// 导入路由
import Router from 'vue-router'
import VueRouter from 'vue-router';
// 使用路由
Vue.use(Router)
// 引入组件
import login from '../components/login.vue'

// 建立路由规则
const routes = [
  {path:"/login",companent:login}
]
// 创建路由实例
const router = new VueRouter({
  routes
})
//导出路由
export default router