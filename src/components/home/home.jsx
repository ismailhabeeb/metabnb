import { useState } from 'react'

import './home.css'
import metamask from './metamask-bw.png'
import Opensea from './Logomark-Transparent White.png'
import mbtoken from './ethereum-coins.png'
import star from './star.png'
import like from './like.png'

//up
import t1 from './tt.webp'
import t2 from './1b.webp'
import t3 from './2t.webp'
import t4 from './22b.webp'
//down
import purpleR from './purple house.webp'
import brownR from './brown room.webp'
import orangeR from './orange room.webp'
//loop
import e1 from './img/2.webp'
import e2 from './img/4.webp'
import e3 from './img/3.webp'
import e4 from './img/modern-house-white.webp'
import e5 from './img/7.jpg'
import e6 from './img/5.webp'
import e7 from './img/6.webp'
import e8 from './img/modern-house.webp'

function Home() {
  const [count, setCount] = useState(
    [e1, e2, e3, e4, e5, e6, e7, e8]
  )

  return (
    <div className="App">
      <div className='tw-flex tw-pb-10 tw-pt-10 tw-p-16 head'>
        <div className='tw-w-3/5 mt-5'>

          <div className='tw-w-10/12'>
            <div className='rent mb-5 black'> Rent a <span className='mc'>Place</span> away from <span className='mc'>Home</span> in the <span className='mc'> Metaverse</span> </div>

            <div className='we black'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your confort zone</div>


            <div className="input-group input-group-lg mt-5 searchdiv">
              <input placeholder='Search for location' type="text" className="form-control tw-font-thin border-2" />
              <span className="input-group-text bmc sbtn tw-font-thin">Search</span>
            </div>

          </div>
        </div>

        <div className='tw-flex tw-flex-row '>
          <div className='tw-mt-24 pcardy'>
            <img className='cardy m-2 ' width="100%" src={t1} alt="" />
            <img className='cardy m-2' width="200px" src={t2} alt="" />
          </div>
          <div className='mt-3 pcardy'>
            <img className='cardy m-2 ms-0' width="200px" src={t3} alt="" />
            <img className='cardy m-2 ms-0' width="200px" src={t4} alt="" />
          </div>
        </div>
      </div>


      <main className='mid-nav tw-justify-around bmc navbar tw-h-16'>

        <div className='tw-flex  tw-justify-around'><p className='my-auto'><img width="40px" src={mbtoken} alt="" /></p> <p> MBToken</p></div>
        <div className='tw-flex  tw-justify-around'><p className='my-auto'><img width="40px" src={metamask} alt="" /></p> <div> METAMASK</div></div>
        <div className='tw-flex  tw-justify-around'><p className='my-auto'><img width="40px" src={Opensea} alt="" /> </p> <strong> Opensea</strong></div>
      </main>

      <section className='insp  mt-5'>Inspiration for your next adventure</section>
      <main className='main tw-p-16 black'>
        {
          count.map((value, index) => {
            return (
              <section key={index} className='card'>
                <img className='card-img' width="300px" src={value} alt="" />
                <span className='card-img-overlay '><img className='' width="22px" src={like} alt="" /></span>
                <footer className='buttom'>
                  <div className='tw-flex tw-justify-between mt-2'>
                    <p>Desert king</p>
                    <strong>1MBT PER night</strong>
                  </div>
                  <div className='tw-flex tw-justify-between'>
                    <p className=''>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                </footer>

                <footer className='tw-flex'>
                  <img width="12px" src={star} alt="" />
                  <img width="12px" src={star} alt="" />
                  <img width="12px" src={star} alt="" />
                  <img width="12px" src={star} alt="" />
                  <img width="12px" src={star} alt="" />
                </footer>
              </section>
            )

          })

        }
      </main>


      <main className='bmc view  container-fluid d-flex tw-p-16 tw-pt-20 tw-justify-between'>
        <section className='s'>
          <div className='ss'>Metabnb NFTs</div>
          <div>discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are tradedas NFTs. These NFTs gives our
            customer access to loads of our exclusive services.
          </div>
          <button className='btn btn-light mc learn'><a href="#">Learn more</a></button>
        </section>

        <section className='simg '>
          <p className=''>
            <img className='cimg1' width="390px" src={purpleR} alt="" />
          </p>
          <p>
            <img className='cimg2' width="390px" src={brownR} alt="" />
          </p>
          <p>
            <img className='cimg3' width="390px" src={orangeR} alt="" />

          </p>
        </section>
      </main>

    </div>
  )
}

export default Home;
