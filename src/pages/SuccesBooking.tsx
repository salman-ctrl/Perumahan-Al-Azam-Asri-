import { Link, useLocation } from 'react-router-dom'
import Nav from '../components/Nav';

const SuccesBooking = () => {

    const location = useLocation();
    const { office, booking } = location.state;

    const baseUrl = import.meta.env.VITE_STORAGE_URL;


    return (
        <>

            <Nav />
            <div
                id="Banner"
                className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]"
            >
                <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">
                    Lihat Detail Pemesanan Anda
                </h1>
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
                <img
                    src="assets/images/thumbnails/thumbnail-details-5.png"
                    className="absolute w-full h-full object-cover object-top"
                    alt=""
                />
            </div>

            <section className="flex flex-1 py-10">
                <div className="flex flex-col w-[450px] m-auto rounded-[20px] border border-[#E0DEF4] p-[30px] gap-[30px] bg-gray-200">
                    <div className="flex items-center gap-4">
                        <img
                            src="assets/images/icons/verify.svg"
                            className="w-[50px] h-[50px] flex shrink-0"
                            alt="icon"
                        />
                        <h1 className="font-extrabold text-[28px] leading-[38px]">
                            Booking Finished
                        </h1>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center gap-4">
                        <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
                            <img
                                src={`${baseUrl}/${office.thumbnail}`}
                                className="w-full h-full object-cover"
                                alt="thumbnail"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-xl leading-[30px]">
                                {office.name}
                            </p>
                            <div className="flex items-center gap-[6px]">
                                <img
                                    src="assets/images/icons/location.svg"
                                    className="w-6 h-6"
                                    alt="icon"
                                />
                                <p className="font-semibold">{office.city.name}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center gap-4">
                        <img
                            src="assets/images/icons/receipt-text.svg"
                            className="w-[34px] h-[34px]"
                            alt="icon"
                        />
                        <div>
                            <p className="font-bold">{booking.booking_trx_id}</p>
                            <p className="text-sm leading-[21px] mt-[2px]">
                                Save your booking ID securely
                            </p>
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <p className="font-semibold leading-[28px] text-center">
                        Pesanan Anda sedang kami proses, kami akan menginformasikan status Anda
                        melalui SMS
                    </p>
                    <Link to="/check-booking" state={{ bookingDetails: booking }}>
                        <div
                            className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
                        >
                            <span>View Booking Details</span>
                        </div>
                    </Link>

                </div>
            </section>
        </>
    )
}

export default SuccesBooking;
