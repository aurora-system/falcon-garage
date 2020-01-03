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
        >
        </v-data-table>
       </v-card>
    </v-app>
  </div>
</template>

<script>
  import OrderService from '../../services/OrderService';

  export default {
    data () {
    return {
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