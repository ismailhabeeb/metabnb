import { useState } from 'react'
// import Modal from './modal'
import Logo from '../assets/images/bungalowlogo.png'
import '../assets/styles/navbar.css'
import { Link } from 'react-router-dom'
import link from '../assets/images/link.png'

function Navber() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light tw-pr-14 tw-pl-14 header">
        <div className="container-fluid tw-justify-between ">
          <div className='tw-flex navbar-brand'>
            <span className=' ttt my-auto'><img loading='lazy' width={40} src={Logo} alt="" /></span>
            <span className=' tw-font-bold name'>Metabnb</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-justify-evenly black nav">
              <li className="nav-item">
                <main className='page'><Link to="/">Home</Link></main>
              </li>
              <li className="nav-item">
                <main className='page'><Link to={"/placeToStay"}>Place to stay</Link></main>
              </li>
              <li className="nav-item">
                <main className='page'>NFTs</main>
              </li>
              <li className="nav-item">
                <main className='page'>Community</main>
              </li>
            </ul>
            <div className='Conn'>
              <button className='Connect btn bmc' data-bs-toggle="modal" data-bs-target="#myModal">Connect wallet</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navber
