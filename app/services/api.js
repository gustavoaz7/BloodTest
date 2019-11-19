import axios from 'axios';
import { IP_ADDRESS } from 'react-native-dotenv';

const BASE_URL = `http://${IP_ADDRESS}:4000`;

const fetch = path => axios.get(`${BASE_URL}/${path}`);

export const fetchBloodList = () => fetch('tests').then(({ data }) => data);

export const fetchBloodResults = () => fetch('results').then(({ data }) => data);
