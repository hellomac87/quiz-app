import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://opentdb.com/api.php',
});
