import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Layout from './components/layout'
function App() {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
