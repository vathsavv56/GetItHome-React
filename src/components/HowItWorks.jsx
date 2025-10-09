import React from 'react'

export default function HowItWorks() {
    return (
        <section id="how-it-works">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Three steps to effortless</h2>
                    <p>Your convenience is our design.</p>
                </div>
                <div className="grid grid-cols-md-3">
                    <div className="service-card text-center">
                        <h3>1. Find Your Expert</h3>
                        <p>Browse our curated list of vetted professionals for any task you need.</p>
                    </div>
                    <div className="service-card text-center">
                        <h3>2. Book Your Time</h3>
                        <p>Select a date and time that fits perfectly into your busy schedule.</p>
                    </div>
                    <div className="service-card text-center">
                        <h3>3. Enjoy the Service</h3>
                        <p>Relax while our expert takes care of everything. It's truly that simple.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
