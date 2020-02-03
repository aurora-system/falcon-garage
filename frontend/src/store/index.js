import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '../services/ProductService'
import ProductCategoryService from '../services/ProductCategoryService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        categories: []
    },
    getters: {},
    mutations: {
        getCategories: (state, payload) => {
            state.categories = payload
        },
        getProducts: (state, payload) => {
            state.products = payload
        },
        addProduct: (state, payload) => {
            state.products = [...state.products,payload]
        }
    },
    actions: {
        getCategories: (context) => {
            ProductCategoryService.getProductCategories()
                .then(data => {
                    context.commit('getCategories', data)
                })
        },
        getProducts: (context) => {
            ProductService.getProducts()
                .then(data => {
                    context.commit('getProducts', data)
                })
        },
        addProduct: (context, payload) => {
            console.log(payload)
            ProductService.insertProduct(payload)
                .then(data => {
                    context.commit('addProduct', data)
                })
        }
    }
})