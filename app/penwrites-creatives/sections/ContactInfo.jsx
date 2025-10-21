"use client";
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/app/components/motion'

export default function ContactInfo() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#0f0f0f] text-white/80">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <motion.div variants={fadeInUp}>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#d9a074]">Contact us</div>
            <h2 className="mt-2 text-[36px] sm:text-[44px] font-heading font-semibold text-[#d9d4c5] leading-tight">Have questions? <br /> Get in touch!</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-xl">
              We are available to discuss your writing and research needs. Reach out and we’ll respond promptly.
            </p>
            <a href="mailto:penwritescreatives@gmail.com" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1e3a2a] text-white px-6 py-3 text-[13px] hover:opacity-90 transition">
              Get in Touch
            </a>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={fadeInUp}>
            <div className="rounded-xl p-5 bg-white/20 backdrop-blur-sm">
              <div className="text-xs opacity-70">Phone</div>
              <div className="mt-1 text-sm">+234-816-306-6508</div>
            </div>
            <div className="rounded-xl p-5 bg-white/20 backdrop-blur-sm">
              <div className="text-xs opacity-70">Email</div>
              <div className="mt-1 text-sm">penwritescreatives@gmail.com</div>
            </div>
            <div className="rounded-xl p-5 bg-white/20 backdrop-blur-sm">
              <div className="text-xs opacity-70">Instagram</div>
              <div className="mt-1 text-sm">@penwritescreatives</div>
            </div>
            <div className="rounded-xl p-5 bg-white/20 backdrop-blur-sm">
              <div className="text-xs opacity-70">LinkedIn</div>
              <div className="mt-1 text-sm">Penwrites Creatives</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 w-full overflow-hidden rounded-xl bg-white/20 backdrop-blur-sm" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.232!2d7.333!3d9.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5b2e0b4f5d%3A0x2f8a5b1f4a5c7c!2sAbuja!5e0!3m2!1sen!2sNG!4v1700000000000"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
