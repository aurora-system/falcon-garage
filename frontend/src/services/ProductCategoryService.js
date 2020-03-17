import axios from 'axios'

const url = "/productcategories";

class ProductCategoryService {
    
    // Get Product Categories
    static getProductCategories() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(productCategory => ({
                    ...productCategory
                })))
            } catch (err) {
                reject(err)
            }
        })
    }

    // Create Product Category
    static insertProductCategory(category) {
        return axios.post(url, category);
    }

}

export default ProductCategoryService;