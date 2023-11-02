import React from "react"
import { Navigate } from "react-router-dom"

import Home from "../pages/Home"
import Main from "../pages/Main"

export default [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/main',
        element: <Main />
    },
    {
        path: '/',
        element: <Navigate to='/home' />
    }
]