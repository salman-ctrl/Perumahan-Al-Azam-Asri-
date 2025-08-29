import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CityCard from '../components/CityCard'
import type { City } from '../types/type'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BrowCityWrapper = () => {

    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const API_BASE_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_API_KEY

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/cities`, {
                headers: {
                    "X-API-KEY": API_KEY,
                },
            })
            .then((response) => {
                console.log("API response:", response.data);
                setCities(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="w-full flex justify-center py-8 sm:py-12 md:py-16">
                <div className="loading-wave">
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 py-8">
                <p className="text-red-500 text-center text-sm sm:text-base">
                    Error Loading data: {error}
                </p>
            </div>
        )
    }

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 mb-6 sm:mb-8 md:mb-10 gap-4 lg:gap-0'>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-full lg:max-w-2xl'>
                    Temukan Perumahan Impian di Lokasi Pilihan
                </h2>
                <Link to={'/semua-rumah'} >
                    <button className='border border-black px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300 whitespace-nowrap self-start lg:self-auto'>
                        Lihat Semua Lokasi
                    </button>
                </Link>

            </div>

            {/* Swiper Section */}
            <div className="w-full overflow-hidden">
                <Swiper
                    direction="horizontal"
                    spaceBetween={15}
                    slidesPerView={1.2}
                    slidesOffsetAfter={16}
                    slidesOffsetBefore={16}
                    breakpoints={{
                        // Mobile (sm)
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                            slidesOffsetAfter: 24,
                            slidesOffsetBefore: 24,
                        },
                        // Tablet (md)
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 25,
                            slidesOffsetAfter: 32,
                            slidesOffsetBefore: 32,
                        },
                        // Large tablet (lg)
                        1024: {
                            slidesPerView: 2.8,
                            spaceBetween: 30,
                            slidesOffsetAfter: 48,
                            slidesOffsetBefore: 48,
                        },
                        // Desktop (xl)
                        1280: {
                            slidesPerView: 3.5,
                            spaceBetween: 30,
                            slidesOffsetAfter: 60,
                            slidesOffsetBefore: 60,
                        },
                        // Large desktop
                        1536: {
                            slidesPerView: "auto",
                            spaceBetween: 30,
                            slidesOffsetAfter: 30,
                            slidesOffsetBefore: 30,
                        }
                    }}
                    className="!overflow-visible"
                >
                    {cities.map((city) => (
                        <SwiperSlide
                            key={city.id}
                            className='!w-fit !h-auto min-w-[280px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[380px] first-of-type:2xl:pl-[calc((100%-1130px-60px)/2)] last-of-type:2xl:pr-[calc((100%-1130px-60px)/2)]'
                        >
                            <Link
                                to={`/city/${city.slug}`}
                                className="block w-full h-full"
                            >
                                <CityCard city={city} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BrowCityWrapper