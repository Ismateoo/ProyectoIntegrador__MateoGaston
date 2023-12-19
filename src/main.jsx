import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import Pokemon from './Components/Pokemon'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* const [id, setId] = useState(); */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },
  {
    path: "/pokemon/:id",
    element: <Pokemon/>,
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)


