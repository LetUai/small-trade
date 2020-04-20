import axios from 'axios';

const api = axios.create({
  baseURL: 'https://smalltrade.herokuapp.com/'
});

export default api;