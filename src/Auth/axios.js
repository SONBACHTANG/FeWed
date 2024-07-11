import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: config.api.API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});


instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data;
    }
);

export default instance;
