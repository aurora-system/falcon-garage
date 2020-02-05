<template>
  <div class="expenses">
    <div class="expenseForm">
      <expenseForm></expenseForm>
    </div>
    <div class="expenseList">
      <expenseList></expenseList>
    </div>
  </div>
</template>

<script>
  import ExpenseList from './ExpenseList'
  import ExpenseForm from './ExpenseForm'

  export default {
    components: { ExpenseList, ExpenseForm }    
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.expenses {
  font-family: 'Raleway', sans-serif;
}


</style>