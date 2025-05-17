import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CityCard from '../components/CityCard'
import type { City } from '../types/type'
import axios from 'axios'




const BrowCityWrapper = () => {

    const [cities, setCities] = useState<City[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/cities', {
                headers: {
                    "X-API-KEY": "Qsqkj3kjnaso390293n923n"
                },
            })
            .then((response) => {
                setCities(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }



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
                {cities.map((city) => (
                    <SwiperSlide key={city.id} className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <CityCard />
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}

export default BrowCityWrapper
