import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom";
import Crypto from './crypto';
import Login from "./login";
import Registration from './registration';
import Portfolio from './portfolio';
import Suggestion from './suggetion';

const ReactRouter = ()=>{
    const router = createBrowserRouter([

        {
            path:"/login",
            element: <Login/>,
        },
        {
            path:"/registration",
            element: <Registration/>,
        },
        {
            path:"/",
            element: <Crypto/>,
        },
        {
            path:"/portfolio",
            element: <Portfolio/>,
        },
        {
            path:"/suggestion",
            element: <Suggestion/>,
        },
    ]);

    return <RouterProvider router={router} />
}

export default ReactRouter;