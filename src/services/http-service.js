import axios from "axios";


const BASE_URL = "https://neka.crm24.io/webservice.php?"; 

export const httpService = axios.create({
    baseURL:BASE_URL
})