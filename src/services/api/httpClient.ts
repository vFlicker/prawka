import axios from 'axios';

// TODO: look at this
// import { config } from '../config';

const TIMEOUT = 5000;

export const httpClient = axios.create({
  baseURL: 'https://app.hmns.in',
  timeout: TIMEOUT,
});
