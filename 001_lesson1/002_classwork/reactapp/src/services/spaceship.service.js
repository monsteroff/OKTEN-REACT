import axios from 'axios';

let axiosInstance = axios.create({
    baseURL:"https://api.spacexdata.com/v3",
    headers:{}
});

const getSpaceships = () => axiosInstance.get('/launches')

export {getSpaceships}