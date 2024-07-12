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
            <ul className={`${Open ? 'block' : "hidden"}  bg-white/10  z-20 md:flex  md:static  absolute md:bg-transparent  right-4  top-14 w-fit px-5 py-5 rounded-xl md:space-y-0 space-y-2  md:text-xl text-white text-sm flex md:flex-row flex-col justify-center  items-center  gap-x-20`}>
                <li>
                    <a href="#whychooseUs">

                        <p className=''>Why Us?</p>
                    </a>
                </li>
                <li>
                    <a href="#gallery">

                        <p className=''>Gallery</p>
                    </a>

                </li>
                <li className='md:block hidden'>
                    <img className='max-w-[67px]' src={logo} alt='vfxion-logo' />
                </li>
                <li>
                    <a href="#pricing">

                        <p className=''>Pricing</p>
                    </a>


                </li>
                <li>
                    <a href="#aboutUs">

                        <p className=''>About Us</p>
                    </a>


                </li>
            </ul>


        </div>
    )
}

export default Header