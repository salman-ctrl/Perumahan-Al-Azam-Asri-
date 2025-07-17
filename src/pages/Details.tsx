import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useParams } from 'react-router-dom'
import type { Office } from '../types/type'
import axios from 'axios'

const Details = () => {

    const { slug } = useParams<{ slug: string }>();
    const [office, setOffice] = useState<Office | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/office/${slug}`, {
            headers: {
                'X-API-KEY': "Qsqkj3kjnaso390293n923n",
            },
        })
            .then((response) => {
                setOffice(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    }, [slug]);

    if (loading) {
        return <div className="w-full flex justify-center">
            <div className="loading-wave">
                <div className="loading-bar" />
                <div className="loading-bar" />
                <div className="loading-bar" />
                <div className="loading-bar" />
            </div>
        </div>
    }

    if (error) {
        return <p>Error Loading :{error}</p>
    }

    const baseUrl = "http://127.0.0.1:8000/storage";

    return (
        <div>
            <Nav />
            <section className='-mb-[50px]'>
                <div className=''>
                    <Swiper
                        direction='horizontal'
                        spaceBetween={10}
                        slidesPerView='auto'
                        slidesOffsetAfter={10}
                        slidesOffsetBefore={10}
                    >
                        {office?.photos.map((photo) => (
                            <SwiperSlide key={photo.id} className='!w-fit' >
                                <div className='w-[700px] h-[500px] overflow-hidden'>
                                    <img src={`${baseUrl}/${photo.photo}`} alt="" className='w-full h-full object-cover' />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}
export default Details
