import axios from 'axios';

const baseUrl = 'http://localhost:4000/';

export default {
    article(url=baseUrl+'articles/')
    {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url+id),
            create: newRecord => axios.post(url.newRecord),
            update: (id,updatedRecord) => axios.put(url,updatedRecord),
            delete: id => axios.delete(url+id)
        }
    }
}