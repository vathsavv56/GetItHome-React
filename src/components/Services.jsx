import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function Services() {
    const navigate = useNavigate()
    const [selectedService, setSelectedService] = useState(null)
    const [form, setForm] = useState({ name: '', phone: '', address: '', date: '', time: '', notes: '' })
    const [loading, setLoading] = useState(false)

    const services = [
        { name: 'Personal Grooming', desc: 'Professional barbers and stylists for haircuts, shaves, and styling at home.' },
        { name: 'Private Cooks', desc: 'Gourmet meals, weekly meal prep, or special occasion catering.' },
        { name: 'Home Cleaning', desc: 'Reliable and thorough cleaning services using eco-friendly products.' },
        { name: 'Handyman Services', desc: 'Skilled professionals for furniture assembly, mounting, and repairs.' },
        { name: 'In-Home Tech Support', desc: 'Help with setting up devices, troubleshooting, and learning software.' },
        { name: 'Personal Training', desc: 'Certified fitness trainers for personalized workout sessions.' },
        { name: 'Pet Care', desc: 'Trustworthy pet sitters and groomers to care for your furry friends.' },
        { name: 'Academic Tutoring', desc: 'Experienced tutors for all ages and subjects.' },
        { name: 'Event Assistance', desc: 'Extra hands for your next party—setup, serving, and cleanup.' }
    ]

    const handleServiceClick = (service) => {
        const token = localStorage.getItem('token')
        if (!token) {
            alert('Please login to book a service')
            navigate('/login')
            return
        }
        setSelectedService(service)
        setForm({ name: '', phone: '', address: '', date: '', time: '', notes: '' })
    }

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const bookingData = { ...form, service: selectedService.name }
            await api.createBooking(bookingData)
            alert(`✅ Appointment added successfully!\n\nService: ${selectedService.name}\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}`)
            setSelectedService(null)
            setForm({ name: '', phone: '', address: '', date: '', time: '', notes: '' })
        } catch (err) {
            alert('Failed to book appointment: ' + (err.message || 'Please try again'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="services" className="bg-white">
            <div className="container">
                <div className="section-header text-center">
                    <h2>A service for every need</h2>
                    <p>Explore our growing list of professional home services.</p>
                </div>
                <div className="grid grid-cols-md-2 grid-cols-lg-3">
                    {services.map(s => (
                        <div key={s.name} className="service-card" onClick={() => handleServiceClick(s)} style={{ cursor: 'pointer' }}>
                            <h3>{s.name}</h3>
                            <p>{s.desc}</p>
                            <button className="cta-button" style={{ marginTop: '1rem', width: '100%', padding: '0.5rem' }}>
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedService && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }} onClick={() => setSelectedService(null)}>
                    <div className="login-card" style={{ maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Book {selectedService.name}</h2>
                        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>{selectedService.desc}</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group" style={{ marginBottom: '1rem' }}>
                                <input name="name" type="text" required placeholder="Your Name" className="input-field" value={form.name} onChange={onChange} />
                            </div>
                            <div className="input-group" style={{ marginBottom: '1rem' }}>
                                <input name="phone" type="tel" required placeholder="Phone Number" className="input-field" value={form.phone} onChange={onChange} />
                            </div>
                            <div className="input-group" style={{ marginBottom: '1rem' }}>
                                <input name="address" type="text" required placeholder="Service Address" className="input-field" value={form.address} onChange={onChange} />
                            </div>
                            <div className="input-group" style={{ marginBottom: '1rem' }}>
                                <input name="date" type="date" required className="input-field" value={form.date} onChange={onChange} />
                            </div>
                            <div className="input-group" style={{ marginBottom: '1rem' }}>
                                <input name="time" type="time" required className="input-field" value={form.time} onChange={onChange} />
                            </div>
                            <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                                <textarea name="notes" placeholder="Additional notes (optional)" className="input-field" value={form.notes} onChange={onChange} rows="3" />
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <button type="button" onClick={() => setSelectedService(null)} className="login-btn" style={{ flex: 1 }}>
                                    Cancel
                                </button>
                                <button type="submit" className="cta-button" disabled={loading} style={{ flex: 1 }}>
                                    {loading ? 'Booking...' : 'Confirm Booking'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}
