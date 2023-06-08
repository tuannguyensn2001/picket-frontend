import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:12000/',
});
//
API.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }
  console.log(config);
  return config;
});

export default API;
