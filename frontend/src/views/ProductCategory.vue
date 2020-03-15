<template>
  <v-data-table
    :headers="headers"
    :items="categories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Product Categories</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-btn class="mb-2" @click="backToProducts">Back to Products</v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{on}">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Category</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      id="productCategoryId"
                      v-model="editedItem.categoryId"
                      label="Id"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      id="name"
                      v-model="editedItem.name"
                      label="Name"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import ProductCategoryService from "../services/ProductCategoryService";

export default {
  data() {
    return {
      headers: [
        {text: 'Id', value: 'categoryId', align: 'left', sortable: false},
        {text: 'Name', value: 'name'},
        {text: 'Actions', value: 'action', sortable: false}
      ],
      categories: [],
      editedIndex: -1,
      editedItem: {
        categoryId: 0,
        name: ''
      },
      defaultItem: {
        categoryId: 0,
        name: ''
      },
      dialog: false,
      category: {
        categoryId: 0,
        name: ''
      },
      snackbar: false,
      error: ''
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Category' : 'Edit Category'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
  },
  methods: {
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.categories[this.editedIndex], this.editedItem)
      } else {
        this.categories.push(this.editedItem)
        try {
          ProductCategoryService.insertProductCategory(this.editedItem);
          
        } catch (err) {
          this.error = err.message
        }
      }
      this.close()
    },
    editItem (item) {
      this.editedIndex = this.categories.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    backToProducts() {
      this.$router.push('/products')
    },
    saveCategory() {
      try {
        ProductCategoryService.insertProductCategory(this.category);
        this.snackbar = true;
      } catch (err) {
        this.error = err.message
      }
    },
    closeAndGoToProducts() {
        this.snackbar = false
        this.$router.push('/products')
    }
  },
  async created() {
    try {
      this.categories = await ProductCategoryService.getProductCategories()
    } catch (err) {
      this.error = err.message
    }
  }
};
</script>

<style></style>
