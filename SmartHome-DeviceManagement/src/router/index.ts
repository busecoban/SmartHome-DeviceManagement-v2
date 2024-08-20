import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomeView.vue'
import AboutPage from '../pages/AboutPage.vue'
import GuideBookPage from '../pages/GuideBookPage.vue'

import HomesPage from '../pages/HomesPage.vue'
import RoomPage from '../pages/RoomPage.vue'
import ContactUsPage from '../pages/ContactUsPage.vue'
// import DevicePage from '../pages/DevicePage.vue'

// import BulbPage from '../pages/BulbPage.vue'
// import DoorWindowPage from '../pages/DoorWindowPage.vue'

import ProfilePage from '../pages/ProfilePage.vue'
import LoadigPage from '../pages/LoadingPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import MarketPage from '../pages/MarketPage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/loading',
      name: 'LoadingPage',
      component: LoadigPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutPage
    },
    {
      path: '/guidebook',
      name: 'guidebook',
      component: GuideBookPage
    },
    {
      path: '/homes',
      name: 'homes',
      component: HomesPage
    },
    {
      path: '/homes/:id',
      name: 'room',
      component: RoomPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/market',
      name: 'market',
      component: MarketPage
    }
  ]
})

export default router
