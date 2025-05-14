import React from 'react'
import Crown from '../../assets/images/icons/crown-white.svg'
import Banner from '../../assets/images/backgrounds/banner.png'
import { PlayIcon, MagnifyingGlassIcon, MapPinIcon, StarIcon, WifiIcon, UserIcon, ClockIcon } from '@heroicons/react/16/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
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
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-1.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Jakarta Pusat
                                    </h3>
                                    <p className="text-white">189 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-2.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        New York
                                    </h3>
                                    <p className="text-white">12 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-3.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Bogor
                                    </h3>
                                    <p className="text-white">21 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-4.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Bali
                                    </h3>
                                    <p className="text-white">9 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-5.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Bandung
                                    </h3>
                                    <p className="text-white">18 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-6.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Yogyakarta
                                    </h3>
                                    <p className="text-white">12 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-7.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Bandung
                                    </h3>
                                    <p className="text-white">89 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]'>
                        <a href="#">
                            <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                                {/* Gambar di belakang (diposisikan absolute) */}
                                <img
                                    className="absolute w-full h-full object-cover z-0"
                                    src="src\assets\images\thumbnails\thumbnails-2.png"
                                    alt="Jakarta Pusat"
                                />

                                {/* Gradient overlay yang transparan */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>

                                {/* Konten teks di atas gambar */}
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Roma
                                    </h3>
                                    <p className="text-white">189 Offices</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section>
                <div className='flex items-center justify-center w-[1015px] mx-auto gap-[100px] mt-[100px]'>
                    <p className='font-bold text-[32px] leading-[48px] text-nowrap'>We Might Good <br /> For Your Business</p>

                    <div className="grid grid-cols-2 gap-[30px]">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                                <img
                                    src="src\assets\images\icons\security-user.svg"
                                    className="w-[34px] h-[34px]"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-bold text-lg leading-[27px]">Privacy-First Design</p>
                                <p className="text-sm leading-[24px]">
                                    Lorem available without even higher tax that cost much
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                                <img
                                    src="src\assets\images\icons\group.svg"
                                    className="w-[34px] h-[34px]"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-bold text-lg leading-[27px]">Easy Move Access</p>
                                <p className="text-sm leading-[24px]">
                                    Lorem available without even higher tax that cost much
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                                <img
                                    src="src\assets\images\icons\3dcube.svg"
                                    className="w-[34px] h-[34px]"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-bold text-lg leading-[27px]">Flexibility Spaces</p>
                                <p className="text-sm leading-[24px]">
                                    Lorem available without even higher tax that cost much
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                                <img
                                    src="src\assets\images\icons\cup.svg"
                                    className="w-[34px] h-[34px]"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-bold text-lg leading-[27px]">Top-Rated Office</p>
                                <p className="text-sm leading-[24px]">
                                    Lorem available without even higher tax that cost much
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                                <img
                                    src="src\assets\images\icons\coffee.svg"
                                    className="w-[34px] h-[34px]"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-bold text-lg leading-[27px]">Extra Snacks Available</p>
                                <p className="text-sm leading-[24px]">
                                    Lorem available without even higher tax that cost much
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                                <img
                                    src="src\assets\images\icons\home-trend-up.svg"
                                    className="w-[34px] h-[34px]"
                                    alt="icon"
                                />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-bold text-lg leading-[27px]">Sustain for Business</p>
                                <p className="text-sm leading-[24px]">
                                    Lorem available without even higher tax that cost much
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className=' '>
                <div className='flex flex-col items-center mt-32'>
                    <p className='text-3xl text-center '>Browse Our Fresh Space. <br /> For Your Better Productivity</p>
                    <div className='mt-20'>
                        <div className='flex flex-col rounded-[20px] border h-[700px] border-[#E0DEF7] bg-white overflow-hidden '>
                            <div className='thumbnail-container relative w-[350px] h-[200px]'>
                                <p className='absolute'>Popular</p>
                                <img className='w-full object-cover h-full' src="src\assets\images\thumbnails\thumbnails-1.png" alt="" />
                            </div>
                            <h1 className='line-clamp-2'>Masayori Future Space</h1>
                            <div className='space-y-10'>
                                <div className='flex justify-between px-5 items-center'>
                                    <p className='leading-[36px]'>Rp 18.560.000</p>
                                    <div className='flex items-center gap-2'>
                                        <p>Days 20</p>
                                        <ClockIcon className='h-7 w-7 text-blue-500' />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className='flex justify-between px-5 items-center'>
                                    <div className='flex items-center gap-2 '>
                                        <MapPinIcon className='h-7 w-7 text-blue-500' />
                                        <p>Jakarta Pusat</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>4.5/5</p>
                                        <StarIcon className='h-7 w-7 text-amber-300' />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className='flex items-center justify-between px-5'>
                                    <div className='flex items-center gap-2'>
                                        <WifiIcon className='h-7 w-7 text-blue-500' />
                                        <p>Fast-Connection</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <UserIcon className='h-7 w-7 text-blue-500' />
                                        <p>Secure 100%</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='h-96'>

                </div>
            </section>

        </>
    )
}
export default Hero;
