import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CityCard from '../components/CityCard'


const BrowCityWrapper = () => {
    return (
        <div>
            <div className='flex justify-between mx-40 mt-32 text-2xl font-bold mb-10'>
                <p className='text-4xl'>You can Choose Our Favorite Cities</p>
                <p className='border border-black px-5 py-1 rounded-full'>Explore All City</p>
            </div>
            <Swiper
                direction="horizontal"
                spaceBetween={30}
                slidesPerView="auto"
                slidesOffsetAfter={30}
                slidesOffsetBefore={30}
            >
                <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                    <CityCard />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default BrowCityWrapper
