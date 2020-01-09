import axios from 'axios'

const url = "http://localhost:8080/api/products/";

class ProductService {
    
    // Get all products
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

    // Get all products for a given category
    static getProductsOfCategory(category_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}` + 'category=' + category_id);
                const data = res.data;
                resolve(data.map(product => ({
                    ...product
                })))
            } catch (err) {
                reject(err)
            }
        })
    }

    // Get a single product by id
    static getProductById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}` + 'id=' + id);
                const data = res.data;
                resolve(data);
            } catch (err) {
                reject(err)
            }
        })
    }

    // Create a product
    static insertProduct(product) {
        return axios.post(url, product);
    }

}

export default ProductService;