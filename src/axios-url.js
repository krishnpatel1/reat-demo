import axios from 'axios';

const instance = axios.create({
    // baseURL:"http://localhost:4300"
    // baseURL:"http://inheritxdev.net:4301"
    baseURL:"http://34.202.193.233:4300"
});


export default instance;