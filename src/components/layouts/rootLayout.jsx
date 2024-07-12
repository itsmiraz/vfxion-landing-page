/* eslint-disable react/prop-types */
import Footer from "../footer"
import Header from "../header"

const RootLayout = ({ children }) => {
    return (
        <div className="bg-black text-white  min-h-screen max-w-[1727px] mx-auto ">
            <Header />
            <div>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default RootLayout