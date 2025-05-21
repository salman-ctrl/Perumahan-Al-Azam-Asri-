import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
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
                setCity(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })

    }, [slug]);

    if (loading) {
        return <p>Loading..</p>
    }
    if (error) {
        return <p>Error Loading : {error}</p>
    }

    if (!city) {
        return <p>Category not Found</p>
    }

    return (
        <div className='bg-gray-100 min-h-screen'>
            <Nav />
            <div className='relative h-[70vh]  w-full  '>
                <img className='h-full w-full ml-[35vw]' src="\src\assets\images\backgrounds\banner.png" alt="" />
                <div className='flex flex-col rounded-3xl absolute top-1/2 left-72 -translate-x-0.5 -translate-y-1/2 px-10 gap-y-12 justify-between py-12 bg-white w-[35vw] h-80'>
                    <p className='text-5xl font-bold'>Great Office in <br /> <span className='text-blue-500'>Jakarta Pusat City</span> </p>
                    <p className='text-lg'>
                        Kantor yang tepat dapat memberikan impact pekerjaan <br />
                        menjadi lebih baik dan sehat dalam tumbuhkan karir
                    </p>
                </div>
            </div>
            <section className='flex  flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]'>
                <h1 className='text-4xl '>Browse Offices</h1>
                <div className='grid grid-cols-3 gap-[30px]' >
                    {city.officeSpaces.map((office) => (
                        <OfficeCard key={office.id} office={office} />
                    ))}
                </div>
            </section>
            <div className='h-[70vh]'>

            </div>
        </div>
    )
}
export default CityDetails;
