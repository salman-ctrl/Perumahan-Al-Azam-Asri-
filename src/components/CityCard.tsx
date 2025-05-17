import React from 'react'

const CityCard = () => {
    return (
        <div>
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
        </div>
    )
}

export default CityCard
