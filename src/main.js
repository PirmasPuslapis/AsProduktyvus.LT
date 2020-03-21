import Vue from 'vue';
import Landing from './views/Landing.vue';
import Practices from './views/Practices.vue';
import Team from './views/Team.vue';
import Fix from './views/Fix.vue';
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/practices',
    name: 'practices',
    component: Practices,
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
  {
    path: '/fix',
    name: 'fix',
    component: Fix,
  }
]

const router = new VueRouter({
  routes
})

Vue.use(VueAnalytics, {
  router,
  id: 'UA-161526517-2'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
