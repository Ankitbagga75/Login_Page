import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Password from './components/Password';
import Reset from './components/Reset';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';
import Register from './components/Register';
import Username from './components/Username';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path: '/register',
        element : <Register></Register>
    },
    {
        path: '/password',
        element : <Password></Password>
    },
    {
        path: '/reset',
        element : <Reset></Reset>
    },
    {
        path: '/profile',
        element : <Profile></Profile>
    },
    {
        path: '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path: '/*',
        element : <PageNotFound></PageNotFound>
    }
])
export default function App() {
    return (
        <main>
            <RouterProvider router ={router}></RouterProvider>
        </main>
    )
}