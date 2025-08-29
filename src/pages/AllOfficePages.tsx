import { useEffect, useState } from 'react'
import type { Office } from '../types/type'
import axios from 'axios'
import OfficeCard from '../components/OfficeCard'
import { Link } from 'react-router-dom'
import {
    MagnifyingGlassIcon,
    ArrowLeftIcon,
    MapPinIcon,
    StarIcon
} from '@heroicons/react/24/outline'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const AllOfficesPage = () => {
    const [offices, setOffices] = useState<Office[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        document.title = `Hunian Terbaik Indonesia - ${offices.length || 'Banyak'} Pilihan Properti Premium`

        const updateMetaTag = (name: string, content: string, property = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
            let meta = document.querySelector(selector) as HTMLMetaElement

            if (!meta) {
                meta = document.createElement('meta')
                if (property) {
                    meta.setAttribute('property', name)
                } else {
                    meta.setAttribute('name', name)
                }
                document.head.appendChild(meta)
            }
            meta.content = content
        }

        updateMetaTag('description', `Temukan ${offices.length || 'banyak'} hunian dan ruang kantor terbaik di Indonesia. Properti berkualitas, lokasi strategis, dan harga terjangkau. Booking sekarang!`)
        updateMetaTag('keywords', 'hunian indonesia, sewa kantor, properti premium, ruang kerja, coworking space, kantor jakarta, hunian strategis, properti terbaik')
        updateMetaTag('robots', 'index, follow, max-image-preview:large')
        updateMetaTag('author', 'Hunian Terbaik Indonesia')
        updateMetaTag('googlebot', 'index, follow')

        updateMetaTag('og:type', 'website', true)
        updateMetaTag('og:title', 'Hunian Terbaik Indonesia - Properti Premium', true)
        updateMetaTag('og:description', `Jelajahi ${offices.length || 'banyak'} hunian dan ruang kantor berkualitas tinggi di lokasi strategis Indonesia`, true)
        updateMetaTag('og:url', window.location.href, true)
        updateMetaTag('og:site_name', 'Hunian Terbaik Indonesia', true)

        updateMetaTag('twitter:card', 'summary_large_image')
        updateMetaTag('twitter:title', 'Hunian Terbaik Indonesia - Properti Premium')
        updateMetaTag('twitter:description', `${offices.length || 'Banyak'} pilihan hunian dan ruang kantor terbaik`)

        updateMetaTag('geo.region', 'ID')
        updateMetaTag('geo.country', 'Indonesia')
        updateMetaTag('ICBM', '-6.2088,106.8456')

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
        if (!canonical) {
            canonical = document.createElement('link')
            canonical.rel = 'canonical'
            document.head.appendChild(canonical)
        }
        canonical.href = window.location.href

        const addStructuredData = () => {
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                "name": "Hunian Terbaik Indonesia",
                "description": "Platform terpercaya untuk menemukan hunian dan ruang kantor berkualitas di Indonesia",
                "url": window.location.href,
                "numberOfItems": offices.length,
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Katalog Hunian",
                    "itemListElement": offices.slice(0, 10).map((office, index) => ({
                        "@type": "RealEstate",
                        "position": index + 1,
                        "name": office.name,
                        "url": `${window.location.origin}/office/${office.slug}`,
                        "image": office.thumbnail,
                    }))
                }
            }

            let scriptTag = document.querySelector('script[type="application/ld+json"]')
            if (!scriptTag) {
                scriptTag = document.createElement('script')
                document.head.appendChild(scriptTag)
            }
            scriptTag.textContent = JSON.stringify(structuredData)
        }

        if (offices.length > 0) {
            addStructuredData()
            updateMetaTag('og:image', offices[0]?.thumbnail || '/default-property.jpg', true)
            updateMetaTag('twitter:image', offices[0]?.thumbnail || '/default-property.jpg')
        }

    }, [offices])

    const API_KEY = import.meta.env.VITE_API_KEY
    console.log('api key:' + API_KEY)

    const API_BASE_URL = import.meta.env.VITE_API_URL
    console.log('api base url :' + API_BASE_URL)

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/offices`, {
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
            <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                    <div className="loading-wave mb-4">
                        <div className="loading-bar" />
                        <div className="loading-bar" />
                        <div className="loading-bar" />
                        <div className="loading-bar" />
                    </div>
                    <p className="text-lg text-gray-600 font-medium">Memuat hunian terbaik untuk Anda...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full flex justify-center items-center min-h-screen px-4 bg-red-50">
                <div className="text-center max-w-md">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-red-600">⚠️</span>
                    </div>
                    <h2 className="text-xl font-semibold text-red-800 mb-2">Terjadi Kesalahan</h2>
                    <p className="text-red-600 mb-4">Error Loading: {error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Coba Lagi
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <Nav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPinIcon className="w-5 h-5" />
                                <span className="font-medium">Lokasi Strategis</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="font-medium">Kualitas Terjamin</span>
                            </div>
                        </div>

                        <Link
                            to="/"
                            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium rounded-lg transition-all duration-200 group"
                        >
                            <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {offices.length > 0 ? (
                    <>
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Pilihan Hunian Premium Untuk Anda
                            </h2>
                            <p className="text-gray-600">
                                Menampilkan {offices.length} hunian berkualitas tinggi dengan fasilitas lengkap
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {offices.map((office) => (
                                <Link
                                    key={office.id}
                                    to={`/office/${office.slug}`}
                                    className="block group transform transition-all duration-300 hover:scale-105 "
                                    aria-label={`Lihat detail hunian ${office.name}`}
                                >
                                    <div className="relative">
                                        <OfficeCard office={office} />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Tidak Menemukan Yang Cocok?</h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Tim ahli kami siap membantu Anda menemukan hunian yang sesuai dengan kebutuhan dan budget Anda
                            </p>
                            <div className="space-y-4 gap-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto">
                                    Konsultasi Gratis
                                </button>
                                <a href="https://wa.me/6285267653061">
                                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors w-full sm:w-auto">
                                        Hubungi Kami
                                    </button>
                                </a>

                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20">
                        <div className="max-w-md mx-auto">
                            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Belum Ada Hunian Tersedia
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Kami sedang menambahkan lebih banyak pilihan hunian berkualitas.
                                Daftarkan email Anda untuk mendapat notifikasi hunian terbaru.
                            </p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Beritahu Saya
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />


        </div>
    )
}

export default AllOfficesPage