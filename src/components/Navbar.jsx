import React from 'react'

export default function Navbar() {
    return (
        <header className="main-header">
            <div className="navbar-container">
                <div className="navbar">
                    <a href="#/" className="navbar-brand">GetItHome</a>
                    <nav className="nav-links" aria-label="Main navigation">
                        <a href="#/services">Services</a>
                        <a href="#/howitworks">How It Works</a>
                        <a href="#/blog">Blog</a>
                    </nav>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <a href="#/login" className="login-btn">Log In</a>
                        <a href="#/signup" className="login-btn" style={{ background: '#2563eb', color: '#fff' }}>Sign Up</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
