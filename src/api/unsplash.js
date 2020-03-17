import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -rap4mhjhEJJrXA2byf8b9RED0vDTrKaFfBS34iJPyM'
    }
});