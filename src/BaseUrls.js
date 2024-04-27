import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  // baseURL: 'http://hybrid.srishticampus.in:4005/emedicals_api/', 

//local api

  baseURL: 'http://localhost:4005/emedicals', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance