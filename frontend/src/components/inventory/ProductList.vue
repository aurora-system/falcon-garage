<template>
  <div class="product">
    <v-card>
      <v-card-title>
        <h4>List of Items</h4>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="products"
          :single-select="false"
          :search="search"
          item-key="productId"
          loading="products.length == 0"
          loading-text="Loading Data"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
      <v-card-actions class="d-flex ml-4">
        <router-link to="/categories">
          <v-btn class="success mb-4">Add Category</v-btn>
        </router-link>
        <router-link to="/addProduct">
          <v-btn class="info mb-4">Add Product</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ProductService from '../../services/ProductService'

export default {
  data() {
    return {
      search: '',
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

.info .mb-4 {
  padding: px;
}
</style>