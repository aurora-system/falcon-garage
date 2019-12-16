import axios from 'axios'

const url = "http://localhost:8080/api/products/";

class ProductService {
    
    // Get Products
    static getProducts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(product => ({
                    ...product
                })))
            } catch (err) {
                reject(err)
            }
        })
    }

    // Create Product
    static insertProduct(productId, type) {
        return axios.post(url, {productId, type});
    }

}

export default ProductService;