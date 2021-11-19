import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Dashboard from '@/views/Dashboard.vue';
import Stake from '@/views/Stake.vue';
import Bond from '@/views/Bond.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'home', component: Home },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/stake', name: 'stake', component: Stake },
  { path: '/bond', name: 'bond', component: Bond },
  
];

const router = new VueRouter({
  routes
});

export default router;
