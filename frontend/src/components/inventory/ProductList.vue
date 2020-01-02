<template>
  <div class="product">
    <v-card>
      <v-card-title>
        <h4>List of Items</h4>
      </v-card-title>
      <v-card-text>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="products"
          :single-select="false"
          item-key="name"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ProductService from '../../services/ProductService'

export default {
  props: [
    'products'
  ],
  data() {
    return {
      //products: [],
      headers: [
        {text: 'Item Code', value: 'productId'},
        {text: 'Name', value: 'name'},
        {text: 'Brand', value: 'brand'},
        {text: 'Details', value: 'otherDetails'},
        {text: 'Vehicle', value: 'forVehicle'},
        {text: 'Color', value: 'color'},
        {text: 'Aqui Price', value: 'aquiPrice'},
        {text: 'SRP', value: 'srp'},
        {text: 'Stock Level', value: 'stockLevel'},
        {text: 'Category Id', value: 'categoryId'},
        {text: 'Supplier Name', value: 'supplierName'}
      ],

    }
  },
  async created() {
    try {
      this.products = await ProductService.getProducts();
    } catch (err) {
      this.error = err.message;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

#orderList {
  font-family: 'Raleway', sans-serif;
}
</style>