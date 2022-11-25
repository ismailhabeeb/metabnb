import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const Home = React.lazy(() => import("./components/home/home"))
// const PlaceToStay = React.lazy(() => import("./components/place_to_stay/placeToStay"))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
)
