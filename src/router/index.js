//router/index.js文件代码
import Vue from 'vue'
import Router from 'vue-router'

//导入注册5个组件
import Home from '../components/Home'
import Me from '../components/Me'
import Search from '../components/Search'
import Lookmv from '../components/Lookmv'
import Searchmv from '../components/Searchmv'


Vue.use(Router)

export default new Router({
  //在路由上注册五个组件
  routes: [
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name:'Home',
      component: Home
    },
    {
      path: '/Search',
      name:'Search',
      component: Search
    },
    {
      path: '/Me',
      name:'Me',
      component: Me
    },
    {
      path:'/Lookmv',
      name:'Lookmv',
      component:Lookmv
    },
    {
      path:'/Searchmv',
      name:'Searchmv',
      component:Searchmv
    }
  ],
  mode:'history'
})
