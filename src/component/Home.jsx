import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Features from './Features'
import Footer from './Footer'
import Testimonials from './Testimonials'
import CTASection from './CTASection'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection />
        <Features />
        <Testimonials />
        <CTASection />
        <Footer />
    </div>
  )
}
