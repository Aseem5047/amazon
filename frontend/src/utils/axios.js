import axios from 'axios';

const instance = axios.create({
    // baseURL:"http://localhost:5001/app-4fd7d/us-central1/api",
    baseURL: "https://amazonback.vercel.app/"
});

export default instance;