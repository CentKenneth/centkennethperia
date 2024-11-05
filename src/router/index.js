// src/router/index.js or src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue'; // Import the About component

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about', // Define the path for the About page
    name: 'about',
    component: About, // Use the About component
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
