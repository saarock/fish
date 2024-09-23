import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutUs, Contact, Home, Service } from './pages/index.ts';
import Layout from './Layout.tsx';


// Router configuration with nested routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the parent
    children: [
      {
        path: "/", // Default child route
        element: <Home />, // Renders Home component inside Outlet
      },
      {
        path: "/service",
        element: <Service/>,
        
      },

      {
        path: "/contact",
        element: <Contact/>,
        
      },

      {
        path: "/about-us",
        element: <AboutUs/>,
        
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
