import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:500',
})

export default API;