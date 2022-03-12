import axios from "axios";

const axiosServer = axios.create({
    baseURL:"https://restcountries.com/v3.1/"
});

export default axiosServer ;