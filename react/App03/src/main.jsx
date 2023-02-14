import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/About',
    element: <About></About>,
  },
  {
    path: '/Contact',
    element: <h1>Contact</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
