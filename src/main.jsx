import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const Home = React.lazy(() => import("./pages/home"))
const PlaceToStay = React.lazy(() => import("./pages/placeToStay"))

const router = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <h1>page Not found</h1>,
    children: [
      { path: "", element: <Home /> },
      { path: "placeToStay", element: <PlaceToStay /> }
    ]
  },

])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
