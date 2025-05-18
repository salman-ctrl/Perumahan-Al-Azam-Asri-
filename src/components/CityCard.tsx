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

                </div>
            </a>
        </div>
    )
}

interface CityCardProps {
    city: City
}

export default CityCard
