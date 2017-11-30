import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '@/components/MainScreen'
import SnakesScreen from '@/components/SnakesScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-screen',
      component: MainScreen
    },
    {
      path: '/faces-of-snake',
      name: 'snakes-screen',
      component: SnakesScreen
    }
  ]
})
