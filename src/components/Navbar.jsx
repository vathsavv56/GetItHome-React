import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // Check if user has a token in localStorage
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <header className="main-header">
            <div className="navbar-container">
                <div className="navbar">
                    <a href="#/" className="navbar-brand">GetItHome</a>
                    <nav className="nav-links" aria-label="Main navigation">
                        <a href="#/services">Services</a>
                        <a href="#/howitworks">How It Works</a>
                        <a href="#/blog">Blog</a>
                        {isLoggedIn && <a href="#/appointments">My Appointments</a>}
                    </nav>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="login-btn" style={{ background: '#dc2626', color: '#fff' }}>
                                Log Out
                            </button>
                        ) : (
                            <>
                                <a href="#/login" className="login-btn">Log In</a>
                                <a href="#/signup" className="login-btn" style={{ background: '#2563eb', color: '#fff' }}>Sign Up</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
