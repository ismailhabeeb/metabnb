import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const Home = React.lazy(() => import("./components/home/home"))
const PlaceToStay = React.lazy(() => import("./components/place_to_stay/placeToStay"))

const router = createBrowserRouter([
  { path: "/", element: <App/>, errorElement: <h1>page Not found</h1>,
  children:[
    {path:"",element:<Home/> },
    {path:"placeToStay",element:<PlaceToStay/> }
  ]
},
  
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
