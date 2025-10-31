import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/howitworks" element={<HowItWorks />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
