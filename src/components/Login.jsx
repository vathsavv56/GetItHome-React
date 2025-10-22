import React from 'react'

export default function Login() {
    return (
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)' }}>
            <div className="login-card">
                <div className="logo-icon" style={{ width: 50, height: 50, background: '#fff', borderRadius: '0.75rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    🏠
                </div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Sign in to GetItHome</h1>
                <p className="subtitle" style={{ marginBottom: '2.5rem', color: '#4a5568' }}>Welcome back! Manage your home services with ease.</p>

                <form onSubmit={e => { e.preventDefault(); alert('Demo login — implement auth') }}>
                    <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input id="email" type="email" required placeholder="Email" className="input-field" />
                    </div>
                    <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input id="password" type="password" required placeholder="Password" className="input-field" />
                    </div>
                    <button type="submit" className="cta-button" style={{ width: '100%' }}>Get Started</button>
                </form>
            </div>
        </section>
    )
}
