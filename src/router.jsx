import { createBrowserRouter } from "react-router-dom";
import Login from "./features/components/Login";
import Home from "./features/components/home";
import { loginAction } from "./features/components/Login";
import Panel from "./features/components/panel";
import Profile from "./features/components/pages/profile";
import Simcard from "./features/components/pages/simcard";
import Tickets from "./features/components/pages/tickets";
import Comments from "./features/components/pages/comments";
import PostTicket, { ticketPostAction } from "./features/components/pages/postTicket";
import Networks from "./features/components/pages/networks";
import Modems from "./features/components/pages/modems";

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
        },
        {
            path:'simcard',
            element:<Simcard></Simcard>
        },
        {
            path:'tickets',
            element:<Tickets></Tickets>,
        },{
            path:'tickets/comments',
            element:<Comments></Comments>
        },{
            path:'tickets/post',
            element:<PostTicket></PostTicket>,
            action:ticketPostAction,
            errorElement:<PostTicket></PostTicket>
        },{
            path:'networks',
            element:<Networks></Networks>
        },{
            path:'modems',
            element:<Modems></Modems>
        }]
    },
    {
        path:'/login',
        element:<Login></Login>,
        action:loginAction,
        errorElement:<Login></Login>
    }
])