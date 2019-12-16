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
                    createdDate: new Date(order.createdDate)
                })))
            } catch (err) {
                reject(err)
            }
        })
    }

    // Create Order
    static insertOrder(orderId, type) {
        return axios.post(url, {orderId, type});
    }

}

export default OrderService;