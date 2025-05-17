import React from 'react'
import type { City } from '../types/type'

const CityCard = ({ city }: CityCardProps) => {

    const baseUrl = "http://127.0.0.1:8000/storage";

    return (
        <div>
            <a href="#">
                <div className="relative shrink-0 w-[230px] h-[300px] overflow-hidden rounded-[20px]">
                    {/* Gambar di belakang (diposisikan absolute) */}
                    <img
                        className="absolute w-full h-full object-cover z-0"
                        src={`${baseUrl}/${city.photo}`}
                        alt="Jakarta Pusat"
                    />
                    {/* Gradient overlay yang transparan */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
                    {/* Konten teks di atas gambar */}
                    <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] z-20">
                        <h3 className="font-bold text-xl leading-[30px] text-white">
                            {city.name}
                        </h3>
                        <p className="text-white">{city.officeSpaces_count} Offices</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

interface CityCardProps {
    city: City
}

export default CityCard
