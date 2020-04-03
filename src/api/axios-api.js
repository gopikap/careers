import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://candidateform-6cb6c.firebaseio.com/'
});