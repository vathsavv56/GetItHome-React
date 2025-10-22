import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="main-header">
            <div className="navbar-container">
                <div className="navbar">
                    <Link to="/" className="navbar-brand">GetItHome</Link>
                    <nav className="nav-links" aria-label="Main navigation">
                        <Link to="/services">Services</Link>
                        <Link to="/howitworks">How It Works</Link>
                        <Link to="/blog">Blog</Link>
                    </nav>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <Link to="/login" className="login-btn">Log In</Link>
                      <Link to="/signup" className="login-btn" style={{ backgroundColor: '#0ea5e9' }}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
