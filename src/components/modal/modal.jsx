import './modal.css'
import fox from '../home/metamask-bw.png'
import rightArrow from '../home/img/right-arrow.png'
import crossMark from '../home/img/cross-mark.png'
import walletconnect from '../home/img/walletconnect.png'

function Modal() {

    // placement: 'bottom-right',
    // backdrop: 'dynamic',
    // ba(ckdropClassNamees: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    return (
        <div>
            <div className="modal fade" id="myModal">
                <div className="modal-fullscreen-sm-down modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Connect wallet</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"><img src={crossMark} alt="" /></button>
                        </div>
                        <div className="modal-body">
                            <p className='navbar tw-font-semibold'>Choose your preferred wallet</p>
                            <ul>
                                <li className='navbar bg-light'>
                                    <p  className='tw-flex tw-gap-5 tw-justify-between'> <img width="40px" src={fox} alt="metamask" />
                                        <strong className='my-auto'>Metamask</strong>
                                    </p>
                                    <p> <img src={rightArrow} alt="" /></p>
                                </li>
                                
                                <li className='navbar '>
                                    <p  className='tw-flex tw-gap-5 tw-justify-between'> <img width="40px" src={walletconnect} alt="walletconnect" />
                                        <strong className='my-auto'>Walletconnect</strong>
                                    </p>
                                    <p> <img src={rightArrow} alt="" /></p>
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