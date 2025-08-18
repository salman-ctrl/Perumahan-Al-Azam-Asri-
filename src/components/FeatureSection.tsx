import React from 'react'

const FeatureSection = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1015px] w-full mx-auto gap-10 lg:gap-[100px] mt-[50px] lg:mt-[100px] px-4'>

                <p className='font-bold text-[24px] lg:text-[32px] leading-[36px] lg:leading-[48px] text-center lg:text-left'>
                    Kenapa Perumahan Kami <br className='hidden lg:block' /> Pilihan Terbaik untuk Anda
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] lg:gap-[30px] w-full">

                    {/* 1 */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] lg:rounded-[23px] bg-white overflow-hidden">
                            <img src="/assets/images/icons/security-user.svg" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-base lg:text-lg leading-[22px] lg:leading-[27px]">Keamanan Terjamin</p>
                            <p className="text-sm leading-[20px] lg:leading-[24px]">
                                Lingkungan aman dengan sistem keamanan 24 jam.
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] lg:rounded-[23px] bg-white overflow-hidden">
                            <img src="/assets/images/icons/group.svg" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-base lg:text-lg leading-[22px] lg:leading-[27px]">Akses Mudah</p>
                            <p className="text-sm leading-[20px] lg:leading-[24px]">
                                Lokasi strategis dekat pusat kota dan fasilitas umum.
                            </p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] lg:rounded-[23px] bg-white overflow-hidden">
                            <img src="/assets/images/icons/3dcube.svg" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-base lg:text-lg leading-[22px] lg:leading-[27px]">Desain Modern</p>
                            <p className="text-sm leading-[20px] lg:leading-[24px]">
                                Hunian dengan desain kekinian dan tata ruang fungsional.
                            </p>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] lg:rounded-[23px] bg-white overflow-hidden">
                            <img src="/assets/images/icons/cup.svg" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-base lg:text-lg leading-[22px] lg:leading-[27px]">Fasilitas Lengkap</p>
                            <p className="text-sm leading-[20px] lg:leading-[24px]">
                                Mulai dari taman, kolam renang, hingga area bermain anak.
                            </p>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] lg:rounded-[23px] bg-white overflow-hidden">
                            <img src="/assets/images/icons/coffee.svg" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-base lg:text-lg leading-[22px] lg:leading-[27px]">Lingkungan Nyaman</p>
                            <p className="text-sm leading-[20px] lg:leading-[24px]">
                                Suasana tenang, asri, dan bebas polusi untuk keluarga.
                            </p>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-[20px] lg:rounded-[23px] bg-white overflow-hidden">
                            <img src="/assets/images/icons/home-trend-up.svg" className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]" alt="icon" />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-base lg:text-lg leading-[22px] lg:leading-[27px]">Investasi Menjanjikan</p>
                            <p className="text-sm leading-[20px] lg:leading-[24px]">
                                Nilai properti terus meningkat seiring perkembangan kota.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default FeatureSection
