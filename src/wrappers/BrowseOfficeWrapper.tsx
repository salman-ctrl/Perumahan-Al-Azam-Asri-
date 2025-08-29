import { useEffect, useState } from 'react'
import type { Office } from '../types/type'
import axios from 'axios'
import OfficeCard from '../components/OfficeCard'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

const BrowseOfficeWrapper = () => {
    const [offices, setOffices] = useState<Office[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Limit display to 6 items
    const maxDisplayItems = 6
    const displayedOffices = offices.slice(0, maxDisplayItems)
    const hasMoreItems = offices.length > maxDisplayItems

    const API_KEY = import.meta.env.VITE_API_KEY
    console.log('api key:' + API_KEY)

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/offices', {
                headers: {
                    "X-API-KEY": API_KEY,
                },
            })
            .then((response) => {
                setOffices(response.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="w-full flex justify-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
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
            <div className="w-full px-4 sm:px-6 md:px-8 py-12">
                <p className="text-red-500 text-center text-sm sm:text-base">
                    Error dalam pengambilan data: {error}
                </p>
            </div>
        )
    }

    return (
        <div id='rumah' className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 mb-12 sm:mb-16 md:mb-20 lg:mb-24">

                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center max-w-4xl mx-auto px-4">
                        Temukan Hunian Impian Anda.
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Nyaman, Aman, dan Strategis
                    </h2>
                    <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Pilih dari berbagai pilihan hunian terbaik yang sesuai dengan kebutuhan dan gaya hidup Anda
                    </p>
                </div>

                {/* === Mobile (Swiper) === */}
                <div className="w-full sm:hidden">
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={1.2}
                        slidesOffsetBefore={16}
                        slidesOffsetAfter={16}
                        className="!overflow-visible"
                    >
                        {displayedOffices.map((office) => (
                            <SwiperSlide key={office.id} className="!w-fit min-w-[280px]">
                                <Link
                                    to={`/office/${office.slug}`}
                                    className="block w-full h-full"
                                >
                                    <OfficeCard office={office} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* View All Button for Mobile */}
                    {hasMoreItems && (
                        <div className="flex justify-center mt-6">
                            <Link
                                to="/semua-rumah"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                            >
                                Lihat Semua Hunian
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>

                {/* === Tablet & Desktop (Grid) === */}
                <div className="hidden sm:block w-full max-w-7xl">
                    {displayedOffices.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-[30px]">
                                {displayedOffices.map((office) => (
                                    <Link
                                        key={office.id}
                                        to={`/office/${office.slug}`}
                                        className="block w-full h-full hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                    >
                                        <OfficeCard office={office} />
                                    </Link>
                                ))}
                            </div>

                            {/* View All Button for Desktop */}
                            {hasMoreItems && (
                                <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
                                    <Link
                                        to="/semua-rumah"
                                        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        Lihat Semua Hunian ({offices.length})
                                        <svg
                                            className="ml-3 w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12 sm:py-16">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                                Belum Ada Hunian Tersedia
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-base">
                                Kami sedang menambahkan hunian baru. Silakan cek kembali nanti.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default BrowseOfficeWrapper