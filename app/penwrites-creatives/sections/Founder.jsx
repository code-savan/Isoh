"use client";
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/app/components/motion'

export default function Founder() {
  return (
    <section id="founder" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <motion.div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-10 items-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <motion.div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-[#6b4f3a]/20 bg-white/70" variants={fadeInUp}>
            <img src="/founder.jpeg" alt="Founder portrait" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#6b4f3a]">Our Founder</div>
            <h2 className="mt-2 text-[32px] sm:text-[40px] font-heading font-semibold text-[#2b2a27]">Precious Amaka Isoh</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-2xl text-black/70">
            Precious Amaka Isoh is a seasoned legal practitioner with a specialized focus on
academic and professional writing, as well asresearch project managment.
With a strong background in law,she providestailored solutionsto clientsin need of
expert legalresearch, professional writing and academic support.
<br />
Precious has worked with law firms, universities and private professionalsto produce
high-quality, well-researched documents and papersthat meetrigorousstandards.
Known for her meticulous attention to detail and commitment to deadlines, Precious
combineslegal expertise with academic rigorto deliver exceptional written content
across a variety of legal and professional fields.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> Legal research and analysis</li>
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> Academic supervision and editing</li>
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> Professional proposals and filings</li>
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> Deadline-driven delivery</li>
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
                <div className="text-[22px] font-semibold">3+ yrs</div>
                <div className="text-xs opacity-70">Experience</div>
              </div>
              <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
                <div className="text-[22px] font-semibold">25+</div>
                <div className="text-xs opacity-70">Clients</div>
              </div>
              <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
                <div className="text-[22px] font-semibold">Top</div>
                <div className="text-xs opacity-70">Quality</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
