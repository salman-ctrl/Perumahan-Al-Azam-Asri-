import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="w-full bg-black text-[#d4af37]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

          {/* Logo */}
          <Link to={`/`}>
            <img
              className="h-12 w-auto object-contain"
              src="/assets/images/logos/logos.png"
              alt="Logo"
            />
          </Link>

          {/* Menu desktop */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
            <li>
              <Link to={`/`}>Beranda</Link>
            </li>
            <li>
              <Link to={'/semua-rumah'}>
                Rumah Tersedia

              </Link>
            </li>
            <li>
              <Link to={'/check-booking'}>
                Booking Saya

              </Link>
            </li>
          </ul>

          {/* Tombol Hubungi */}
          <a
            href="https://wa.me/6285267653061"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 border border-[#d4af37] px-5 py-2 rounded-full hover:bg-[#d4af37] hover:text-gray-300 transition-all"
          >
            <PhoneIcon className="w-5 h-5" />
            <span>Hubungi Kami</span>
          </a>

          {/* Hamburger menu (mobile) */}
          <button
            className="md:hidden  text-[#d4af37]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <ul className="flex flex-col gap-4 p-4 text-lg">
              <li>
                <Link to={`/`} onClick={() => setIsOpen(false)}>Beranda</Link>
              </li>
              <li >
                <Link to={'/semua-rumah'} onClick={() => setIsOpen(false)}> Rumah Tersedia </Link>

              </li>
              <li >
                <Link to={'/check-booking'} onClick={() => setIsOpen(false)}>
                  Booking Saya
                </Link>

              </li>
              <li>
                <a
                  href="https://wa.me/6285267653061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#d4af37] px-4 py-2 rounded-full hover:bg-[#d4af37] hover:text-black transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <PhoneIcon className="w-5 h-5" />
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Nav
