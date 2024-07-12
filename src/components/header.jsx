import logo from '../assets/logos/logo.png'


const Header = () => {
    return (
        <div className='sticky backdrop-blur-md  z-50 top-9 bg-white/10 w-[984px] mx-auto py-3 flex justify-center items-center rounded-full'>

            <ul className=' flex justify-center items-center  gap-x-20'>
                <li>
                    <p className='text-xl text-white'>Why Us?</p>
                </li>
                <li>
                    <p className='text-xl text-white'>Gallery</p>
                </li>
                <li>
                    <img className='max-w-[67px]' src={logo} alt='vfxion-logo' />
                </li>
                <li>
                    <p className='text-xl text-white'>Pricing</p>

                </li>
                <li>
                    <p className='text-xl text-white'>About Us</p>

                </li>
            </ul>
        </div>
    )
}

export default Header