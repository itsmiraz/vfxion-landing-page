import herobg from '../assets/hero/image 18.png'
import { Button } from './ui/button'


const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: 'cover', // ensures the image covers the entire div
            backgroundPosition: ' center top', // centers the image
            backgroundRepeat: 'no-repeat' // prevents the image from repeating
        }}
            className='h-screen z-10 w-full flex justify-center items-center'>

            <div className='text-center z-10'>
                <h1 className='text-[48px] font-bold'>
                    The New Vision for Fiction
                </h1>
                <p className='pb-[47px] text-2xl pt-6'>
                    Unleashing Viral Potential with Cutting-Edge Technology
                </p>
                <Button>Get A Quote</Button>
            </div>
        </div>
    )
}

export default Hero