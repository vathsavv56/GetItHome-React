import React from 'react'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1>The modern way to manage your home.</h1>
                            <p className="subtitle">Book trusted professionals for grooming, cooking, and cleaning in minutes. Reclaim your time with expert service, delivered.</p>
                            <div className="button-group">
                                <a className="cta-button" href="#/services">Book Your First Expert</a>
                                <a href="#/howitworks" className="secondary-cta">Learn More</a>
                            </div>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <p className="stat-number">500+</p>
                                    <p className="stat-label">Vetted Experts</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">10K+</p>
                                    <p className="stat-label">Homes Served</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">99%</p>
                                    <p className="stat-label">Satisfaction Rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-art-wrapper">
                            <div className="shape shape-1"></div>
                            <div className="shape shape-2"></div>
                            <div className="shape shape-3"></div>
                            <div className="text-bubble bubble-1">
                                <span>✂️</span> Grooming
                            </div>
                            <div className="text-bubble bubble-2">
                                <span>🍳</span> Cooking
                            </div>
                            <div className="text-bubble bubble-3">
                                <span>✨</span> Cleaning
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="section">
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

            {/* Services Section */}
            <section id="services" className="section bg-white">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>A service for every need</h2>
                        <p>Explore our growing list of professional home services.</p>
                    </div>
                    <div className="grid grid-cols-md-2 grid-cols-lg-3">
                        <div className="service-card">
                            <h3>Personal Grooming</h3>
                            <p>Professional barbers and stylists for haircuts, shaves, and styling, right in the comfort of your home.</p>
                        </div>
                        <div className="service-card">
                            <h3>Private Cooks</h3>
                            <p>Gourmet meals, weekly meal prep, or special occasion catering by our team of expert chefs.</p>
                        </div>
                        <div className="service-card">
                            <h3>Home Management</h3>
                            <p>Reliable homemakers for cleaning, organizing, and managing all your daily household chores.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Simple, transparent pricing</h2>
                        <p>Choose the plan that's right for you.</p>
                    </div>
                    <div className="grid grid-cols-md-3">
                        <div className="pricing-card">
                            <p className="plan-name">Pay As You Go</p>
                            <p className="price">From $50</p>
                            <ul className="features">
                                <li>✓ Book any service</li>
                                <li>✓ Vetted professionals</li>
                                <li>✓ Pay per booking</li>
                            </ul>
                            <a href="#/services" className="secondary-cta cta-button" style={{ backgroundColor: 'transparent', color: '#14b8a6' }}>Book Now</a>
                        </div>
                        <div className="pricing-card popular">
                            <p className="plan-name">Monthly</p>
                            <p className="price">$199<span className="period">/mo</span></p>
                            <ul className="features">
                                <li>✓ 4 bookings per month</li>
                                <li>✓ Priority scheduling</li>
                                <li>✓ 10% off extra services</li>
                                <li>✓ Dedicated support</li>
                            </ul>
                            <a href="#/services" className="cta-button">Choose Plan</a>
                        </div>
                        <div className="pricing-card">
                            <p className="plan-name">Annual</p>
                            <p className="price">$1999<span className="period">/yr</span></p>
                            <ul className="features">
                                <li>✓ Unlimited bookings</li>
                                <li>✓ Same-day service</li>
                                <li>✓ 20% off extra services</li>
                                <li>✓ Premium support</li>
                            </ul>
                            <a href="#/services" className="secondary-cta cta-button" style={{ backgroundColor: 'transparent', color: '#14b8a6' }}>Choose Plan</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="section bg-white">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>From our Blog</h2>
                        <p>Tips, tricks, and stories to help you manage your home.</p>
                    </div>
                    <div className="grid grid-cols-md-2 grid-cols-lg-3">
                        <a href="#/blog" className="blog-card">
                            <img src="https://placehold.co/600x400/e0f2f1/1a202c?text=Blog" alt="Blog post thumbnail" loading="lazy" />
                            <div className="blog-card-content">
                                <p className="category">Home Cleaning</p>
                                <h3>5 Cleaning Hacks That Will Change Your Life</h3>
                                <p>Discover simple tricks to keep your home sparkling with minimal effort...</p>
                            </div>
                        </a>
                        <a href="#/blog" className="blog-card">
                            <img src="https://placehold.co/600x400/e0f2f1/1a202c?text=Blog" alt="Blog post thumbnail" loading="lazy" />
                            <div className="blog-card-content">
                                <p className="category">Cooking</p>
                                <h3>Easy Weeknight Meals for Busy Professionals</h3>
                                <p>Tired of takeout? Here are 3 healthy and delicious recipes you can make in under 30 minutes...</p>
                            </div>
                        </a>
                        <a href="#/blog" className="blog-card">
                            <img src="https://placehold.co/600x400/e0f2f1/1a202c?text=Blog" alt="Blog post thumbnail" loading="lazy" />
                            <div className="blog-card-content">
                                <p className="category">Grooming</p>
                                <h3>How to Maintain the Perfect Haircut at Home</h3>
                                <p>Learn from our expert stylists how to keep your hair looking fresh between appointments...</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why people love GetItHome</h2>
                        <p>Real stories from our valued customers.</p>
                    </div>
                    <div className="grid grid-cols-lg-3">
                        <div className="testimonial-card">
                            <p>"This is a game-changer. I got the best haircut of my life without leaving my living room. The process was seamless and the barber was so professional."</p>
                            <div className="testimonial-author">
                                <img src="https://placehold.co/48x48/E0E7FF/4F46E5?text=A" alt="Alex M." />
                                <div>
                                    <p className="author-name">Alex Morgan</p>
                                    <p className="author-title">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p>"As a busy mom, having a chef meal prep for the week has saved me so much time and stress. The food is delicious and healthy. Absolutely worth it!"</p>
                            <div className="testimonial-author">
                                <img src="https://placehold.co/48x48/E0E7FF/4F46E5?text=S" alt="Sarah K." />
                                <div>
                                    <p className="author-name">Sarah Kim</p>
                                    <p className="author-title">Marketing Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p>"The cleaning service was incredible. My apartment has never looked better. The attention to detail was amazing. I've already booked my next session."</p>
                            <div className="testimonial-author">
                                <img src="https://placehold.co/48x48/E0E7FF/4F46E5?text=D" alt="David L." />
                                <div>
                                    <p className="author-name">David Lee</p>
                                    <p className="author-title">Freelance Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section final-cta-section">
                <div className="container">
                    <div className="final-cta-card">
                        <h2>Ready to reclaim your time?</h2>
                        <p>Join thousands of happy customers and experience the future of home services today.</p>
                        <a href="#/services" className="cta-button">Find Your Perfect Expert</a>
                    </div>
                </div>
            </section>
        </>
    )
}
