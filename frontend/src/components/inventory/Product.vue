<template>
    <v-container>
      <product-list></product-list>
    </v-container>
</template>

<script>
import ProductService from '../../services/ProductService'
import ProductList from './ProductList'

export default {
  components: {
    ProductList
  }
}
</script>

<style >
    
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.product {
font-family: 'Raleway', sans-serif;
}

</style>