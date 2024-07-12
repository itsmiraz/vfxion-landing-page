import { Button } from "./ui/button"

const Pricing = () => {
    return (
        <div className="px-10">
            <div className="bg-[#212121] rounded-[30px] text-center shadow-inner py-14">

                <h2 className="text-[40px] font-bold">Pricing?</h2>
                <p className="text-[#C3C3C3] pt-5 pb-8 text-2xl font-light">
                    Every project is unique, and so is our pricing. We tailor our services to meet your <br className="md:block hidden" /> specific needs, ensuring you get the best value for your investment.
                </p>
                <Button>Get A Quote</Button>
            </div>
        </div>
    )
}

export default Pricing