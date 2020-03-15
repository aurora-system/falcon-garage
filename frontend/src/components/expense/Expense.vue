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

.expenses {
  font-family: 'Raleway', sans-serif;
}


</style>