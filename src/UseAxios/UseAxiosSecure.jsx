import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://as-11-server.vercel.app/',
    withCredentials: true
});

const UseAxiosSecure = () => axiosSecure;

export default UseAxiosSecure;
