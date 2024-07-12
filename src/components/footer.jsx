import logo from '../assets/logos/logo.png'
import Facebook from '../assets/icons/facebook.svg'
import Insta from '../assets/icons/insta.svg'
import TikTok from '../assets/icons/tiktok.svg'

const Footer = () => {
    return (
        <div className="bg-[##040404] border-[#222222] border flex flex-col justify-center items-center pt-[49px] pb-[70px]">

            <div>
                <img src={logo} alt='logo' className='w-[105px]' />
            </div>
            <div className='flex pt-[41px] pb-[38px] gap-x-4 items-center'>
                <Insta />
                <TikTok />
                <Facebook />
            </div>
            <div>
                <p className='text-2xl font-light'>VFXION Copyright 2024</p>
            </div>

        </div>
    )
}

export default Footer