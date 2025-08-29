import React, { useState } from 'react'
import type z from 'zod';
import type { BookingDetails } from '../types/type';
import { viewBookingSchema } from '../types/validationBooking';
import axios from 'axios';
import Nav from '../components/Nav';

const CheckBooking = () => {

    const [formData, setFormData] = useState({
        phone_number: "",
        booking_trx_id: "",
    });

    const [formErrors, setFormErrors] =
        useState<z.ZodIssue[]>([]);
    const [isloading, setLoading] = useState(false);
    const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

    const [error, setError] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const API_KEY = import.meta.env.VITE_API_KEY
    console.log('api key:' + API_KEY)

    const API_BASE_URL = import.meta.env.VITE_API_URL
    console.log('api base url :' + API_BASE_URL)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log('validating form data..');
        const validation = viewBookingSchema.safeParse(formData);

        if (!validation.success) {
            console.error("Validation Errors:", validation.error.issues);
            setFormErrors(validation.error.issues);
            return;
        }

        console.log('Form data is valid. Submitting..', formData);
        setLoading(true);

        try {
            const response = await axios.post(
                `${API_BASE_URL}/check-booking`,
                {
                    ...formData,
                },
                {
                    headers: {
                        "X-API-KEY": API_KEY,
                    }
                }
            );
            console.log('data dari server', response.data)
            setBookingDetails(response.data.data);
        }

        catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Error submitting form");
                setError(error.message);
            } else {
                console.error('Unexpected error:', error);
                setError('An unexpected error occured');
            }
        } finally {
            setLoading(false);
        }
    }
    console.log("BookingDetails:", bookingDetails);

    return (
        <>
            <Nav />
            <div
                id="Banner"
                className="relative w-full h-[180px] sm:h-[200px] md:h-[240px] flex items-center shrink-0 overflow-hidden -mb-[30px] sm:-mb-[40px] md:-mb-[50px]"
            >
                <h1 className="text-center mx-auto font-extrabold text-[24px] sm:text-[32px] md:text-[40px] leading-[36px] sm:leading-[48px] md:leading-[60px] text-white mb-5 z-20 px-4">
                    View Your Booking Details
                </h1>
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
                <img
                    src="assets/images/thumbnails/thumbnail-details-5.png"
                    className="absolute w-full h-full object-cover object-top"
                    alt=""
                />
            </div>
            <section
                id="Check-Booking"
                className="relative flex flex-col w-full max-w-[930px] shrink-0 gap-[20px] sm:gap-[25px] md:gap-[30px] mx-auto mb-[60px] sm:mb-[80px] md:mb-[100px] z-20 px-4 sm:px-6 md:px-8"
            >
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row sm:items-end rounded-[15px] sm:rounded-[20px] border border-[#E0DEF7] p-[20px] sm:p-[25px] md:p-[30px] gap-[16px] sm:gap-[12px] md:gap-[16px] bg-white"
                >
                    <div className="flex flex-col w-full gap-2">
                        <p className="font-semibold text-sm sm:text-base">
                            Booking TRX ID
                        </p>
                        <div className="flex items-center rounded-full border border-[#000929] px-4 sm:px-5 gap-[8px] sm:gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                            <img
                                src="assets/images/icons/receipt-text-black.svg"
                                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                alt="icon"
                            />
                            <input
                                type="text"
                                name="booking_trx_id"
                                onChange={handleChange}
                                value={formData.booking_trx_id}
                                id="name"
                                className="appearance-none outline-none w-full py-2.5 sm:py-3 font-semibold placeholder:font-normal placeholder:text-[#000929] text-sm sm:text-base"
                                placeholder="Write your booking trx id"
                            />
                        </div>
                        {formErrors.find((error) => error.path.includes("booking_trx_id")) && (
                            <p className='text-red-500 text-sm'>Booking trx Id number is required</p>
                        )}
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <p className="font-semibold text-sm sm:text-base">
                            Phone Number
                        </p>
                        <div className="flex items-center rounded-full border border-[#000929] px-4 sm:px-5 gap-[8px] sm:gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0D903A]">
                            <img
                                src="assets/images/icons/call-black.svg"
                                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                alt="icon"
                            />
                            <input
                                type="tel"
                                name="phone_number"
                                onChange={handleChange}
                                value={formData.phone_number}
                                id="phone"
                                className="appearance-none outline-none w-full py-2.5 sm:py-3 font-semibold placeholder:font-normal placeholder:text-[#000929] text-sm sm:text-base"
                                placeholder="Write your valid number"
                            />
                        </div>
                        {formErrors.find((error) => error.path.includes('phone_number')) && (
                            <p className='text-red-500 text-sm'>Phone number is required</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isloading}
                        className="flex items-center justify-center rounded-full p-[10px_24px] sm:p-[12px_30px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD] w-full sm:w-auto shrink-0 text-sm sm:text-base mt-2 sm:mt-0"
                    >
                        <span className="text-nowrap">{isloading ? "loading.." : "Check Booking"}</span>
                    </button>
                </form>

                {bookingDetails && (
                    <div id="Result" className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[25px] md:gap-[30px]">
                        {/* Customer Details Card */}
                        <div className="flex flex-col h-fit shrink-0 rounded-[15px] sm:rounded-[20px] border border-[#E0DEF7] p-[20px] sm:p-[25px] md:p-[30px] gap-[20px] sm:gap-[25px] md:gap-[30px] bg-white">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                <div className="flex shrink-0 w-full sm:w-[120px] md:w-[140px] h-[80px] sm:h-[85px] md:h-[100px] rounded-[15px] sm:rounded-[20px] overflow-hidden">
                                    <img
                                        src="assets/images/thumbnails/thumbnail-details-4.png"
                                        className="w-full h-full object-cover"
                                        alt="thumbnail"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <p className="font-bold text-lg sm:text-xl leading-[24px] sm:leading-[30px]">
                                        {bookingDetails.office.name}
                                    </p>
                                    <div className="flex items-center gap-[6px]">
                                        <img
                                            src="assets/images/icons/location.svg"
                                            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                            alt="icon"
                                        />
                                        <p className="font-semibold text-sm sm:text-base">{bookingDetails.name}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-[#F6F5FD]" />
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-lg sm:text-xl">Customer Details</h2>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-sm sm:text-base">Full Name</h3>
                                    <div className="flex items-center rounded-full px-4 sm:px-5 py-2.5 sm:py-3 gap-[8px] sm:gap-[10px] bg-[#F7F7FD]">
                                        <img
                                            src="assets/images/icons/security-user-black.svg"
                                            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                            alt="icon"
                                        />
                                        <p className="font-semibold text-sm sm:text-base">{bookingDetails.name}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-sm sm:text-base">
                                        Phone Number
                                    </h3>
                                    <div className="flex items-center rounded-full px-4 sm:px-5 py-2.5 sm:py-3 gap-[8px] sm:gap-[10px] bg-[#F7F7FD]">
                                        <img
                                            src="assets/images/icons/call-black.svg"
                                            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                            alt="icon"
                                        />
                                        <p className="font-semibold text-sm sm:text-base">{bookingDetails.phone_number}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-sm sm:text-base">
                                        Started At
                                    </h3>
                                    <div className="flex items-center rounded-full px-4 sm:px-5 py-2.5 sm:py-3 gap-[8px] sm:gap-[10px] bg-[#F7F7FD]">
                                        <img
                                            src="assets/images/icons/calendar-black.svg"
                                            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                            alt="icon"
                                        />
                                        <p className="font-semibold text-sm sm:text-base">{bookingDetails.started_at}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-sm sm:text-base">
                                        Ended At
                                    </h3>
                                    <div className="flex items-center rounded-full px-4 sm:px-5 py-2.5 sm:py-3 gap-[8px] sm:gap-[10px] bg-[#F7F7FD]">
                                        <img
                                            src="assets/images/icons/calendar-black.svg"
                                            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                            alt="icon"
                                        />
                                        <p className="font-semibold text-sm sm:text-base">{bookingDetails.ended_at}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-[#F6F5FD]" />
                            <div className="flex items-center gap-3">
                                <img
                                    src="assets/images/icons/shield-tick.svg"
                                    className="w-6 h-6 sm:w-[30px] sm:h-[30px] shrink-0"
                                    alt="icon"
                                />
                                <p className="font-semibold leading-[24px] sm:leading-[28px] text-sm sm:text-base">
                                    Privasi Anda aman bersama kami.
                                </p>
                            </div>
                        </div>

                        {/* Order Details Card */}
                        <div className="flex flex-col h-fit shrink-0 rounded-[15px] sm:rounded-[20px] border border-[#E0DEF7] p-[20px] sm:p-[25px] md:p-[30px] gap-[20px] sm:gap-[25px] md:gap-[30px] bg-white">
                            <h2 className="font-bold text-lg sm:text-xl">Order Details</h2>
                            <div className="flex flex-col gap-4 sm:gap-5">
                                {bookingDetails.is_paid ? (
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="font-semibold text-sm sm:text-base">Status Pembayaran</p>
                                        <p className="rounded-full w-fit p-[4px_12px] sm:p-[6px_16px] bg-[#0D903A] font-bold text-xs sm:text-sm leading-[18px] sm:leading-[21px] text-[#F7F7FD]">
                                            SUCCESS
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="font-semibold text-sm sm:text-base">Status Pembayaran</p>
                                        <p className="rounded-full w-fit p-[4px_12px] sm:p-[6px_16px] bg-[#FF852D] font-bold text-xs sm:text-sm leading-[18px] sm:leading-[21px] text-[#F7F7FD]">
                                            PENDING
                                        </p>
                                    </div>
                                )}
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-semibold text-sm sm:text-base">Booking TRX ID</p>
                                    <p className="font-bold text-sm sm:text-base text-right">{bookingDetails.booking_trx_id}</p>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-semibold text-sm sm:text-base">Duration</p>
                                    <p className="font-bold text-sm sm:text-base text-right">{bookingDetails.duration} Days Working</p>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-semibold text-sm sm:text-base">Total Amount</p>
                                    <p className="font-bold text-lg sm:text-[22px] leading-[27px] sm:leading-[33px] text-[#0D903A] text-right">
                                        Rp {bookingDetails.total_amount.toLocaleString('id')}
                                    </p>
                                </div>
                            </div>
                            <hr className="border-[#F6F5FD]" />
                            <h2 className="font-bold text-lg sm:text-xl">Bonus Packages For You</h2>
                            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <img
                                        src="assets/images/icons/coffee.svg"
                                        className="w-7 h-7 sm:w-[34px] sm:h-[34px] shrink-0"
                                        alt="icon"
                                    />
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold text-sm sm:text-base">Extra Snacks</p>
                                        <p className="text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Work-Life Balance</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <img
                                        src="assets/images/icons/group.svg"
                                        className="w-7 h-7 sm:w-[34px] sm:h-[34px] shrink-0"
                                        alt="icon"
                                    />
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold text-sm sm:text-base">Free Move</p>
                                        <p className="text-xs sm:text-sm leading-[18px] sm:leading-[21px]">Anytime 24/7</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-[#F6F5FD]" />
                            <a
                                href="https://wa.me/6285267653061"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[10px_16px] sm:p-[12px_20px] gap-2 sm:gap-3 bg-white font-semibold text-sm sm:text-base"
                            >
                                <img
                                    src="assets/images/icons/call-black.svg"
                                    className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                                    alt="icon"
                                />
                                <span>Call Customer Service</span>
                            </a>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default CheckBooking