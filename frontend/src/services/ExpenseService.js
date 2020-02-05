import axios from 'axios'

const url = "/api/expenses/";

class ExpenseService {
    // Get Expenses
    static getExpenses () {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(expense => ({
                    ...expense,
                    expenseDate: order.expenseDate.substring(0,16)
                })))
            } catch (err) {
                reject(err)
            }
        })
    }

    // Create Expense
    static insertExpense(expense) {
        return axios.post(url, { expense });
    }
}

export default ExpenseService;