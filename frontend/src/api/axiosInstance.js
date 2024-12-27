// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5000/api',  // Adjust to your backend URL
// });

// export default API;
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',  // Adjust to your backend URL (if different)
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors here for global configurations if needed
// For example, for authentication tokens:
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Assuming you're using JWT
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
