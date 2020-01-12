<template>
  <div class="orders">
    <div class="orderForm">
      <orderForm></orderForm>
    </div>
    <div class="orderList">
      <ordersList></ordersList>
    </div>
  </div>
</template>

<script>
  import OrdersList from './OrdersList'
  import OrderForm from './OrderForm'

  export default {
    components: { OrdersList, OrderForm }    
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.orders {
  font-family: 'Raleway', sans-serif;
}


</style>