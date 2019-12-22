<template>
  <div class="order">
    <v-app id="orderList">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="orders"
        :single-select="singleSelect"
        item-key="name"
        show-select
        class="elevation-1"
      >
        <template v-slot:top>
          <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
  import OrderService from '../../services/OrderService';

  export default {
    data () {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        { text: 'Ref. No.', value: 'reference_num'},
        { text: 'Type', value: 'type' },
        { text: 'Customer Name', value: 'customer_name' },
        { text: 'Created Date', value: 'created_date' },
        { text: 'Remarks', value: 'remarks'}
      ],
      orders: [],
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