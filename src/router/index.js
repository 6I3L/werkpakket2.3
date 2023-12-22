import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CheckoutView from '../views/CheckoutView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/winkelmandje',  // Voeg een route toe voor WinkelmandjeView
      name: 'winkelmandje',
      component: () => import('../views/WinkelmandjeView.vue'), // Pas dit pad aan aan je eigen structuur
    },
    {
      path: '/checkout',  // Voeg een route toe voor CheckoutView
      name: 'checkout',
      component: CheckoutView, // Importeer en gebruik de CheckoutView-component
    },
    {
      path: '/bevestiging',  // Voeg een route toe voor WinkelmandjeView
      name: 'bevestiging',
      component: () => import('../views/BevestigingView.vue'), // Pas dit pad aan aan je eigen structuur
    },
  ],
});

export default router;
