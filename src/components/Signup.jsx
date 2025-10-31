import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await api.signup(form)
      navigate('/login', { replace: true })
    } catch (err) {
      setError(err.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-card">
        <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>Create your account</h1>
        <p className="subtitle" style={{ marginBottom: '1.5rem', color: '#4a5568' }}>Sign up to start booking services.</p>
        {error && <div role="alert" style={{ color: '#b91c1c', marginBottom: '1rem' }}>{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="input-group" style={{ marginBottom: '1rem' }}>
            <input name="name" type="text" placeholder="Name (optional)" className="input-field" value={form.name} onChange={onChange} />
          </div>
          <div className="input-group" style={{ marginBottom: '1rem' }}>
            <input name="email" type="email" required placeholder="Email" className="input-field" value={form.email} onChange={onChange} />
          </div>
          <div className="input-group" style={{ marginBottom: '1.5rem' }}>
            <input name="password" type="password" required minLength={6} placeholder="Password (min 6 chars)" className="input-field" value={form.password} onChange={onChange} />
          </div>
          <button type="submit" className="cta-button" disabled={loading} style={{ width: '100%' }}>{loading ? 'Creating...' : 'Sign Up'}</button>
        </form>
        <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#4a5568' }}>
          Already have an account? <a href="#/login" style={{ color: '#2563eb', fontWeight: 600 }}>Log in</a>
        </p>
      </div>
    </section>
  )
}

