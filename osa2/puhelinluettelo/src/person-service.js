import axios from 'axios'

const api = 'http://localhost:3001/persons' //'/api/persons'

const list = () => axios.get(api).then(response => response.data)
const add = newItem => axios.post(api, newItem).then(response => response.data)
const update = (id, item) => axios.put(api + '/' + id, item).then(response => response.data)
const remove = id => axios.delete(api + '/' + id).then(response => response.data)

export default { list, add, update, remove }