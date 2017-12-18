import Frisbee from 'frisbee';
import config from './config';

const api = new Frisbee({
  baseURI: config.baseURI,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;
