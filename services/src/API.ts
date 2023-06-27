import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/',
});
//
API.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default API;
