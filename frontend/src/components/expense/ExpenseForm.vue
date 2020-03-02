<template>
    <div class="expense">
        <v-form ref="form" :lazy-validation="false">
            <v-card outlined>
                <v-card-title class="header-label">
                        <v-col class="d-flex">
                            <p class="header-text">Log Expense</p>
                        </v-col>
                </v-card-title>
                <v-divider></v-divider>
                <v-container>
                    <v-row dense>
                        <!-- EXPENSE TYPE -->
                        <v-col cols="12" md="2">
                            <v-select 
                                :rules="expenseTypeRules" 
                                :items="expenseTypes" 
                                label="Expense Type" 
                                v-model="expense.type" 
                                required 
                                outlined>
                            </v-select>
                        </v-col>
                        <!-- AMOUNT -->
                        <v-col class="amount" cols="12" md="2">
                            <v-text-field 
                                name="amount"
                                label="Amount"
                                v-model="expense.amount"
                                type="number"
                                min="0"
                                outlined></v-text-field>
                        </v-col>
                        <!-- EXPENSE DATE -->
                        <v-col class="expenseDate" cols="12" md="2">
                            <v-dialog
                                ref="dialog"
                                v-model="modal"
                                :return-value.sync="expense.expenseDate"
                                persistent
                                width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="expense.expenseDate"
                                        label="Expense Date"
                                        readonly
                                        v-on="on"
                                        outlined
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="expense.expenseDate" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(expense.expenseDate)">OK</v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                        <!-- REMARKS -->
                        <v-col class="amount" cols="12" md="6">
                            <v-text-field
                                outlined
                                name="remarks"
                                label="Remarks"
                                value=""
                                v-model="expense.remarks"
                                no-resize
                            ></v-text-field>
                        </v-col>
                        
                    </v-row>
                    <v-divider></v-divider>
                    <v-row dense>
                        <v-container>
                        <v-col cols="12" md="12">
                            <div class="submitBtn">
                                <v-btn large color="primary" @click="createExpense">Submit Expense</v-btn>
                            </div>
                        </v-col>
                        </v-container>
                    </v-row>
                </v-container>
            </v-card>
        </v-form>
    </div>
</template>

<script>
    import ExpenseService from '../../services/ExpenseService';

export default {
    data () {
        return{ 
            expense: {
                type: '',
                amount: '',
                remarks: '',
                expenseDate: new Date().toISOString().substr(0, 10)
            },
            expenseTypes: ['miscellaneous', 'utility', 'salary'],
            
            // VALIDATION
            expenseTypeRules: [
                v => !!v || ''
            ],
            modal: false
        }
    },
    methods: {
        async createExpense () {
        
        }
    }
}
</script>

<style>


.expense {
    font-family: 'Raleway', sans-serif;
}

.submitBtn {
    text-align: right;
}

.header-label {
   
}

.header-text {
   
}
</style>