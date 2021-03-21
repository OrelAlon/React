import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID _8IC9bdBfg9LMCVEMqtqgKv7dxZCL9IijIoVrrvZxZs',
  },
});
