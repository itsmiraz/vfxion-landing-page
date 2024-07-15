import image1 from '../assets/gallery/Frame 5.jpg'
import image2 from '../assets/gallery/Frame 8.jpg'
import image3 from '../assets/gallery/Frame 6.jpg'
import image4 from '../assets/gallery/Frame 7.jpg'
import { useEffect, useRef } from 'react'

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

    const tickerRef = useRef(null);
    const x = useRef(0);

    useEffect(() => {
        const width = tickerRef.current?.scrollWidth
            ? tickerRef.current.scrollWidth / 2
            : 0;
        const runTicker = () => {
            if (x.current <= -width) {
                x.current = 0;
            }
            x.current -= 0.5; // Speed of the ticker
            if (tickerRef.current) {
                tickerRef.current.style.transform = `translateX(${x.current}px)`;
            }
            requestAnimationFrame(runTicker);
        };
        runTicker();
    }, []);
    return (
        <div id='gallery' className="pt-12 text-center pb-20">
            <div className='px-4'>
                <h2 className='text-[32px] md:text-[40px] font-semibold'>
                    Our Gallery
                </h2>
                <p className='text-xl md:text-2xl pt-6'>
                    Explore our portfolio of visually stunning VFX and CGI creations that showcase our commitment <br className='md:block hidden' /> to innovation and excellence.
                </p>
            </div>

            <div className="overflow-hidden relative my-20 whitespace-nowrap">
                <div className='w-[271px] bg-gradient-to-r from-[#000000] to-[#000000]/0 left-0 absolute top-0 h-full z-40'></div>
                <div className="flex gap-x-8 " ref={tickerRef}>
                    {[...slides, ...slides].map((image, index) => (
                        <div
                            key={index}
                            className="relative rounded-[16px] overflow-hidden h-[460px] min-w-[292px] bg-slate-400 flex justify-center items-center mx-1"
                        >
                            <img
                                src={image}
                                alt={`Image ${index}`}
                            // layout="fill"
                            // objectFit="cover"
                            />
                        </div>
                    ))}
                </div>
                <div className='w-[271px] bg-gradient-to-r from-[#000000]/0 to-[#000000] right-0 absolute top-0 h-full z-40'></div>

            </div>

            {/* <div className="relative z-30 mb-12 mt-20 overflow-hidden whitespace-nowrap w-full">
                <div className='w-[271px] bg-gradient-to-r from-[#000000] to-[#000000]/0 left-0 absolute top-0 h-full z-40'></div>
                <div className='md:block hidden'>
                    <motion.div
                        className="flex gap-x-8 items-center"
                        animate={{ x: ['0%', '-50%', '0%'] }}
                        style={{ width: '200%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {slides.map((item, i) => (
                            <div key={i} className="w-[120px] rounded-[16px] overflow-hidden md:w-[292px]">
                                <img src={item} alt="partner" className="w-[120px] md:w-[292px]" />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className='md:hidden block'>
                    <motion.div
                        className="flex gap-x-8 items-center"
                        animate={{ x: ['0%', '-50%', '0%'] }}
                        style={{ width: '400%' }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                    >
                        {slides.map((item, i) => (
                            <div key={i} className="w-[220px] rounded-[16px] overflow-hidden">
                                <img src={item} alt="partner" className="w-[220px]" />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className='w-[271px] bg-gradient-to-r from-[#000000]/0 to-[#000000] right-0 absolute top-0 h-full z-40'></div>
            </div> */}
        </div>
    )
}

export default Gallery
