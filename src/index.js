import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aboutus from "./components/AboutUs"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './App';
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import Body from "./components/Body"




const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/aboutus",
        element:<Aboutus/>
      },
      {
        path:"/contactus",
        element:<ContactUs/>
      }

    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



