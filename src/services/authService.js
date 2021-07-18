import http from "./httpService";

const apiEndPoint = '/auth';
const tokenKey = 'token';
const userKey = 'user';

http.setToken(getToken());

function getToken() {
  return localStorage.getItem('token');
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

async function register(data) {
  
  const { data: resData } = await http.post(apiEndPoint + '/register', data);

  // Store token to local storage
  localStorage.setItem(tokenKey, resData.data.token);
  localStorage.setItem(userKey, JSON.stringify(resData.data.user));
}

async function login(username, password) { 
  const { data: resData } = await http.post(apiEndPoint + '/login', { username, password });

  // Store token to local storage
  localStorage.setItem(tokenKey, resData.data.token);
  localStorage.setItem(userKey, JSON.stringify(resData.data.user));
}

function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default authService;