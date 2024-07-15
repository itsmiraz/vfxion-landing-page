import logo from '../assets/logos/logo.png'
import Insta from '../assets/icons/insta.svg'
import TikTok from '../assets/icons/tiktok.svg'

const Footer = () => {
    return (
        <div className="bg-[##040404]  flex flex-col justify-center items-center pt-[49px] pb-[70px]">

            <div>
                <img src={logo} alt='logo' className='w-[105px]' />
            </div>
            <div className='flex pt-[41px] pb-[38px] gap-x-4 items-center'>
                <a href="https://www.instagram.com/vfxion">   <Insta /></a>

                <a href="https://www.tiktok.com/@vfxion?_t=8nzvbj8YKXd&_r=1">
                    <TikTok />
                </a>
            </div>
            <div>
                <p className='text-2xl font-light'>VFXION Copyright 2024</p>
            </div>

        </div>
    )
}

export default Footer