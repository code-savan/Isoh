import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Founder from './sections/Founder'
import Services from './sections/Services'
import Testimonial from './sections/Testimonial'
import ContactInfo from './sections/ContactInfo'
import Conclusion from './sections/Conclusion'

export const metadata = {
  title: 'Penwrites Creatives | Business Portfolio',
  description: 'Academic and professional writing consultancy delivering structure, precision and professionalism.',
}

export default function PenwritesCreativesPage() {
  return (
    <main className="min-h-screen" style={{ fontFamily: 'var(--font-poppins)', backgroundColor: '#f2e7dc' }}>
      <Hero />
      <About />
      <Founder />
      <Services />
      <Testimonial />
      <ContactInfo />
      {/* <Conclusion /> */}
    </main>
  )
}
