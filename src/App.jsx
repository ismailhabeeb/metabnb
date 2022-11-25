import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Layout from './components/dlayout/layout'
import Home from './components/home/home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
      
    </div>
  )
}

export default App
