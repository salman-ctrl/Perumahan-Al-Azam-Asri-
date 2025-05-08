import React from 'react'
import Browse from './pages/Browse'
import CityDetails from './pages/CityDetails'
import BookOffice from './pages/BookOffice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import SuccesBooking from './pages/SuccesBooking'
import CheckBooking from './pages/CheckBooking'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Browse />} />
        <Route path='/office/:slug/book' element={<BookOffice />} />
        <Route path='/city:slug' element={<CityDetails />} />
        <Route path='/success-booking' element={<SuccesBooking />} />
        <Route path='/check-booking' element={<CheckBooking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
