import axios from "axios";
import { API_URL } from "../config/database";

axios.defaults.baseURL = API_URL;

function setToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
}

function get(url) {
  return axios.get(url);
}

function post(url, data) {
  return axios.post(url, data);
}

function put(url, data) {
  return axios.put(url, data);
}

function del(url) {
  return axios.delete(url);
}

const httpService = {
  get,
  post,
  put,
  del,
  setToken,
}

export default httpService;