import axios from "axios";

//https://neka.crm24.io/webservice.php?operation=getchallenge&username=birashk@outlook.com

// const BASE_URL = "https://neka.crm24.io"; //

const BASE_URL = "http://185.126.8.108/NOMS-BE"; 

export const httpService = axios.create({
    baseURL:BASE_URL
})