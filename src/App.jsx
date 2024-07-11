import { AboutUs } from "./components/aboutUs"
import Footer from "./components/footer"
import Gallery from "./components/gallery"
import Header from "./components/header"
import Hero from "./components/hero"
import Pricing from "./components/pricing"
import WhyChooseUs from "./components/whyChooseUs"

function App() {

  return (
    <div className="bg-black text-white  min-h-screen max-w-[1440px] max-auto px-20">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <Pricing />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
