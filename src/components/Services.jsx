import React from 'react'

export default function Services() {
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
    return (
        <section id="services" className="bg-white">
            <div className="container">
                <div className="section-header text-center">
                    <h2>A service for every need</h2>
                    <p>Explore our growing list of professional home services.</p>
                </div>
                <div className="grid grid-cols-md-2 grid-cols-lg-3">
                    {services.map(s => (
                        <div key={s.name} className="service-card">
                            <h3>{s.name}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
