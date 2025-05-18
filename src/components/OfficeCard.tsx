import React from 'react'
import { MapPinIcon, StarIcon, WifiIcon, UserIcon, ClockIcon } from '@heroicons/react/16/solid'
import type { Office } from '../types/type'


const OfficeCard = ({ office }: OfficeCardProps) => {

    const baseUrl = 'http://127.0.0.1:8000/storage'
    return (
        <div>
            <a href="#">
                <div className='flex shadow-2xl flex-col rounded-[20px] border w-[350px] h-[500px] border-[#E0DEF7] bg-white overflow-hidden '>

                    <div className='px-3'>
                        <h2 className='line-clamp-2 px-3 font-bold text-[22px] leading-[36px] h-[72px] ' >Masayori Future Space</h2>
                        <div className='space-y-6'>
                            <div className='flex justify-between px-3 items-center'>
                                <p className='leading-[36px]'>Rp {office.price}</p>
                                <div className='flex items-center gap-2'>
                                    <p>Days {office.duration}</p>
                                    <ClockIcon className='h-7 w-7 text-blue-500' />
                                </div>
                            </div>
                            <hr className="border-[#F6F5FD]" />
                            <div className='flex justify-between px-3 items-center'>
                                <div className='flex items-center gap-2 '>
                                    <MapPinIcon className='h-7 w-7 text-blue-500' />
                                    <p>{office.city.name}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p>4.3/3</p>
                                    <StarIcon className='h-7 w-7 text-amber-300' />
                                </div>
                            </div>
                            <hr className="border-[#F6F5FD]" />
                            <div className='flex items-center justify-between px-3'>
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
            </a>
        </div>
    )
}

interface OfficeCardProps {
    office: Office
}

export default OfficeCard
