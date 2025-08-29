import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                        <div className="mb-8 justify-center flex-col items-center flex">
                            <h3 className="text-3xl text-center font-bold mb-4 text-white">
                                Premium<span className="text-blue-400">Residence</span>
                            </h3>
                            <p className="text-gray-300 md:text-center max-w-full md:max-w-[700px] leading-relaxed text-lg mb-6">
                                Menghadirkan hunian mewah berkualitas premium dengan desain modern dan fasilitas lengkap
                                untuk memenuhi gaya hidup eksklusif keluarga Indonesia.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
                            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <PhoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Telepon</p>
                                    <a href="https://wa.me/6285267653061" className="text-white hover:text-blue-400 font-semibold text-lg transition-colors">
                                        +62-852-6765-3061
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <EnvelopeIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <a href="mailto:info@premiumresidence.com" className="text-white hover:text-blue-400 font-semibold text-lg transition-colors">
                                        alazamasri@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPinIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Alamat</p>
                                    <p className="text-white leading-relaxed text-lg">
                                        Aia Pacah<br />
                                        Kec.Kuranji, Padang<br />
                                        Sumatera Barat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="https://wa.me/6285267653061"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 !bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
                aria-label="Chat WhatsApp"
            >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
            </a>
        </footer>
    )
}

export default Footer
