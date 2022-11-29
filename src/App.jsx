import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Layout from './components/dlayout/layout'
import Home from './components/home/home'
import Modal from './components/modal/modal'
import PlaceToStay from './components/place_to_stay/placeToStay'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>

    </div>
  )
}

export default App
