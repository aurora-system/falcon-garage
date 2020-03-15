import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/general/Home.vue';
import About from './components/general/About.vue';
import Orders from './components/ordering/Order.vue';
import ProductCategory from './views/ProductCategory.vue';
import Products from './views/Product.vue';
import ProductInOut from './views/ProductInOut'
import Expenses from './components/expense/Expense.vue';
import Reports from './components/reporting/Report.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/categories',
      name: 'categories',
      component: ProductCategory
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/inouthistory',
      name: 'inouthistory',
      component: ProductInOut
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: Expenses
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    }
  ]
})
