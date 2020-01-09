<template>
  <div class="product">
    <v-card>
      <v-card-title>
        <h4>List of Items</h4>
      </v-card-title>
      <v-card-text>
        <v-data-table
          
          :headers="headers"
          :items="products"
          :single-select="false"
          item-key="productId"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
      <v-card-action class="d-flex ml-4">
        <v-btn class="success mb-4">Add Category</v-btn>
        <router-link to="/addProduct">
          <v-btn class="info mb-4">Add Product</v-btn>
        </router-link>
      </v-card-action>
    </v-card>
  </div>
</template>

<script>
import ProductService from '../../services/ProductService'

export default {
  /* props: [
    'products'
  ],
   */data() {
    return {
      products: [],
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