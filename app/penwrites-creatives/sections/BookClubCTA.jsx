"use client";
import { LibraryBig } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/app/components/motion'

export default function BookClubCTA() {
  return (
    <section id="bookclub" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <motion.div className="rounded-2xl overflow-hidden border border-[#6b4f3a]/20 bg-white/70 backdrop-blur-sm" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-0">
            <motion.div className="p-8 sm:p-12" variants={fadeInUp}>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#6b4f3a]">Join the community</div>
              <h2 className="mt-2 text-[30px] sm:text-[38px] font-heading font-semibold text-[#2b2a27]">AMAKA’S BOOK CLUB</h2>
              <p className="mt-4 text-sm leading-relaxed max-w-2xl">
                Amaka’s book club is a vibrant community for book lovers who are passionate about reading, meaningful conversations,
                and making positive impact. The club connects readers locally and globally, creating spaces, both virtual and physical,
                for members to share lessons, emotions and perspectives from diverse books.
              </p>
              <p className="mt-3 text-sm leading-relaxed max-w-2xl">
                The club is committed to social impact through literacy outreaches, school campaigns and corporate reading programs that
                reignite the culture of reading in an AI-driven world.
              </p>

              <div className="mt-6">
                <Link href="/abc" className="inline-flex items-center justify-center rounded-full bg-[#1e3a2a] text-white px-6 py-3 text-[13px] hover:opacity-90 transition gap-2">
                <span>
                  Visit Book Club
                </span>
                  <LibraryBig size={16} />
                </Link>
              </div>
            </motion.div>
            <motion.div className="relative min-h-[260px] md:min-h-full" variants={fadeInUp}>
              <div className="absolute inset-0" style={{ background: 'radial-gradient(1200px 600px at 0% 100%, rgba(107, 79, 58, 0.1), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(107, 79, 58, 0.1), transparent 60%)' }} />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/bookclub.png)" }}
              />
              <div className="absolute inset-0 bg-[#3b2a21]/40" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
