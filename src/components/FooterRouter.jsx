import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3>GetItHome</h3>
                        <p>Expert home services, on demand.</p>
                    </div>
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Grooming</Link></li>
                            <li><Link to="/services">Cooking</Link></li>
                            <li><Link to="/services">Cleaning</Link></li>
                            <li><Link to="/services">All Services</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 GetItHome, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

