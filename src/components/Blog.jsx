import React, { useState } from 'react'

const POSTS = [
    { id: 1, category: 'Home Cleaning', title: '5 Cleaning Hacks That Will Change Your Life', excerpt: 'Discover simple tricks to keep your home sparkling with minimal effort...', image: 'https://placehold.co/600x400/e0f2f1/1a202c?text=Blog', content: '<p>Cleaning doesn\'t have to be a chore. With these 5 simple hacks, you can keep your home sparkling with minimal effort. From using vinegar to clean glass to organizing with baskets, these tips will transform your cleaning routine.</p>' },
    { id: 2, category: 'Cooking', title: 'Easy Weeknight Meals for Busy Professionals', excerpt: 'Tired of takeout? Here are 3 healthy and delicious recipes...', image: 'https://placehold.co/600x400/e0f2f1/1a202c?text=Blog', content: '<p>Tired of takeout? Here are 3 healthy and delicious recipes you can make in under 30 minutes. Perfect for busy weeknights when you want something nutritious but don\'t have hours to spend in the kitchen.</p>' },
    { id: 3, category: 'Grooming', title: 'How to Maintain the Perfect Haircut at Home', excerpt: 'Learn from our expert stylists how to keep your hair looking fresh...', image: 'https://placehold.co/600x400/e0f2f1/1a202c?text=Blog', content: '<p>Learn from our expert stylists how to keep your hair looking fresh between appointments. With the right tools and techniques, you can maintain your style and save money on frequent salon visits.</p>' }
]

export default function Blog() {
    const [modalPost, setModalPost] = useState(null)
    const [showAll, setShowAll] = useState(false)

    return (
        <section id="blog" className="bg-white">
            <div className="container">
                <div className="section-header text-center">
                    <h2>From our Blog</h2>
                    <p>Tips, tricks, and stories to help you manage your home.</p>
                </div>
                <div className="grid grid-cols-md-2 grid-cols-lg-3">
                    {(showAll ? POSTS : POSTS.slice(0, 3)).map(p => (
                        <article key={p.id} className="service-card" style={{ cursor: 'pointer' }} onClick={() => setModalPost(p)}>
                            <img src={p.image} alt={p.title} style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '1rem' }} loading="lazy" />
                            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#14b8a6', marginBottom: '0.5rem' }}>{p.category}</div>
                            <h3 style={{ marginBottom: '0.75rem' }}>{p.title}</h3>
                            <p>{p.excerpt}</p>
                        </article>
                    ))}
                </div>
                {!showAll && <div style={{ textAlign: 'center', marginTop: '2rem' }}><button className="cta-button" onClick={() => setShowAll(true)}>Show More Articles</button></div>}

                {modalPost && (
                    <div className="modal-backdrop" onClick={() => setModalPost(null)}>
                        <div className="modal-content" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h2 style={{ margin: 0 }}>{modalPost.title}</h2>
                                    <button onClick={() => setModalPost(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#718096' }}>×</button>
                                </div>
                                <img src={modalPost.image} alt="" style={{ width: '100%', height: 'auto', maxHeight: 350, objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '1.5rem' }} />
                                <div dangerouslySetInnerHTML={{ __html: modalPost.content }} style={{ lineHeight: 1.6 }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
