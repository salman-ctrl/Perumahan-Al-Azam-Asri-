import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            id: 1,
            name: "Budi Santoso",
            role: "CEO Tech Startup",
            image: "/assets/images/photos/image.png",
            rating: 5,
            comment: "Hunian mewah yang luar biasa dengan fasilitas premium. Investasi terbaik untuk keluarga saya. Pelayanan yang sangat memuaskan dari awal hingga serah terima unit.",
            project: "Villa Emerald Hills"
        },
        {
            id: 2,
            name: "Sari Wijaya",
            role: "Dokter Spesialis",
            image: "/assets/images/photos/image2.jpg",
            rating: 5,
            comment: "Lokasi strategis dengan akses mudah ke berbagai fasilitas. Desain rumah yang elegan dan modern sesuai dengan kebutuhan keluarga modern.",
            project: "Diamond Residence"
        },
        {
            id: 3,
            name: "Ahmad Rahman",
            role: "Pengusaha",
            image: "/assets/images/photos/image3.jpg",
            rating: 5,
            comment: "Kualitas bangunan sangat baik dengan material premium. Tim konstruksi profesional dan timeline pengerjaan sesuai jadwal yang dijanjikan.",
            project: "Golden Park Estate"
        },
        {
            id: 4,
            name: "Lisa Permata",
            role: "Marketing Director",
            image: "/assets/images/photos/image4.png",
            rating: 5,
            comment: "Lingkungan yang aman dan nyaman untuk anak-anak. Fasilitas komunitas lengkap mulai dari taman bermain hingga kolam renang yang terawat dengan baik.",
            project: "Sapphire Gardens"
        },
        {
            id: 5,
            name: "Robert Chen",
            role: "Konsultan Keuangan",
            image: "/assets/images/photos/image5.png",
            rating: 5,
            comment: "Nilai investasi properti yang terus meningkat. Lokasi premium dengan potensi appreciation yang sangat menjanjikan untuk jangka panjang.",
            project: "Platinum Heights"
        }
    ]

    // Auto slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, testimonials.length])

    const nextSlide = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const prevSlide = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false)
        setCurrentIndex(index)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <StarIcon className="w-4 h-4" />
                        <span>Testimoni Klien</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Apa Kata <span className="text-blue-600">Klien Kami</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kepuasan dan kepercayaan klien adalah prioritas utama kami dalam memberikan hunian terbaik
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="relative">
                    {/* Main Card */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto max-w-4xl overflow-hidden">

                                        {/* Project Image */}
                                        <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.project}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-6 mb-10 sm:p-8 md:p-10 lg:p-12">
                                            {/* Rating Stars */}
                                            <div className="flex justify-center mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8">
                                                "{testimonial.comment}"
                                            </blockquote>

                                            {/* Client Info */}
                                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                                <div>
                                                    <h4 className="font-bold text-lg md:text-xl text-gray-900">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-gray-600">{testimonial.role}</p>
                                                </div>
                                                <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
                                                <div className="text-center sm:text-left">
                                                    <p className="text-sm text-gray-500">Proyek:</p>
                                                    <p className="font-semibold text-blue-600">{testimonial.project}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 z-10"
                    >
                        <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-blue-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 z-10"
                    >
                        <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-blue-600" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-blue-600 w-6 sm:w-8'
                                : 'bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-gray-600 text-sm sm:text-base">Unit Terjual</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
                        <div className="text-gray-600 text-sm sm:text-base">Kepuasan</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
                        <div className="text-gray-600 text-sm sm:text-base">Tahun Pengalaman</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
                        <div className="text-gray-600 text-sm sm:text-base">Layanan</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
