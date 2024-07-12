import logo from '../assets/logos/logo.png'
import Menu from '../assets/icons/menu.svg'
import Close from '../assets/icons/close.svg'
import { useState } from 'react';



const Header = () => {
    const [Open, setOpen] = useState(false);

    return (
        <div className='sticky backdrop-blur-md left-4 z-50 top-4 md:top-9 bg-white/10 md:w-[984px] mx-auto py-3 px-4 flex justify-between md:justify-center items-center rounded-full'>
            <div className='md:hidden block'>
                <img className='max-w-[40px]' src={logo} alt='vfxion-logo' />

            </div>
            <div>
                <button className='md:hidden block' onClick={() => setOpen(!Open)}>
                    {
                        Open ? <Close /> : <Menu />
                    }
                </button>
            </div>
            <ul className={`${Open ? 'block' : "hidden"} md:flex  md:static  absolute md:bg-transparent bg-white/10  right-4  top-14 w-fit px-5 py-5 rounded-xl md:space-y-0 space-y-2  md:text-xl text-white text-sm flex md:flex-row flex-col justify-center  items-center  gap-x-20`}>
                <li>
                    <p className=''>Why Us?</p>
                </li>
                <li>
                    <p className=''>Gallery</p>
                </li>
                <li className='md:block hidden'>
                    <img className='max-w-[67px]' src={logo} alt='vfxion-logo' />
                </li>
                <li>
                    <p className=''>Pricing</p>

                </li>
                <li>
                    <p className=''>About Us</p>

                </li>
            </ul>


        </div>
    )
}

export default Header