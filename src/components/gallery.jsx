
import { useEffect, useRef } from 'react'
import video2 from '../assets/gallery/Kahf.mp4'
import video6 from '../assets/gallery/Ketch.video.mp4'
import video3 from '../assets/gallery/Orange Julep.mp4'
import video4 from '../assets/gallery/RBC_final.mp4'
import video5 from '../assets/gallery/Yoko Luna X F1.mp4'


const Gallery = () => {


    const slides = [
        video2,
        video3,
        video4,
        video5,
        video6,
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
                <div className='w-[271px]  md:block hidden bg-gradient-to-r from-[#000000] to-[#000000]/0 left-0 absolute top-0 h-full z-40'></div>
                <div className="flex gap-x-8 " ref={tickerRef}>
                    {[...slides, ...slides].map((video, index) => (
                        <div
                            key={index}
                            className="relative rounded-[16px] overflow-hidden h-[460px] min-w-[292px] bg-slate-400 flex justify-center items-center mx-1"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={video} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>

                        </div>
                    ))}
                </div>
                <div className='w-[271px] md:block hidden  bg-gradient-to-r from-[#000000]/0 to-[#000000] right-0 absolute top-0 h-full z-40'></div>

            </div>


        </div>
    )
}

export default Gallery
