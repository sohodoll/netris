import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://www.mocky.io/v2/',
});
