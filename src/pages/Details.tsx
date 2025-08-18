import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useParams, Link } from 'react-router-dom'
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
                <div>
                    <Swiper
                        direction='horizontal'
                        spaceBetween={10}
                        slidesPerView='auto'
                        slidesOffsetAfter={10}
                        slidesOffsetBefore={10}
                    >
                        {office?.photos.map((photo) => (
                            <SwiperSlide key={photo.id} className='!w-fit'>
                                <div className='w-full sm:w-[500px] md:w-[700px] h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden'>
                                    <img
                                        src={`${baseUrl}/${photo.photo}`}
                                        alt=""
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section
                id="Details"
                className="relative flex flex-col lg:flex-row max-w-[1130px] mx-auto gap-[30px] mb-20 z-10 px-4"
            >
                {/* Kiri - Detail Office */}
                <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[20px] sm:p-[30px] gap-[30px] bg-white">
                    <p className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                        Populer
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="font-extrabold text-[24px] sm:text-[28px] md:text-[32px] leading-tight">
                                {office?.name}
                            </h1>
                            <div className="flex items-center gap-[6px] mt-[10px]">
                                <img
                                    src="/assets/images/icons/location.svg"
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    alt="icon"
                                />
                                {office?.city.name}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <div className="flex items-center gap-1">
                                {...Array(4).fill().map((_, i) => (
                                    <img
                                        key={i}
                                        src="/assets/images/icons/Star 1.svg"
                                        className="w-5 h-5"
                                        alt="star"
                                    />
                                ))}
                                <img
                                    src="/assets/images/icons/Star 5.svg"
                                    className="w-5 h-5"
                                    alt="star"
                                />
                            </div>
                            <p className="font-semibold text-right">4.5/5 (19,384)</p>
                        </div>
                    </div>

                    <p className="leading-[26px] sm:leading-[30px]">{office?.about}</p>
                    <hr className="border-[#F6F5FD]" />

                    <h2 className="font-bold text-lg sm:text-xl">Fasilitas yang Didapat</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[20px] sm:gap-y-[30px]">
                        {/* Contoh Fitur */}
                        <div className="flex items-center gap-4">
                            <img src="/assets/images/icons/security-user.svg" className="w-[30px] h-[30px]" alt="icon" />
                            <div>
                                <p className="font-bold text-base sm:text-lg">Privasi</p>
                                <p className="text-sm">Untuk Anda</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/assets/images/icons/cup.svg" className="w-[34px] h-[34px]" alt="icon" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-bold text-lg leading-[24px]">Taman Bersama</p>
                                <p className="text-sm leading-[21px]">Area Santai & Bermain</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/assets/images/icons/home-trend-up.svg" className="w-[34px] h-[34px]" alt="icon" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-bold text-lg leading-[24px]">Desain Modern</p>
                                <p className="text-sm leading-[21px]">Elegan & Berkelas</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/assets/images/icons/coffee.svg" className="w-[34px] h-[34px]" alt="icon" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-bold text-lg leading-[24px]">Aman Dari Banjir</p>
                                <p className="text-sm leading-[21px]">Lokasi Strategis dan aman</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/assets/images/icons/3dcube.svg" className="w-[34px] h-[34px]" alt="icon" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-bold text-lg leading-[24px]">Ruang Luas</p>
                                <p className="text-sm leading-[21px]">Nyaman & Fungsional</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/assets/images/icons/group.svg" className="w-[34px] h-[34px]" alt="icon" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-bold text-lg leading-[24px]">Akses Strategis</p>
                                <p className="text-sm leading-[21px]">Dekat Pusat Kota</p>
                            </div>
                        </div>
                        {/* Lanjutkan fitur lainnya sama seperti di aslinya */}
                    </div>

                    <hr className="border-[#F6F5FD]" />
                    <div className="flex flex-col gap-[6px]">
                        <h2 className="font-bold">Alamat Perumahan</h2>
                        <p>{office?.name}</p>
                        <p>{office?.city.name}</p>
                    </div>

                    <div className="overflow-hidden w-full h-[200px] sm:h-[280px] rounded-lg">
                        <iframe
                            className="h-full w-full border-0"
                            frameBorder={0}
                            src={`https://www.google.com/maps/embed/v1/place?q=${office?.city.slug},&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                        />
                    </div>
                </div>

                {/* Kanan - Sidebar */}
                <div className="w-full lg:w-[392px] flex flex-col shrink-0 gap-[30px]">
                    {/* Harga */}
                    <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[20px] sm:p-[30px] gap-[30px] bg-white">
                        <div>
                            <p className='font-bold text-xl'>Dapatkan dengan Harga <br /> Terbaik dari Kami!</p>
                            <p className="font-extrabold text-[24px] sm:text-[32px] text-[#0D903A]">
                                Rp {office?.price.toLocaleString('id-ID')}
                            </p>
                        </div>
                        <hr className="border-[#F6F5FD]" />
                        <div className="flex flex-col gap-5">
                            {office?.benefits.map((benefit) => (
                                <div key={benefit.id} className="flex items-center gap-3">
                                    <img src="/assets/images/icons/verify.svg" className="w-[26px] h-[26px]" alt="icon" />
                                    <p className="font-semibold">{benefit.name}</p>
                                </div>
                            ))}
                        </div>
                        <hr className="border-[#F6F5FD]" />
                        <div className="flex flex-col gap-[14px]">
                            <Link to={`/office/${slug}/book`}>
                                <button className='flex items-center justify-center w-full rounded-full p-[14px_20px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] hover:bg-gray-300 hover:text-black transition-all duration-700'>
                                    <img src="/assets/images/icons/slider-horizontal-white.svg" className="w-6 h-6" alt="icon" />
                                    <span>Pesan Sekarang</span>
                                </button>
                            </Link>
                            <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[14px_20px] gap-3 bg-white font-semibold hover:bg-gray-100">
                                <img src="/assets/images/icons/save-add.svg" className="w-6 h-6" alt="icon" />
                                <span>Simpan untuk Nanti</span>
                            </button>
                        </div>
                    </div>

                    {/* Kontak Sales */}
                    <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[20px] sm:p-[30px] gap-[20px] bg-white">
                        <h2 className="font-bold">Hubungi Sales Kami</h2>

                        <div className="flex flex-col gap-[30px]">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-4">
                                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                        <img
                                            src="/assets/images/photos/photo-1.png"
                                            className="w-full h-full object-cover"
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold">Masayoshi</p>
                                        <p className="text-sm leading-[21px]">Sales Manager</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a href="#">
                                        <img
                                            src="/assets/images/icons/call-green.svg"
                                            className="w-10 h-10"
                                            alt="icon"
                                        />
                                    </a>
                                    <a href="#">
                                        <img
                                            src="/assets/images/icons/chat-green.svg"
                                            className="w-10 h-10"
                                            alt="icon"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-4">
                                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                        <img
                                            src="/assets/images/photos/photo-2.png"
                                            className="w-full h-full object-cover"
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold">Fuji Ovina</p>
                                        <p className="text-sm leading-[21px]">Sales Manager</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a href="#">
                                        <img
                                            src="/assets/images/icons/call-green.svg"
                                            className="w-10 h-10"
                                            alt="icon"
                                        />
                                    </a>
                                    <a href="#">
                                        <img
                                            src="/assets/images/icons/chat-green.svg"
                                            className="w-10 h-10"
                                            alt="icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}
export default Details

