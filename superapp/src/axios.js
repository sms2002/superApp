import axios from 'axios'
import { baseUrlWeather } from "./constants";
import { baseUrlMovie } from './constants';
const instance = axios.create({
    baseURL: baseUrlWeather,
    
  });
  export default instance