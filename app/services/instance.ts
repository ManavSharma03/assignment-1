import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: 'https://rapidapi.com/', // Replace with your API base URL
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    // 'X-RapidAPI-Host': 'http://localhost:3000/',
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
});

export default axiosInterceptorInstance;