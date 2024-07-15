import { Button } from "./ui/button"

const Pricing = () => {
    return (
        <div id="pricing" className="px-4 md:px-10">
            <div className="bg-[#212121] px-2 rounded-[30px] text-center shadow-inner py-10 md:py-14">

                <h2 className="text-[40px] font-bold">Pricing?</h2>
                <p className="text-[#C3C3C3] pt-5 pb-8 text-xl md:text-2xl font-light">
                    Every project is unique, and so is our pricing. We tailor our services to meet your <br className="md:block hidden" /> specific needs, ensuring you get the best value for your investment.
                </p>
                <a href="https://calendly.com/contact-vfxion/30min?back=1&month=2024-07">

                    <Button>Get A Quote</Button>
                </a>
            </div>
        </div>
    )
}

export default Pricing