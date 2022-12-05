// import { Link } from "react-router-dom";
import Navber from "./navbar";
import Footer from "./footer";
import Modal from "./modal";
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