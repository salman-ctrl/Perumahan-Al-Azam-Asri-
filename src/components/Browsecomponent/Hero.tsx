import { PlayIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import BrowCityWrapper from '../../wrappers/BrowCityWrapper'
import FeatureSection from '../FeatureSection'
import BrowseOfficeWrapper from '../../wrappers/BrowseOfficeWrapper'
import Footer from '../Footer'
import TestimonialSection from '../TestimonialSection'

const Hero = () => {
    return (
        <>
            <section className="w-full">
                <div className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] w-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="relative bg-white/95 backdrop-blur-sm overflow-hidden rounded-xl sm:rounded-2xl my-4 sm:my-6 md:my-8 lg:my-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 z-10 shadow-xl">
                        <div className="bg-gradient-to-r from-gray-900 to-black text-white flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base">
                            <img
                                src="/assets/images/icons/crown-white.svg"
                                alt="Penghargaan developer terbaik Padang"
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0"
                            />
                            <span className="font-bold text-center leading-tight">
                                <span className="hidden sm:inline">Developer Perumahan Terpercaya #1 di Padang</span>
                                <span className="sm:hidden">Developer #1 Padang</span>
                            </span>
                        </div>

                        <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 leading-tight sm:leading-snug">
                            <span className="block mb-1 sm:mb-2">Jual Rumah di Padang</span>
                            <span className="text-blue-500 block">
                                <span className="hidden sm:inline">Perumahan Premium Sumatra Barat</span>
                                <span className="sm:hidden">Perumahan Premium</span>
                            </span>
                        </h1>

                        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 space-y-2 sm:space-y-0">
                            <p className="leading-relaxed">
                                Temukan <strong>rumah dijual di Padang</strong> dengan kualitas terbaik.
                            </p>
                            <p className="leading-relaxed hidden sm:block">
                                Kompleks hunian eksklusif dan <strong>perumahan strategis di Kota Padang</strong> yang memberikan kenyamanan maksimal untuk keluarga Anda.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:flex-col md:gap-3 mt-6 sm:mt-8 md:mt-10 font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                            <a href="#perumahan-padang" className="flex-1 sm:flex-none">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center sm:justify-start gap-2 sm:gap-3 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg px-4 sm:px-5 md:px-6 py-3 sm:py-2.5 rounded-full transition-all duration-300 transform hover:scale-105">
                                    <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                                    <span className="whitespace-nowrap">
                                        <span className="hidden sm:inline">Cari Rumah di Padang</span>
                                        <span className="sm:hidden">Cari Rumah</span>
                                    </span>
                                </div>
                            </a>
                            <a href="#video-perumahan" className="flex-1 sm:flex-none">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center sm:justify-start gap-2 sm:gap-3 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg px-4 sm:px-5 md:px-6 py-3 sm:py-2.5 rounded-full transition-all duration-300 transform hover:scale-105">
                                    <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                                    <span className="whitespace-nowrap">
                                        <span className="hidden sm:inline">Video Kompleks Kami</span>
                                        <span className="sm:hidden">Video</span>
                                    </span>
                                </div>
                            </a>
                        </div>


                    </div>

                    <div className="absolute inset-0 -z-10">
                        <img
                            src="/assets/images/backgrounds/banner.png"
                            className="w-full h-full object-cover object-center"
                            alt="Perumahan eksklusif di Padang Sumatra Barat dengan fasilitas lengkap"
                        />
                        <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="bg-gradient-to-b from-blue-500 to-blue-600 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col gap-8 sm:gap-10 md:gap-12">
                    <div className="px-4 sm:px-6 md:px-8">
                        <h2 className="text-center text-white/90 text-sm sm:text-base font-medium mb-4 sm:mb-6">Mitra Terpercaya</h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                            <img src="/assets/images/logos/pln.png" alt="Tesla - Mitra teknologi smart home" className="h-6 sm:h-7 md:h-8  lg:h-32   opacity-100 hover:opacity-100 transition-opacity" />
                            <img src="/assets/images/logos/Pupr.png" alt="Binance - Partner pembayaran digital" className="h-6 sm:h-7  md:h-8 lg:h-32    opacity-90 hover:opacity-100 transition-opacity" />
                            <img src="/assets/images/logos/pdam.png" alt="Facebook - Media partner pemasaran" className="h-6  sm:h-7 md:h-8 lg:h-32  opacity-90 hover:opacity-100 transition-opacity" />

                        </div>
                    </div>

                    <div className="px-4 sm:px-6 md:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-center max-w-6xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-1 sm:mb-2 leading-tight">
                                    <span className="hidden sm:inline">Kepuasan Pembeli</span>
                                    <span className="sm:hidden">Kepuasan</span>
                                    <br className="hidden sm:inline" />
                                    <span className="hidden sm:inline">Rumah Padang</span>
                                </p>
                                <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">98%</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-1 sm:mb-2 leading-tight">
                                    <span className="hidden sm:inline">Kepercayaan</span>
                                    <span className="sm:hidden">Trust</span>
                                    <br className="hidden sm:inline" />
                                    <span className="hidden sm:inline">Developer Padang</span>
                                </p>
                                <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">100%</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-1 sm:mb-2 leading-tight">
                                    <span className="hidden sm:inline">Keluarga di</span>
                                    <span className="sm:hidden">Total</span>
                                    <br className="hidden sm:inline" />
                                    <span className="hidden sm:inline">Perumahan Kami</span>
                                    <span className="sm:hidden">Keluarga</span>
                                </p>
                                <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">50+</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-1 sm:mb-2 leading-tight">
                                    <span className="hidden sm:inline">Fasilitas</span>
                                    <span className="sm:hidden">Fasilitas</span>
                                    <br className="hidden sm:inline" />
                                    <span className="hidden sm:inline">Kompleks</span>
                                </p>
                                <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Premium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="perumahan-padang" className="w-full">
                <BrowCityWrapper />
            </section>

            <section className="w-full">
                <FeatureSection />
            </section>

            <section className="w-full">
                <BrowseOfficeWrapper />
            </section>

            <section id="testimoni-padang" className="w-full">
                <TestimonialSection />
            </section>

            <section className="w-full">
                <Footer />
            </section>
        </>
    )
}

export default Hero