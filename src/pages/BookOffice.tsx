import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import type { Office } from '../types/type'
import { z } from 'zod'
import axios from 'axios'
import { bookingSchema } from '../types/validationBooking'

const BookOffice = () => {
    const { slug } = useParams<{ slug: string }>();
    const [office, setOffice] = useState<Office | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        started_at: '',
        office_space_id: '',
        total_amount: 0
    });

    const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [uniqueCode, setUniqueCode] = useState<number>(0);
    const [totalAmountWithUniqueCode, setTotalAmountWithUniqueCode] = useState<number>(0);

    const API_KEY = import.meta.env.VITE_API_KEY

    const API_BASE_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        if (!slug) {
            setError('Slug parameter is missing');
            setLoading(false);
            return;
        }

        console.log('fetching office data..');
        axios
            .get(`${API_BASE_URL}/office/${slug}`, {
                headers: {
                    "X-API-KEY": API_KEY,
                },
            })
            .then((response) => {
                console.log('office data fetched successfully:', response.data.data);

                setOffice(response.data.data);

                const officeSpaceId = response.data.data.id;
                const generateUniqueCode = Math.floor(100 + Math.random() * 900000);
                const grandTotal = response.data.data.price - generateUniqueCode;

                setUniqueCode(generateUniqueCode);
                setTotalAmountWithUniqueCode(grandTotal);

                setFormData((prevData) => ({
                    ...prevData,
                    office_space_id: officeSpaceId,
                    total_amount: grandTotal,
                }));
                setLoading(false)
            })
            .catch((error: unknown) => {
                if (axios.isAxiosError(error)) {
                    console.error('error fetching office data:', error.message)
                    setError(error.message);
                } else {
                    console.error('Unexpected error:', error);
                    setError('An unexpected error occurred');
                }
                setLoading(false);
            });
    }, [slug]);

    const baseUrl = import.meta.env.VITE_STORAGE_URL;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Clear specific field error when user starts typing
        if (formErrors.length > 0) {
            setFormErrors(formErrors.filter(error => !error.path.includes(e.target.name)));
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("validation form data..");
        const validation = bookingSchema.safeParse(formData);
        if (!validation.success) {
            console.error('validation errors:', validation.error.issues);
            setFormErrors(validation.error.issues);
            return;
        }
        console.log('Form data is valid. submitting..', formData);
        setIsLoading(true);

        try {
            const response = await axios.post(
                `${API_BASE_URL}/booking-transaction`,
                { ...formData },
                {
                    headers: {
                        'X-API-KEY': 'Qsqkj3kjnaso390293n923n',
                    },
                }
            );
            console.log('form submitted successfully:', response.data);

            navigate('/success-booking', {
                state: {
                    office,
                    booking: response.data.data,
                },
            });
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Error submitting form:', error.message);
                setError(error.message);
            } else {
                console.error('unexpected error:', error);
                setError('An unexpected error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center min-h-screen">
                <div className="loading-wave">
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                    <div className="loading-bar" />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full flex justify-center items-center min-h-screen px-4">
                <div className="text-center">
                    <p className="text-red-500 text-lg mb-4">Error Loading: {error}</p>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-500 hover:underline"
                    >
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        )
    }

    if (!office) {
        return (
            <div className="w-full flex justify-center items-center min-h-screen px-4">
                <div className="text-center">
                    <p className="text-gray-500 text-lg mb-4">Office tidak ditemukan</p>
                    <button
                        onClick={() => navigate('/')}
                        className="text-blue-500 hover:underline"
                    >
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Nav />

            {/* Hero Banner - Responsive */}
            <div
                id="Banner"
                className="relative w-full h-[180px] sm:h-[220px] lg:h-[240px] flex items-center shrink-0 overflow-hidden -mb-[30px] sm:-mb-[40px] lg:-mb-[50px]"
            >
                <div className='absolute inset-0 flex items-center justify-center z-20'>
                    <h1 className="text-center mx-auto font-extrabold text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[60px] text-white mb-3 sm:mb-4 lg:mb-5 z-20 px-4">
                        Mulai Booking Rumah
                    </h1>
                </div>

                <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
                <img
                    src="/assets/images/thumbnails/thumbnail-details-4.png"
                    className="absolute w-full h-full object-cover object-top"
                    alt="office booking banner"
                />
            </div>

            {/* Main Form - Responsive Layout */}
            <form
                onSubmit={handleSubmit}
                className="relative flex flex-col xl:flex-row justify-center max-w-7xl mx-auto gap-4 sm:gap-6 lg:gap-[30px] mb-12 sm:mb-16 lg:mb-20 z-20 px-4 sm:px-6 lg:px-8"
            >
                {/* Left Column - Booking Form */}
                <div className="flex flex-col w-full xl:w-[500px] xl:shrink-0 h-fit rounded-[16px] sm:rounded-[20px] border border-[#E0DEF7] p-4 sm:p-6 lg:p-[30px] gap-4 sm:gap-6 lg:gap-[30px] bg-white shadow-sm">

                    {/* Office Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                        <div className="flex shrink-0 w-full sm:w-[120px] lg:w-[140px] h-[80px] sm:h-[90px] lg:h-[100px] rounded-[16px] sm:rounded-[20px] overflow-hidden">
                            <img
                                src={`${baseUrl}/${office?.thumbnail}`}
                                className="w-full h-full object-cover"
                                alt="office thumbnail"
                                onError={(e) => {
                                    e.currentTarget.src = '/assets/images/placeholder.jpg';
                                }}
                            />
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2 min-w-0 flex-1">
                            <p className="font-bold text-lg sm:text-xl lg:text-xl leading-tight">
                                {office?.name}
                            </p>
                            <div className="flex items-center gap-2">
                                <img
                                    src="/assets/images/icons/location.svg"
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    alt="location icon"
                                />
                                <p className="font-semibold text-sm sm:text-base text-gray-600">{office?.city?.name}</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-[#F6F5FD]" />

                    {/* Form Fields */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <h2 className="font-bold text-lg sm:text-xl">Lengkapi Detail Data</h2>

                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold text-sm sm:text-base">
                                Nama Lengkap
                            </label>
                            <div className="flex items-center rounded-full border border-[#000929] px-4 sm:px-5 gap-2 sm:gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                                <img
                                    src="/assets/images/icons/security-user-black.svg"
                                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                                    alt="user icon"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={handleChange}
                                    value={formData.name}
                                    className="appearance-none outline-none w-full py-3 font-semibold text-sm sm:text-base placeholder:font-normal placeholder:text-[#000929]"
                                    placeholder="Tulis nama lengkap mu"
                                />
                            </div>
                            {formErrors.find((error) => error.path.includes('name')) && (
                                <p className='text-red-500 text-sm'>Wajib isi dulu</p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-semibold text-sm sm:text-base">
                                Nomor Telepon
                            </label>
                            <div className="flex items-center rounded-full border border-[#000929] px-4 sm:px-5 gap-2 sm:gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                                <img
                                    src="/assets/images/icons/call-black.svg"
                                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                                    alt="phone icon"
                                />
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="phone"
                                    onChange={handleChange}
                                    value={formData.phone_number}
                                    className="appearance-none outline-none w-full py-3 font-semibold text-sm sm:text-base placeholder:font-normal placeholder:text-[#000929]"
                                    placeholder="TUlis nomor telepon mu"
                                />
                            </div>
                            {formErrors.find((error) => error.path.includes('phone_number')) && (
                                <p className='text-red-500 text-sm'>Wajib isi nomor telepon dulu</p>
                            )}
                        </div>

                        {/* Date */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="date" className="font-semibold text-sm sm:text-base">
                                Tanggal Booking
                            </label>
                            <div className="flex items-center rounded-full border border-[#000929] px-4 sm:px-5 gap-2 sm:gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A] overflow-hidden">
                                <img
                                    src="/assets/images/icons/calendar-black.svg"
                                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                                    alt="calendar icon"
                                />
                                <input
                                    type="date"
                                    name="started_at"
                                    value={formData.started_at}
                                    onChange={handleChange}
                                    id="date"
                                    className="relative appearance-none outline-none w-full py-3 font-semibold text-sm sm:text-base [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                                />
                            </div>
                            {formErrors.find((error) => error.path.includes('started_at')) && (
                                <p className='text-red-500 text-sm'>Wajib isi</p>
                            )}
                        </div>
                    </div>

                    <hr className="border-[#F6F5FD]" />

                    {/* Privacy Notice */}
                    <div className="flex items-start gap-3">
                        <img
                            src="/assets/images/icons/shield-tick.svg"
                            className="w-6 h-6 sm:w-[30px] sm:h-[30px] flex-shrink-0 mt-1"
                            alt="shield icon"
                        />
                        <p className="font-semibold text-sm sm:text-base leading-relaxed">
                            Privasi dan kenyamanan keluarga Anda adalah prioritas utama kami
                        </p>
                    </div>

                    <hr className="border-[#F6F5FD]" />

                    {/* Bonus Packages */}
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">
                        <h2 className="font-bold text-lg sm:text-xl">Bonus Tambahan Untukmu</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-[30px]">
                            <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <img
                                    src="/assets/images/icons/coffee.svg"
                                    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-[34px] lg:h-[34px] flex-shrink-0"
                                    alt="coffee icon"
                                />
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-base sm:text-lg leading-tight">Free Kompor Tanam</p>
                                    <p className="text-xs sm:text-sm text-gray-600">Dapur Modern </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="flex flex-col w-full xl:w-[400px] xl:shrink-0 h-fit rounded-[16px] sm:rounded-[20px] border border-[#E0DEF7] p-4 sm:p-6 lg:p-[30px] gap-4 sm:gap-6 lg:gap-[30px] bg-white shadow-sm">

                    <h2 className="font-bold text-lg sm:text-xl">Detail Pemesanan Rumahmu</h2>

                    {/* Order Summary */}
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm sm:text-base">Sub Total</p>
                            <p className="font-bold text-sm sm:text-base">Rp {office?.price?.toLocaleString('id-ID') || '0'}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-sm sm:text-base">kode Unik</p>
                            <p className="font-bold text-sm sm:text-base text-[#FF2D2D]">-Rp {uniqueCode?.toLocaleString('id-ID') || '0'}</p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <p className="font-semibold text-sm sm:text-base">Harga Total</p>
                            <p className="font-bold text-lg sm:text-xl lg:text-[22px] leading-tight text-[#0D903A]">
                                Rp {totalAmountWithUniqueCode.toLocaleString('id-ID', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}
                            </p>
                        </div>

                        {/* Unique Code Notice */}
                        <div className="relative rounded-xl p-3 sm:p-[10px_20px] gap-[10px] bg-[#000929] text-white">
                            <img
                                src="/assets/images/icons/Polygon 1.svg"
                                className="absolute -top-[15px] right-[10px]"
                                alt=""
                            />
                            <p className="font-semibold text-xs sm:text-sm leading-relaxed z-10">
                                Tolong perhatikan kode unik berikut ketika melakukan pembayaran kantor
                            </p>
                        </div>
                    </div>

                    <hr className="border-[#F6F5FD]" />

                    {/* Payment Methods */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="font-bold text-lg sm:text-xl">Kirim Pembayaran kesini:</h2>
                        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">

                            {/* Mandiri */}
                            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="w-16 sm:w-[71px] flex shrink-0">
                                    <img
                                        src="/assets/images/logos/mandiri.svg"
                                        className="w-full object-contain"
                                        alt="Mandiri bank logo"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center w-full rounded-full p-3 sm:p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-sm sm:text-base text-[#F7F7FD] hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
                    >
                        <span>{isLoading ? "Processing..." : "Sudah Siap Bayar"}</span>
                        {isLoading && (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}
                    </button>
                </div>
            </form>

            <div className='h-8 sm:h-12 lg:h-16'></div>
        </div>
    )
}

export default BookOffice