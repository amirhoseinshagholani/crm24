import { createBrowserRouter } from "react-router-dom";
import Login from "./features/components/Login";
import Home from "./features/components/home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
])