import '../assets/styles/modal.css'
import fox from '../assets/images/metamask-bw.png'
import rightArrow from '../assets/images/right-arrow.png'
import crossMark from '../assets/images/cross-mark.png'
import walletconnect from '../assets/images/walletconnect.png'

function Modal() {

    // placement: 'bottom-right',
    // backdrop: 'dynamic',
    // ba(ckdropClassNamees: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    return (
        <div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Connect wallet</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"><img loading='lazy' src={crossMark} alt="" /></button>
                        </div>
                        <div className="modal-body">
                            <p className='navbar tw-font-semibold'>Choose your preferred wallet</p>
                            <ul>
                                <li className='navbar bg-light'>
                                    <p  className='tw-flex tw-gap-5 tw-justify-between'> <img loading='lazy' width="40px" src={fox} alt="metamask" />
                                        <strong className='my-auto'>Metamask</strong>
                                    </p>
                                    <p> <img loading='lazy' src={rightArrow} alt="" /></p>
                                </li>
                                
                                <li className='navbar '>
                                    <p  className='tw-flex tw-gap-5 tw-justify-between'> <img loading='lazy' width="40px" src={walletconnect} alt="walletconnect" />
                                        <strong className='my-auto'>Walletconnect</strong>
                                    </p>
                                    <p> <img loading='lazy' src={rightArrow} alt="" /></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;