import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Root from './routes/Root'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './routes/Contact'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact/>
      }
    ]
  },
  {
    path:"/root",
    element: <App/>
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
