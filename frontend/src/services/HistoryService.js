import axios from 'axios'

const url = "/inouthistory";

class HistoryService {

    static findAll(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url+'/'+id)
                const data = res.data
                resolve(data.map(item => ({
                    ...item
                })));
            } catch (err) {
                reject(err)
            }
        })
    }

    static save(history) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, history)
                const data = res.data
                resolve(data.map(item => ({
                    ...item
                })))
            } catch (err) {
                reject(err)
            }
        })
    }
}

export default HistoryService;