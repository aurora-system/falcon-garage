<template>
    <v-container>
      <product-form></product-form>
      <product-list></product-list>
    </v-container>
</template>

<script>
import ProductForm from '../components/inventory/ProductForm'
import ProductList from '../components/inventory/ProductList'

import { mapActions } from 'vuex'

export default {
  components: {
    ProductForm, ProductList
  },
  methods: {
    ...mapActions(['getCategories','getProducts'])
  },
  created() {
    this.getCategories()
    this.getProducts()
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.product {
  font-family: 'Raleway', sans-serif;
}

</style>