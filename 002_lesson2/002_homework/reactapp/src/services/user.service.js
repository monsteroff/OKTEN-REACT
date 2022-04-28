import axios from 'axios'

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{}
});

const getUsers = () => axiosInstance.get('/users')
const getUserDescription = (id) => axiosInstance.get('/users/' + id)
const getUserPosts = (id) => axiosInstance.get('/users/'+ id +'/posts')



export {getUsers, getUserDescription, getUserPosts}