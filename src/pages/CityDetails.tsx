import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link, useParams } from 'react-router-dom'
import type { City } from '../types/type'
import axios from 'axios'
import OfficeCard from '../components/OfficeCard'

const CityDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const [city, setCity] = useState<City | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/city/${slug}`, {
                headers: {
                    "X-API-KEY": "Qsqkj3kjnaso390293n923n",
                },
            })
            .then((response) => {
                console.log('Full API Response:', response);
                console.log('Response Data:', response.data);
                console.log('City Data:', response.data.data);

                setCity(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    }, [slug]);

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center min-h-screen">
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
            <div className="w-full flex justify-center items-center min-h-screen px-4">
                <p className="text-red-500 text-center">Error Loading: {error}</p>
            </div>
        )
    }

    if (!city) {
        return (
            <div className="w-full flex justify-center items-center min-h-screen px-4">
                <p className="text-gray-500 text-center">City not found</p>
            </div>
        )
    }

    const baseUrl = "http://127.0.0.1:8000/storage";

    return (
        <div className='bg-gray-100 min-h-screen overflow-x-hidden'>
            <Nav />

            {/* Hero Section - Responsive Layout */}
            <div className='relative w-full px-4 sm:px-6 lg:px-0'>
                {/* Desktop Layout (lg and above) */}
                <div className='hidden lg:block relative h-[70vh] w-full'>
                    <img
                        className='h-full w-auto ml-[35vw] rounded-bl-xl object-cover'
                        src={`${baseUrl}/${city.photo}`}
                        alt={`${city.name} city`}
                    />
                    <div className='flex flex-col rounded-3xl absolute top-1/2 left-72 -translate-x-0.5 -translate-y-1/2 px-10 gap-y-12 justify-between py-12 bg-white w-[35vw] h-auto shadow-lg'>
                        <h1 className='text-5xl font-bold leading-tight'>
                            Great Office in <br />
                            <span className='text-blue-500'>{city.name} City</span>
                        </h1>
                        <p className='text-lg text-gray-600'>
                            {city.officeSpaces.map(office => office.about).join('. ')}
                        </p>
                    </div>
                </div>

                {/* Tablet Layout (md to lg) */}
                <div className='hidden md:block lg:hidden relative h-[60vh] w-full'>
                    <img
                        className='h-full w-full object-cover rounded-lg'
                        src={`${baseUrl}/${city.photo}`}
                        alt={`${city.name} city`}
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg'></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6'>
                        <h1 className='text-4xl font-bold mb-6 leading-tight'>
                            Great Office in <br />
                            <span className='text-blue-400'>{city.name} City</span>
                        </h1>
                        <p className='text-lg max-w-2xl mx-auto'>
                            {city.officeSpaces.map(office => office.about).join('. ')}
                        </p>
                    </div>
                </div>

                {/* Mobile Layout (below md) */}
                <div className='block md:hidden w-full'>
                    <div className='relative h-[50vh] w-full mb-6'>
                        <img
                            className='h-full w-full object-cover rounded-lg'
                            src={`${baseUrl}/${city.photo}`}
                            alt={`${city.name} city`}
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg'></div>
                    </div>

                    <div className='bg-white rounded-2xl p-6 mx-4 -mt-16 relative z-10 shadow-lg'>
                        <h1 className='text-3xl sm:text-4xl font-bold mb-4 leading-tight text-center'>
                            Great Office in <br />
                            <span className='text-blue-500'>{city.name} City</span>
                        </h1>
                        <p className='text-base sm:text-lg text-gray-600 text-center'>
                            {city.officeSpaces.map(office => office.about).join('. ')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Browse Offices Section */}
            <section className='flex flex-col gap-6 sm:gap-8 w-full max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-[70px] mb-16 sm:mb-24 lg:mb-[120px] px-4 sm:px-6 lg:px-8'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left'>
                    Browse Offices
                </h2>

                {/* Responsive Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[30px]'>
                    {city.officeSpaces.map((office) => (
                        <Link
                            key={office.id}
                            to={`/office/${office.slug}`}
                            className='transform transition-transform duration-200 hover:scale-105'
                        >
                            <OfficeCard office={{ ...office, city }} />
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {city.officeSpaces.length === 0 && (
                    <div className='text-center py-16'>
                        <p className='text-gray-500 text-lg'>No offices available in {city.name} at the moment.</p>
                    </div>
                )}
            </section>

            {/* Bottom Spacing - Responsive */}
            <div className='h-16 sm:h-24 lg:h-[70vh]'></div>
        </div>
    )
}

export default CityDetails;