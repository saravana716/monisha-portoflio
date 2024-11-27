import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Aboutpage from '../Pages/Aboutpage'
import Contactpage from '../Pages/Contactpage'
import Portfoliopage from '../Pages/Portfoliopage'

const Routing = () => { 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/portfolio' element={<Portfoliopage />}/>
        <Route path='/contact' element={<Contactpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing