import { RouterProvider } from "react-router-dom"
import Login from "./features/components/Login"
import { router } from "./router"
import { useEffect } from "react"
import { httpService } from "./services/http-service"
import axios from "axios"



function App() {
  // useEffect(() => {
  //   const url = 'http://185.126.8.108/NOMS-BE/API/NetExpert/GetCRMToken';
  //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYS5zaGFnaG9sYW5pIiwibmJmIjoxNzA3OTQ0Mjk0LCJleHAiOjE3MDgwMzA2OTQsImlzcyI6IkppbmdldCIsImF1ZCI6IkppbmdldCBVTVMgV2ViQXBpIn0.3AFnQz1AYmSkMwo92iTw8go3RNj2uH7Dn_egkY-P9HI';

  //   axios.post(url, {}, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
