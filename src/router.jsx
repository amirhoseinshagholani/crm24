import { createBrowserRouter } from "react-router-dom";
import Login from "./features/components/login";
import Home from "./features/components/home";
import { loginAction } from "./features/components/login";
import Panel from "./features/components/panel";
import Profile from "./features/components/pages/profile";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/panel',
        element:<Panel></Panel>,
        children:[{
            element:<Profile></Profile>,
            index:true
        }]
    },
    {
        path:'/login',
        element:<Login></Login>,
        action:loginAction,
        errorElement:<Login></Login>
    }
])