import React from 'react'
import { PlayIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import BrowCityWrapper from '../../wrappers/BrowCityWrapper'
import FeatureSection from '../FeatureSection'
import BrowseOfficeWrapper from '../../wrappers/BrowseOfficeWrapper'

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <section>
                <div className="relative h-auto md:h-[80vh] w-full flex items-center justify-center px-4 md:px-0">
                    {/* Content Box */}
                    <div className="relative bg-white overflow-hidden rounded-2xl my-10 max-w-2xl md:w-[35vw] p-6 md:p-10 z-10">
                        {/* Top Badge */}
                        <div className="bg-black text-white flex items-center gap-3 px-4 py-2 rounded-full text-sm md:text-base">
                            <img src="/assets/images/icons/crown-white.svg" alt="" className="w-5 h-5 md:w-7 md:h-7" />
                            <span className="font-bold text-center">
                                Kami telah meraih penghargaan produktivitas terbaik
                            </span>
                        </div>

                        {/* Title */}
                        <p className="font-extrabold text-2xl md:text-[40px] mt-8 md:mt-20 leading-snug">
                            Hunian Terbaik. <br /> Tumbuhkan Masa Depan Anda.
                        </p>

                        {/* Description */}
                        <p className="mt-6 md:mt-10 text-sm md:text-lg text-gray-700">
                            Hunian yang tepat dapat memberikan kenyamanan dan meningkatkan
                            kualitas hidup untuk keluarga Anda.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10 font-extrabold text-sm md:text-lg">
                            <a href="#">
                                <div className="bg-blue-500 text-white flex items-center gap-2 hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500 px-4 md:px-5 py-2 rounded-full transition-all duration-300">
                                    <MagnifyingGlassIcon className="h-6 w-6 md:h-12 md:w-12" />
                                    <span>Jelajahi</span>
                                </div>
                            </a>
                            <a href="#">
                                <div className="bg-blue-500 text-white flex items-center gap-2 hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500 px-4 md:px-5 py-2 rounded-full transition-all duration-300">
                                    <PlayIcon className="h-6 w-6 md:h-12 md:w-12" />
                                    <span>Lihat Video</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10">
                        <img
                            src="/assets/images/backgrounds/banner.png"
                            className="w-full h-full object-cover"
                            alt="Banner"
                        />
                    </div>
                </div>
            </section>

            {/* Partner Logos & Stats */}
            <section>
                <div className="bg-blue-500 py-10 md:py-16 flex flex-col gap-10">
                    {/* Partner Logos */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-4">
                        <img src="/assets/images/logos/TESLA.svg" alt="logo" className="h-8 md:h-10" />
                        <img src="/assets/images/logos/Binance logo.svg" alt="logo" className="h-8 md:h-10" />
                        <img src="/assets/images/logos/Facebook 7.svg" alt="logo" className="h-8 md:h-10" />
                        <img src="/assets/images/logos/Microsoft 6.svg" alt="logo" className="h-8 md:h-10" />
                        <img src="/assets/images/logos/Libra 2.svg" alt="logo" className="h-8 md:h-10" />
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-20 text-center">
                        <div>
                            <p className="text-lg md:text-xl text-[#F7F7FD]">Kepuasan Pelanggan</p>
                            <p className="font-bold text-2xl md:text-[38px] text-white">98%</p>
                        </div>
                        <div>
                            <p className="text-lg md:text-xl text-[#F7F7FD]">Kepercayaan Pelanggan</p>
                            <p className="font-bold text-2xl md:text-[38px] text-white">100%</p>
                        </div>
                        <div>
                            <p className="text-lg md:text-xl text-[#F7F7FD]">Jumlah Pelanggan</p>
                            <p className="font-bold text-2xl md:text-[38px] text-white">13+</p>
                        </div>
                        <div>
                            <p className="text-lg md:text-xl text-[#F7F7FD]">Fasilitas Mewah</p>
                            <p className="font-bold text-2xl md:text-[38px] text-white">Premium</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* City List */}
            <section>
                <BrowCityWrapper />
            </section>

            {/* Features */}
            <section>
                <FeatureSection />
            </section>

            {/* Offices */}
            <section>
                <BrowseOfficeWrapper />
            </section>

            {/* Extra Space */}
            <section className="h-20 md:h-96"></section>
        </>
    )
}

export default Hero
