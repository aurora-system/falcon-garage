<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      item-key="_id"
      class="elevation-1"
      >
        <template v-slot:top>

          <v-toolbar flat color="white">
            <v-toolbar-title>Products In/Out</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog">
              <template v-slot:activator="{on}">
                <v-btn color="primary" dark class="mb-2" v-on="on">New In/Out</v-btn>
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
                          <v-text-field ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
                <v-card-action>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-action>
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
  </v-container>
</template>

<script>
import HistoryService from '../../services/HistoryService'

export default {
  data() {
      return {
        headers: [
            {text:'Date', value:'transDate'},
            {text:'Type', value:'transType'},
            {text:'Product', value:'product.name'},
            {text:'Count', value:'productCount'},
            {text:'Total', value:'updatedCount'},
            {text: 'Actions', value: 'action', sortable: false}
        ],
        items:[],
        editedIndex: -1,
        editedItem: {
          transDate: '',
          transType: '',
          productName: '',
          productCount: 0,
          updatedCount: 0
        },
        defaultItem: {

        },
        dialog: false,
        snackbar: false,
        search:'',
        error:''
      }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New In/Out' : 'Edit In/Out'
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
          HistoryService.insertProductCategory(this.editedItem);
          
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
  },
  async created() {
    try {
      this.items = await HistoryService.findAll(1);
    } catch (err) {
      this.error = err.message
    }
  }
}
</script>

<style>

</style>