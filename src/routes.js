import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import HeaderLayout from "./components/header/headerLayouts";
import Order from "./pages/order";
import Menu from "./pages/menu";
import Detail from "./pages/detail";
import FinishOrder from "./pages/finishOrder";


const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/account',
                element: <Profile />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/order/finish',
                element: <FinishOrder />
            },
            {
                path: '/chat',
                element: <Chat />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/detail/:id',
                element: <Detail />
            },
        ]
    },
   
    
])

export default router;