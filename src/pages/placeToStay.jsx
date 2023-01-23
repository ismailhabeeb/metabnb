import { useState } from 'react'

import '../assets/styles/place_to_stay.css'
import '../assets/styles/home.css'
import p1 from '../assets/images/2.webp'
import p2 from '../assets/images/4.webp'
import p3 from '../assets/images/3.webp'
import p4 from '../assets/images/modern-house-white.webp'
import p5 from '../assets/images/7.jpg'
import p6 from '../assets/images/5.webp'
import p7 from '../assets/images/6.webp'
import p8 from '../assets/images/modern-house.webp'
import p9 from '../assets/images/p1.webp'
import p10 from '../assets/images/p2.webp'
import p11 from '../assets/images/p3.webp'
import p12 from '../assets/images/p4.webp'
import p13 from '../assets/images/p5.webp'
import p14 from '../assets/images/p6.webp'
import p15 from '../assets/images/p7.webp'
import p16 from '../assets/images/p8.webp'

import star from '../assets/images/star.png'
import like from '../assets/images/like.png'
import bar from '../assets/images/bar.png'



function PlaceToStay() {
    const [list, setList] = useState(
        [p1, p2, p3, p4, p5, p6, p7, p8,p9,p10,p11,p12,p13,p14,p15,p16]
    )

    return (
        <div className="App">
            <main>
                <nav className='navbar tw-pr-16 tw-pl-16 topbar black'>
                    <p>Restaurant</p>
                    <p>Cottage</p>
                    <p>Castle</p>
                    <p>fantast city</p>
                    <p>beach</p>
                    <p>Carbins</p>
                    <p>Off-grid</p>
                    <p>Farm</p>
                    <button className='btn black location tw-flex '><p>Location </p><img loading='lazy' src={bar} alt="" /></button>
                </nav>

                <main className='main tw-p-16 black'>
                    {
                        list.map((value, index) => {
                            return (<div key={index}>
                                <section data-bs-toggle="modal" data-bs-target={`#exampleModal` + index} key={index} className=' card'>
                                    <img loading='lazy' className='card-img' width="300px" src={value} alt="" />
                                    <span className='card-img-overlay '><img loading='lazy' className='' width="22px" src={like} alt="" /></span>
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
                                <div className="modal fade" id={`exampleModal` + index} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            </main>
        </div>
    )
}

export default PlaceToStay;
