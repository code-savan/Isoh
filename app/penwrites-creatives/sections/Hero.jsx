"use client";
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, PenTool, BookOpenText, ScrollText, Users, Box, AtSign, Workflow, PenBox, User } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/app/components/motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop"
        alt="Writing activity background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#3b2a21]/60" />

      <Link href="/" aria-label="Back to home" className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 text-white hover:opacity-90">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur">
          <ArrowLeft className="h-5 w-5" />
        </span>
        <span className="hidden sm:inline text-xs">Back</span>
      </Link>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-24 min-h-screen flex items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="text-xs uppercase tracking-[0.25em] text-white/80 inline-flex items-center gap-2" variants={fadeInUp}>
            <PenTool className="h-4 w-4" /> PENWRITES CREATIVES
          </motion.p>
          <motion.h1 className="mt-4 text-white font-heading font-extrabold tracking-tight text-[44px] sm:text-[64px] md:text-[72px] leading-[1.1] max-w-4xl" variants={fadeInUp}>
            BUSINESS PORTFOLIO
          </motion.h1>
          <motion.p className="mt-5 max-w-2xl text-white/95 text-base leading-relaxed" variants={fadeInUp}>
            Academic and professional writing consultancy delivering structure, precision and professionalism.
          </motion.p>

          <motion.nav aria-label="Table of contents" className="mt-10" variants={fadeInUp}>
            <ul className="flex flex-wrap gap-5 text-[12px] text-white/90">
              <li className="inline-flex items-center gap-1"><Users className="h-4 w-4" /><a href="#about" className="underline-offset-4 hover:underline">About us</a></li>
              <li className="inline-flex items-center gap-1"><User className="h-4 w-4" /><a href="#founder" className="underline-offset-4 hover:underline">Our Founder</a></li>
              <li className="inline-flex items-center gap-1"><PenBox className="h-4 w-4" /><a href="#services" className="underline-offset-4 hover:underline">Services offered</a></li>
              <li className="inline-flex items-center gap-1"><Box className="h-4 w-4" /><a href="#testimonials" className="underline-offset-4 hover:underline">Testimonials</a></li>
              <li className="inline-flex items-center gap-1"><AtSign className="h-4 w-4" /><a href="#contact" className="underline-offset-4 hover:underline">Contact information</a></li>
              {/* <li className="inline-flex items-center gap-1"><ScrollText className="h-4 w-4" /><a href="#conclusion" className="underline-offset-4 hover:underline">Conclusion</a></li> */}
            </ul>
          </motion.nav>
        </motion.div>
      </div>
    </section>
  )
}
