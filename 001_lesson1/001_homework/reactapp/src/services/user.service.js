import axios from 'axios';

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{}
});

const getUsers = () => axiosInstance.get('/users')
const getPosts = () => axiosInstance.get('/posts')
const getComments = () => axiosInstance.get('/comments')

export {getUsers, getPosts, getComments}