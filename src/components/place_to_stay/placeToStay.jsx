import { useState } from 'react'

import './place_to_stay.css'
import p1 from '../home/img/2.webp'
import p2 from '../home/img/4.webp'
import p3 from '../home/img/3.webp'
import p4 from '../home/img/modern-house-white.webp'
import p5 from '../home/img/7.jpg'
import p6 from '../home/img/5.webp'
import p7 from '../home/img/6.webp'
import p8 from '../home/img/modern-house.webp'
import p9 from '../home/img/p1.webp'
import p10 from '../home/img/p2.webp'
import p11 from '../home/img/p3.webp'
import p12 from '../home/img/p4.webp'
import p13 from '../home/img/p5.webp'
import p14 from '../home/img/p6.webp'
import p15 from '../home/img/p7.webp'
import p16 from '../home/img/p8.webp'

import star from '../home/star.png'
import like from '../home/like.png'
import bar from '../home/img/bar.png'



function PlaceToStay() {
    const [list, setList] = useState(
        [p1, p2, p3, p4, p5, p6, p7, p8,p9,p10,p11,p12,p13,p14,p15,p16]
    )

    return (
        <div className="App">
            <main>
                <nav className='navbar tw-pr-16 tw-pl-16 topbar tw-font-semibold black'>
                    <p>Restaurant</p>
                    <p>Cottage</p>
                    <p>Castle</p>
                    <p>fantast city</p>
                    <p>beach</p>
                    <p>Carbins</p>
                    <p>Off-grid</p>
                    <p>Farm</p>
                    <button className='btn black location tw-flex '><p>Location </p><img src={bar} alt="" /></button>
                </nav>

                <main className='main tw-p-16 black'>
                    {
                        list.map((value, index) => {
                            return (
                                <section key={index} className=' card'>
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
            </main>
        </div>
    )
}

export default PlaceToStay;
