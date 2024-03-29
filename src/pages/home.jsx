import { useState } from 'react'

import '../assets/styles/home.css'
import metamask from '../assets/images/metamask-bw.png'
import Opensea from '../assets/images/Logomark-Transparent White.png'
import mbtoken from '../assets/images/ethereum-coins.png'
import star from '../assets/images/star.png'
import like from '../assets/images/like.png'

//up
import t1 from '../assets/images/tt.webp'
import t2 from '../assets/images/1b.webp'
import t3 from '../assets/images/2t.webp'
import t4 from '../assets/images/22b.webp'
//down
import purpleR from '../assets/images/purple house.webp'
import brownR from '../assets/images/brown room.webp'
import orangeR from '../assets/images/orange room.webp'
//loop
import e1 from '../assets/images/2.webp'
import e2 from '../assets/images/4.webp'
import e3 from '../assets/images/3.webp'
import e4 from '../assets/images/modern-house-white.webp'
import e5 from '../assets/images/7.jpg'
import e6 from '../assets/images/5.webp'
import e7 from '../assets/images/6.webp'
import e8 from '../assets/images/modern-house.webp'

function Home() {
  const [count, setCount] = useState(
    [e1, e2, e3, e4, e5, e6, e7, e8]
  )

  return (
    <div className="App">
      <div className='tw-flex tw-pb-10 tw-pt-10 tw-p-16 head'>
        <div className='tw-w-3/5 mt-5 hrent'>

          <div className='tw-w-11/12'>
            <div className='rent mb-5 black'> Rent a <span className='mc'>Place</span> away from <span className='mc'>Home</span> in the <span className='mc'> Metaverse</span> </div>

            <div className='we black'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your confort zone</div>


            <div className="input-group input-group-lg mt-5 searchdiv">
              <input placeholder='Search for location' type="text" className="form-control tw-font-thin border-2" />
              <span className="input-group-text bmc sbtn tw-font-thin">Search</span>
            </div>

          </div>
        </div>

        <div className='tw-flex tw-flex-row ppcardy'>
          <div className='tw-mt-24 pcardy'>
            <img loading='lazy' className='cardy m-2 ' width="100%" src={t1} alt="" />
            <img loading='lazy' className='cardy m-2' width="200px" src={t2} alt="" />
          </div>
          <div className='mt-3 pcardy'>
            <img loading='lazy' className='cardy m-2 ms-0' width="200px" src={t3} alt="" />
            <img loading='lazy' className='cardy m-2 ms-0' width="200px" src={t4} alt="" />
          </div>
        </div>
      </div>


      <main className='mid-nav tw-justify-around bmc navbar tw-h-16'>

        <div className='tw-flex  tw-justify-around'><p className='my-auto'><img loading='lazy' width="40px" src={mbtoken} alt="" /></p> <p> MBToken</p></div>
        <div className='tw-flex  tw-justify-around'><p className='my-auto'><img loading='lazy' width="40px" src={metamask} alt="" /></p> <div> METAMASK</div></div>
        <div className='tw-flex  tw-justify-around'><p className='my-auto'><img loading='lazy' width="40px" src={Opensea} alt="" /> </p> <strong> Opensea</strong></div>
      </main>

      <section className='insp  mt-5'>Inspiration for your next adventure</section>
      <main className='main tw-p-16 black'>
        {
          count.map((value, index) => {
            return (
            <div key={index}>
              <section data-bs-toggle="modal" data-bs-target={`#exampleModal` + index} className='card'>
                <img loading='lazy' className='card-img' width="300px" src={value} alt="" />
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
                  <img loading='lazy' width="12px" src={star} alt="" />
                  <img loading='lazy' width="12px" src={star} alt="" />
                  <img loading='lazy' width="12px" src={star} alt="" />
                  <img loading='lazy' width="12px" src={star} alt="" />
                  <img loading='lazy' width="12px" src={star} alt="" />
                </footer>
              </section>

              <>
                <div key={index} className="modal fade" id={`exampleModal` + index} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-body">
                        <img loading='lazy' className='card-img' src={value} alt="" />

                      </div>
                      <footer className='container '>
                        <div className='tw-flex tw-justify-between mt-2'>
                          <p>Desert king</p>
                          <strong>1MBT PER night</strong>
                        </div>
                        <div className='tw-flex tw-justify-between'>
                          <p className=''>2345km away</p>
                          <p>available for 2weeks stay</p>
                        </div>
                      </footer>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary bg-info" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
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
