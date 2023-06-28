import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../Login'
import BillInformation from '../components/BillInformation'
import PileInformation from '../components/PileInformation'
import UserInformation from '../components/UserInformation'
import StatisticsInformation from '../components/StatisticsInformation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/BillInformation',
    name: 'BillInformation',
    component: BillInformation
  },
  {
    path: '/PileInformation',
    name: 'PileInformation',
    component: PileInformation
  },
  {
    path: '/UserInformation',
    name: 'UserInformation',
    component: UserInformation
  },
  {
    path: '/StatisticsInformation',
    name: 'StatisticsInformation',
    component: StatisticsInformation
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes


})

export default router
