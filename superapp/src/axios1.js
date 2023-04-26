import axios from 'axios'
import { baseUrlMovie } from './constants';
const instance1 = axios.create({
    baseURL: baseUrlMovie,
    
  });
  export default instance1