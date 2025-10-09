import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Login from './components/Login'
import Footer from './components/Footer'

const routes = {
    '': Home,
    '#/': Home,
    '#/home': Home,
    '#/blog': Blog,
    '#/howitworks': HowItWorks,
    '#/services': Services,
    '#/login': Login,
}

export default function App() {
    const [hash, setHash] = useState(window.location.hash || '#/')

    useEffect(() => {
        const onHash = () => setHash(window.location.hash || '#/')
        window.addEventListener('hashchange', onHash)
        return () => window.removeEventListener('hashchange', onHash)
    }, [])

    const Page = routes[hash] || Home

    return (
        <>
            <Navbar />
            <main>
                <Page />
            </main>
            <Footer />
        </>
    )
}
