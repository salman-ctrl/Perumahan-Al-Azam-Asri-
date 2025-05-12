import React from 'react'
import Crown from '../../assets/images/icons/crown-white.svg'
import Banner from '../../assets/images/backgrounds/banner.png'
import { PlayIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
const Hero = () => {
    return (
        <div className='relative h-[80vh] w-screen'>
            <div className='w-[35vw] h-[60vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative bg-white overflow-hidden ml-5 px-10 py-10 rounded-2xl'>
                <div className='bg-black w-96 text-white flex items-center gap-5 px-5 py-2 rounded-full '>
                    <img src={Crown} alt="" className='w-8 h-8 ' />
                    <span>We've won top productifity 500 fortunes</span>
                </div>
                <p className='font-extrabold text-[40px] mt-20'>All Great Offices. <br /> Grow Your Bussiness. </p>
                <p className='mt-20'>Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik dan sehat dalam tumbuhkan karir</p>
                <div className='flex gap-20 mt-10'>
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
    )
}
export default Hero;
