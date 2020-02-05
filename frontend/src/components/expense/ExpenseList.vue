<template>
    <div class="expenses">
        <v-app id="expenseList">
            <v-card>
                <v-card-title>
                    <h4>List of Expenses</h4>
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
                    v-model="selected"
                    :headers="headers"
                    :items="expenses"
                    :search="search"
                    class="elevation-1"
                    no-data-text="There are no expenses."
                    sort-by="expenseDate"
                    sort-desc
                    >
                </v-data-table>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    import ExpenseService from '../../services/ExpenseService';
    
    export default {
        data () {
            return {
                selected: [],
                headers: [
                    { text: 'Expense Type', value: 'type'},
                    { text: 'Amount', value: 'amount' },
                    { text: 'Date', value: 'expenseDate' },
                    { text: 'Remarks', value: 'remarks' }
                ],
                expenses: [],
                search: ''
            }
        },
        methods: {

        },
        async created () {
            try {
                this.expenses = await ExpenseService.getExpenses();
                console.log("Loading expense items " + this.expenses);
            } catch (err) {
                this.error = err.message;
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

#expenseList {
  font-family: 'Raleway', sans-serif;
}

</style>