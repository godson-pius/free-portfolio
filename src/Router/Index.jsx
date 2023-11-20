import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../pages/Work'

const Index = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work/:id?' element={<Work />} />
            <Route path='/skills' element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default Index