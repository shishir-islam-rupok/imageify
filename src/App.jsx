import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import BuyCredit from './pages/BuyCredit'


const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-18 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/results' element={<Results />} />
    <Route path='/buy-credit' element={<BuyCredit />} />
   </Routes>
   </div>
  )
}

export default App
