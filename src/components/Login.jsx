import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            const result = await api.login(form)
            if (result.token) {
                localStorage.setItem('token', result.token)
            }
            // Trigger a page reload to update navbar state
            window.location.href = '#/'
            window.location.reload()
        } catch (err) {
            setError(err.message || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)' }}>
            <div className="login-card">
                <div className="logo-icon" style={{ width: 50, height: 50, background: '#fff', borderRadius: '0.75rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    🏠
                </div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Sign in to GetItHome</h1>
                <p className="subtitle" style={{ marginBottom: '2.5rem', color: '#4a5568' }}>Welcome back! Manage your home services with ease.</p>
                {error && <div role="alert" style={{ color: '#b91c1c', marginBottom: '1rem', padding: '0.75rem', background: '#fee', borderRadius: '0.5rem' }}>{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email"
                            className="input-field"
                            value={form.email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            className="input-field"
                            value={form.password}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="cta-button" disabled={loading} style={{ width: '100%' }}>
                        {loading ? 'Signing in...' : 'Get Started'}
                    </button>
                </form>
                <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#4a5568' }}>
                    Don't have an account? <a href="#/signup" style={{ color: '#2563eb', fontWeight: 600 }}>Sign up</a>
                </p>
            </div>
        </section>
    )
}
