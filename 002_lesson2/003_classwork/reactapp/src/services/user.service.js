import axios from 'axios';

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{}
});

const getUsers = () => axiosInstance.get('/users')

export {getUsers}