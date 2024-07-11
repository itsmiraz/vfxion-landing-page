import image1 from '../assets/gallery/Frame 5.jpg'
import image2 from '../assets/gallery/Frame 8.jpg'
import image3 from '../assets/gallery/Frame 6.jpg'
import image4 from '../assets/gallery/Frame 7.jpg'
import { motion } from 'framer-motion'


const Gallery = () => {


    const slides = [
        image1,
        image3,
        image4,
        image2,
        image1,
        image3,
        image4,
        image2,
    ]

    return (
        <div className="pt-12 text-center pb-20">
            <h2 className='text-[40px] font-semibold'>
                Our Gallery
            </h2>
            <p className='text-2xl pt-6'>
                Explore our portfolio of visually stunning VFX and CGI creations that showcase our commitment <br className='md:block hidden' /> to innovation and excellence.
            </p>


            <div className="relative  z-30 mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                <div className='w-[271px] bg-gradient-to-r from-[#000000] to-[#000000]/0  left-0 absolute top-0 h-full z-40'>

                </div>
                <motion.div
                    className="flex gap-x-8 items-center"
                    animate={{ x: ['0%', '-50%'] }}
                    style={{ width: '240%' }}
                    transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                >
                    {slides.map((item, i) => (
                        <div key={i} className="w-[120px] rounded-[16px] overflow-hidden md:w-[292px]">
                            <img src={item} alt="partner" className="w-[120px] md:w-[292px]" />
                        </div>
                    ))}

                </motion.div>
                <div className='w-[271px] bg-gradient-to-r from-[#000000]/0 to-[#000000] right-0 absolute top-0 h-full z-40'>

                </div>
            </div>
        </div>
    )
}

export default Gallery