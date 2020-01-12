<template>
  <div class="order">
    <v-app id="orderList">
       <v-card>
         <v-card-title>
          <h4>List of Orders</h4>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="orders"
          item-key="name"
          class="elevation-1"
          no-data-text="There are no orders."
          sort-by="createdDate"
          sort-desc
          :search="search"
          @click:row="openOrderDetails()"
          v-model="selected"
        >
        </v-data-table>
       </v-card>

        <v-dialog id="orderDetails" v-model="dialog" persistent max-width=400>
            <template v-slot:activator="{ on }">
            </template>
          <v-card>
            <v-card-title>Order Details</v-card-title>
            <v-card-text>Customer Name: </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-app>
  </div>
</template>

<script>
  import OrderService from '../../services/OrderService';

  export default {
    data () {
    return {
      dialog: false,
      selected: [],
      singleSelect: false,
      headers: [
        { text: 'Ref. No.', value: 'referenceNum'},
        { text: 'Type', value: 'type' },
        { text: 'Customer Name', value: 'customerName' },
        { text: 'Total Amount', value: 'totalAmount'},
        { text: 'Created Date', value: 'createdDate' },
        { text: 'Remarks', value: 'remarks'}
      ],
      orders: [],
      search: ''
    }
  },
  methods: {
    openOrderDetails () {
      this.dialog = true;

      // Set order details values
      console.log("This is the passed data: " + this.selected[0]);
    }
  },
  async created() {
    try {
      this.orders = await OrderService.getOrders();
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