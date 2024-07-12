import { aboutUs_content } from "../constants"
export const AboutUs = () => {
    return (
        <div className="bg-[#0B0B0B] px-10 py-14 my-32  rounded-[30px] mt">
            <h2 className="text-[40px] text-center font-bold">
                About Us
            </h2>

            <p className="text-[#C3C3C3] text-center pt-[13px] pb-[46px] font-light text-2xl">
                Discover how we blend cutting-edge technology, creative strategies, and a <br className="md:block hidden" /> commitment to transform your vision into viral success.
            </p>
            <div className="grid grid-cols-2  gap-8">
                {
                    aboutUs_content.map((item, i) => <div key={i} className="px-4 py-7 bg-[#171717] drop-shadow-md shadow-inner rounded-[12px] ">
                        <div>
                            <img className="w-[68px]" src={item.icon} alt="icon" />
                        </div>
                        <div>
                            <h3 className="leading-[30.24px] py-2 text-2xl font-bold">
                                {item.title}
                            </h3>
                            <p className="text-xl font-light text-[#C3C3C3] leading-[25.2px]">
                                {item.desc}
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
