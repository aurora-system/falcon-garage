<template>
  <div class="product">
      <v-card>
        <v-card-title>
            <v-col class="d-flex">
                <h4>Add Product</h4>
            </v-col>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <v-row dense>
                <v-col class="product-name md-6">
                    <v-text-field id="productId" v-model="product.productId" label="Product Code" outlined>
                    </v-text-field>
                </v-col>
                <v-col class="md-6">
                  <v-text-field id="categoryId" v-model="product.categoryId" label="Product Category" outlined>
                  </v-text-field>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col class="product-name md-6">
                    <v-text-field id="name" v-model="product.name" label="Product Name" required outlined>
                    </v-text-field>
                </v-col>
                <v-col class="md-6">
                  <v-text-field id="brand" v-model="product.brand" label="Brand" outlined>
                  </v-text-field>
                </v-col>
            </v-row>
            <v-row dense>
              <v-col class="md-12">
                <v-text-field id="otherDetails" v-model="product.otherDetails" label="Other Details" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="md-6">
                <v-text-field id="forVehicle" v-model="product.forVehicle" label="Vehicle" outlined></v-text-field>
              </v-col>
              <v-col class="md-6">
                <v-text-field id="color" v-model="product.color" label="Color" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="md-6">
                <v-text-field id="aquiPrice" v-model="product.aquiPrice" label="Aqui Price" outlined></v-text-field>
              </v-col>
              <v-col class="md-6">
                <v-text-field id="srp" v-model="product.srp" label="SRP" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col class="md-3">
                <v-text-field id="stockLevel" v-model="product.stockLevel" label="Stock Level" outlined></v-text-field>
              </v-col>
              <v-col class="md-9">
                <v-text-field id="supplierName" v-model="product.supplierName" label="Supplier" outlined></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <p></p>
        <v-card-actions class="ml-4">
          <v-btn class="success mb-4" @click="saveProduct">Save</v-btn>
          <v-btn class="info mb-4" @click="backToProducts">Cancel</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
import ProductService from '../../services/ProductService'
export default {
  data() {
    return {
      product: {
        productId: '',
        name: '',
        brand: '',
        otherDetails: '',
        forVehicle: '',
        color: '',
        aquiPrice: 0.00,
        srp: 0.00,
        stockLevel: 0,
        categoryId: 0,
        supplierName: ''
      },
      products: [],
      error: ''
    }
  },
  methods: {
    saveProduct() {
      try {
        this.products = ProductService.insertProduct(this.product)
        this.$router.push('/products')
      } catch (err) {
        this.error = err.message
      }
    },
    backToProducts() {
      this.$router.push('/products')
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