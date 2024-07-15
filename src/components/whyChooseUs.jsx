/* eslint-disable react/no-unescaped-entities */
import coverImg from '../assets/expertise/IMG-VFXion.jpg'
const WhyChooseUs = () => {
    return (
        <div id="whychooseUs" className="pt-40 px-4 flex md:px-20 grid md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-20 pb-24">

            <div className="space-y-8">
                <h2 className="text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] font-bold">
                    How do we make you go <br className='md:block hidden' />  VIRAL with VFX / CGI ?!
                </h2>
                <p className="text-xl md:text-2xl leading-[28px] font-light">
                    At VFXion, we specialize in creating VFX/CGI videos <br className='md:block hidden' /> combined with a creative marketing approach. By  <br className='md:block hidden' />  integrating a meaningful story, we captivate and <br className='md:block hidden' />  differentiate the presentation of your product or <br className='md:block hidden' />  service, making the promotion seamless and engaging. <br className='md:block hidden' />  Elevate your brand's presence and experience the new <br className='md:block hidden' />  vision of fiction that drives viral success.
                </p>
            </div>
            <div className="md:order-last order-first ">
                <img src={coverImg} alt="" />
            </div>
        </div>
    )
}

export default WhyChooseUs