import axios from 'axios'

const url = "http://localhost:8080/api/orders/";

class OrderService {
    
    // Get Orders
    static getOrders() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(order => ({
                    ...order,
                    createdDate: order.createdDate.substring(0,16)
                })))
            } catch (err) {
                reject(err)
            }
        })
    }

    // Create Order
    static insertOrder(order) {
        return axios.post(url, { order });
    }

    formatCompat(date) {
        var ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return date.getDate() + ' ' + ms[date.getMonth()] + ' ' + date.getFullYear();
      }
}

export default OrderService;