import axios from 'axios';

const BASE_URL = 'http://192.168.0.13:4000';

const fetch = path => axios.get(`${BASE_URL}/${path}`);

export const fetchBloodList = () => fetch('tests').then(({ data }) => data);

export const fetchBloodResult = () => fetch('results').then(({ data }) => data);
