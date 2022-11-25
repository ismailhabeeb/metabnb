// import { Link } from "react-router-dom";
import Navber from "../header/navbar";
import Footer from "../footer/footer";
const Layout = ({ children }) => {
    return (
        <main >
            <Navber />

            <div className="">
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout;