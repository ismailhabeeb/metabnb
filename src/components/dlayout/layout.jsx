// import { Link } from "react-router-dom";
import Navber from "../header/navbar";
import Footer from "../footer/footer";
import Modal from "../modal/modal";
const Layout = ({ children }) => {
    return (
        <main >
            <Navber />

            <div className="">
                {children}
            </div>
            <Footer />
            <Modal />
        </main>
    )
}

export default Layout;