import { Button } from './ui/button'
import bgVideo from '../assets/hero/bg-vidoe.mp4'

const Hero = () => {
    return (
        <div className='relative h-screen w-full flex justify-center items-center overflow-hidden'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute top-0  left-0 w-full h-full object-cover -z-1'
            >
                <source src={bgVideo} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='text-center z-10'>
                <h1 className='text-[48px] font-bold'>
                    The New Vision for Fiction
                </h1>
                <p className='pb-[47px] text-2xl pt-6'>
                    Unleashing Viral Potential with Cutting-Edge  <br className='md:block hidden' /> Technology
                </p>
                <Button>Get A Quote</Button>
            </div>
        </div>
    )
}

export default Hero