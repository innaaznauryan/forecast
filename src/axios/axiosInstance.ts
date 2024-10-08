import axios from "axios";

export const apiClient = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})