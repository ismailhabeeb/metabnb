import { useState } from 'react'
import Logo from './bungalow (1).png'
import face from './facebook.png'
import twi from './twitter.png'
import inst from './instagram.png'
import './footer.css'

function Footer() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <footer className='footer'>

                <section className='d-flex tw-justify-between'>
                    <section className='fmeta'>
                        <div className='tw-flex '>
                            <p><img width={45} src={Logo} alt="" /></p>
                            <div className='tw-text-5xl text-light flog'>Metabnb</div>
                        </div>
                        <div className='tw-flex w-50 tw-justify-between tw-mt-24'>
                            <img width={20} src={face} alt="" />
                            <img width={20} src={inst} alt="" />
                            <img width={20} src={twi} alt="" />
                        </div>
                    </section>

                    <section className='tw-flex tw-justify-between fcom'>
                        <div>
                            <strong>Community</strong>
                            <div>NFT</div>
                            <div>Tokens</div>
                            <div>Landlords</div>
                            <div>Discord</div>
                        </div>

                        <div>
                            <strong>Places</strong>
                            <div>Castle</div>
                            <div>Farms</div>
                            <div>Beach</div>
                            <div>Learn more</div>
                        </div>

                        <div>
                            <strong><a href="#">About us</a></strong>
                            <div><a href="#">Road map</a></div>
                            <div><a href="#">Creators</a></div>
                            <div><a href="#">Career</a></div>
                            <div><a href="#">Contact us</a></div>

                        </div>
                    </section>
                </section>

                <footer>© 2022 Metabnb</footer>
            </footer>
        </div>
    )
}

export default Footer
