import axios from 'axios';

const BASE_URL = 'http://192.168.0.13:4000';

const get = path => axios.get(`${BASE_URL}/${path}`);

export const getBloodList = () => get('tests').then(({ data }) => data);

export const getBloodResult = () => get('results').then(({ data }) => data);
