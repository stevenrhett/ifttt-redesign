import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import AppletsCard from "./components/AppletsCard";
import HomePage from "./pages/HomePage";
import ErrorPage from "./error-page";
import App from "./App";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
        ]
    },
    {
        path: '/applets',
        element: <AppletsCard/>,
    },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


