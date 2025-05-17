import React from 'react'
import Crown from '../../assets/images/icons/crown-white.svg'
import Banner from '../../assets/images/backgrounds/banner.png'
import { PlayIcon, MagnifyingGlassIcon, MapPinIcon, StarIcon, WifiIcon, UserIcon, ClockIcon } from '@heroicons/react/16/solid'
import CityCard from '../CityCard'
import BrowCityWrapper from '../../wrappers/BrowCityWrapper'
import FeatureSection from '../FeatureSection'
import BrowseOfficeWrapper from '../../wrappers/BrowseOfficeWrapper'
const Hero = () => {
    return (
        <>
            <section>
                <div className='relative h-[80vh] w-full'>
                    <div className='w-[35vw] h-[60vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative bg-white overflow-hidden ml-5 px-10 py-10 rounded-2xl'>
                        <div className='bg-black text-white flex items-center gap-5 px-5 py-2 rounded-full mr-16'>
                            <img src={Crown} alt="" className='w-7 h-7 ' />
                            <span className='font-bold'>We've won top productifity 500 fortunes</span>
                        </div>
                        <p className='font-extrabold text-[40px] mt-20'>All Great Offices. <br /> Grow Your Bussiness. </p>
                        <p className='mt-20 text-lg'>Kantor yang tepat dapat memberikan impact pekerjaan <br /> menjadi lebih baik dan sehat dalam tumbuhkan karir.</p>
                        <div className='flex gap-20 mt-10 font-extrabold text-lg'>
                            <a href="#"><div className='bg-blue-500  text-white flex items-center gap-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:border-1 px-5 py-1 transition-all duration-300 rounded-full'>
                                <MagnifyingGlassIcon className='h-12 w-12' />
                                <span>Explor Now</span>
                            </div>
                            </a>
                            <a href="#">
                                <div className='bg-blue-500  text-white flex items-center gap-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:border-1 px-5 py-1 transition-all duration-300 rounded-full'>
                                    <PlayIcon className='h-12 w-12' />
                                    <span>Watch Story</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 h-full w-full -translate-y-1/2 overflow-hidden'>
                        <img src={Banner} className='w-full h-full object-cover' alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-blue-500 h-72 flex items-center flex-col gap-y-12 justify-center'>
                    <div className='flex gap-20'>
                        <img src="/src/assets/images/logos/TESLA.svg" alt="logo" />
                        <img src="\src\assets\images\logos\Binance logo.svg" alt="clients logo" />
                        <img src="src\assets\images\logos\Facebook 7.svg" alt="clients logo" />
                        <img src="src/assets/images/logos/Microsoft 6.svg" alt="clients logo" />
                        <img src="src/assets/images/logos/Libra 2.svg" alt="clients logo" />
                    </div>
                    <div className="flex justify-center gap-[50px]">
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">Comfortable Space</p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">580M+</p>
                        </div>
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">Startups Succeed</p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">98%</p>
                        </div>
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">Countries</p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">90+</p>
                        </div>
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">Supportive Events</p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">139M+</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <BrowCityWrapper />
            </section>
            <section>
                <FeatureSection />
            </section>
            <section className=' '>
                <BrowseOfficeWrapper />
            </section>
            <section>
                <div className='h-96'>
                </div>
            </section>
        </>
    )
}
export default Hero;