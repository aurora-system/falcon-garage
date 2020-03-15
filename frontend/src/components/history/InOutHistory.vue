<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      item-key="_id"
      class="elevation-1"
      ></v-data-table>
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
            {text:'Product', value:'product.ame'},
            {text:'Count', value:'productCount'},
            {text:'Total', value:'updatedCount'}
        ],
        items:[],
        search:'',
        error:''
      }
  },
  method: {
    //
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