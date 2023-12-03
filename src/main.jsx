import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Pages/Main.jsx';
import Detils from './Components/moreDetils/Detils.jsx';

const router = createBrowserRouter([
  {
    path: "/Telocom",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path:"detils",
        element: <Detils />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

