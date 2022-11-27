import { useState } from 'react'
import Modal from '../modal/modal'
import Logo from './bungalow.png'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navber() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className='tw-flex tw-flex-row tw-justify-between navbar tw-pr-16 tw-pl-16 '>
        <div className='tw-flex'>
          <p className=' ttt my-auto'><img width={40} src={Logo} alt="" /></p>
          <p className=' tw-font-bold name'>Metabnb</p>
        </div>

        <div className='tw-flex tw-flex-row nav tw-justify-evenly black'>
          <main className='page'>Home</main>
          <main className='page'><Link to={"/placeToStay"}>Place to stay</Link></main>
          <main className='page'>NFTs</main>
          <main className='page'>Community</main>
        </div>

        <div>
          <button className='btn bmc' data-bs-toggle="modal" data-bs-target="#myModal">Connect wallet</button>
        </div>
      </nav>

    {/* <Modal/> */}
    </div>
  )
}

export default Navber
