import axios from 'axios'
import { baseUrlWeather } from "./constants";
const instance = axios.create({
    baseURL: baseUrlWeather
  });
  export default instance