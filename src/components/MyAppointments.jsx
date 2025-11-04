import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function MyAppointments() {
    const navigate = useNavigate()
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
            return
        }
        fetchBookings()
    }, [navigate])

    const fetchBookings = async () => {
        try {
            setLoading(true)
            const data = await api.getBookings()
            setBookings(data.bookings || [])
        } catch (err) {
            setError(err.message || 'Failed to load appointments')
            if (err.status === 401) {
                localStorage.removeItem('token')
                navigate('/login')
            }
        } finally {
            setLoading(false)
        }
    }

    const getStatusColor = (status) => {
        const colors = {
            pending: '#f59e0b',
            confirmed: '#3b82f6',
            completed: '#10b981',
            cancelled: '#ef4444'
        }
        return colors[status] || '#6b7280'
    }

    const formatDate = (dateString) => {
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        } catch {
            return dateString
        }
    }

    if (loading) {
        return (
            <section style={{ minHeight: '100vh', paddingTop: '6rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', textAlign: 'center', color: '#fff' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Loading your appointments...</h1>
                </div>
            </section>
        )
    }

    return (
        <section style={{ minHeight: '100vh', paddingTop: '6rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>My Appointments</h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>View and manage all your booked services</p>
                </div>

                {error && (
                    <div style={{ background: '#fee', color: '#b91c1c', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
                        {error}
                    </div>
                )}

                {bookings.length === 0 ? (
                    <div style={{ background: '#fff', borderRadius: '1rem', padding: '3rem', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📅</div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', color: '#1f2937' }}>No appointments yet</h2>
                        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Start booking services to see your appointments here</p>
                        <a href="#/services" className="cta-button" style={{ display: 'inline-block' }}>Browse Services</a>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {bookings.map((booking) => (
                            <div key={booking.id} style={{
                                background: '#fff',
                                borderRadius: '1rem',
                                padding: '1.5rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)'
                                }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.25rem' }}>
                                            {booking.service}
                                        </h3>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '0.25rem 0.75rem',
                                            background: getStatusColor(booking.status) + '20',
                                            color: getStatusColor(booking.status),
                                            borderRadius: '9999px',
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                            textTransform: 'capitalize'
                                        }}>
                                            {booking.status}
                                        </span>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Booked on</div>
                                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#4b5563' }}>
                                            {new Date(booking.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>📅 Date</div>
                                        <div style={{ fontWeight: 600, color: '#1f2937' }}>{formatDate(booking.date)}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>🕐 Time</div>
                                        <div style={{ fontWeight: 600, color: '#1f2937' }}>{booking.time}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>👤 Name</div>
                                        <div style={{ fontWeight: 600, color: '#1f2937' }}>{booking.name}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>📞 Phone</div>
                                        <div style={{ fontWeight: 600, color: '#1f2937' }}>{booking.phone}</div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>📍 Address</div>
                                    <div style={{ fontWeight: 500, color: '#1f2937' }}>{booking.address}</div>
                                </div>

                                {booking.notes && (
                                    <div style={{ padding: '0.75rem', background: '#f9fafb', borderRadius: '0.5rem', borderLeft: '3px solid #667eea' }}>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>📝 Notes</div>
                                        <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>{booking.notes}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
