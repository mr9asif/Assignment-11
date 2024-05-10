import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
});

const UseAxiosSecure = () => axiosSecure;

export default UseAxiosSecure;
