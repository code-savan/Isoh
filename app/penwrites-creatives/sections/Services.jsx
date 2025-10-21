"use client";
import { Briefcase, GraduationCap, FileText, Presentation, ClipboardList, FlaskConical, IdCard, UserRound, Building2, Palette, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/app/components/motion'

const services = [
  { title: 'Business Proposal', icon: Briefcase, desc: 'Persuasive, tailored proposals that communicate goals, strategies and financial plans.' },
  { title: 'Academic Projects', icon: GraduationCap, desc: 'Essays to dissertations with thorough research and format compliance.' },
  { title: 'Content Writing', icon: FileText, desc: 'SEO-optimized blog, web and social content in your brand voice.' },
  { title: 'Pitch Deck', icon: Presentation, desc: 'Compelling decks that communicate vision, market and projections to investors.' },
  { title: 'Business Plan', icon: ClipboardList, desc: 'Detailed plans covering strategy, market, competition and financial forecasts.' },
  { title: 'Research Projects', icon: FlaskConical, desc: 'End-to-end research services producing credible, organized, data-backed reports.' },
  { title: 'CVs & Cover Letters', icon: IdCard, desc: 'Tailored materials that highlight strengths and achievements to stand out.' },
  { title: 'Personal Statements', icon: UserRound, desc: 'Well-crafted statements that convey aspirations, motivations and goals.' },
  { title: 'Corporate Filing & Licensing', icon: Building2, desc: 'Company registration and compliance: CAC, PENCOM, NSITF, ITF, FIRS, BPP, SCUML, NEPC, permits and others.' },
  { title: 'Design', icon: Palette, desc: 'Designing flyers, book covers, and related collateral.' },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f5eee7]">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#6b4f3a]">What we do</div>
          <h2 className="mt-2 text-[36px] sm:text-[44px] font-heading font-semibold">Services Offered</h2>
        </div>
        {/* <p className="mt-4 text-sm leading-relaxed max-w-4xl text-center mx-auto">
          Business Proposal, Academic Projects, Content Writing, Pitch Deck, Business Plan, Research Project, CVs & Cover letters,
          Personal Statement, Corporate Filing and Licensing, and more.
        </p> */}
        <motion.div className="mt-8 rounded-2xl border border-[#6b4f3a]/20 bg-white/70 backdrop-blur-sm" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#6b4f3a]/15">
            {services.map((s) => (
              <motion.li key={s.title} className="group" variants={fadeInUp}>
                <div className="flex items-start gap-4 p-5 sm:p-6 transition-colors duration-200 hover:bg-[#6b4f3a]/5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#6b4f3a]/10 text-[#6b4f3a] flex-shrink-0">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold truncate">{s.title}</h3>
                      <ChevronRight className="h-5 w-5 text-[#6b4f3a]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-black/70">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
            <div className="text-[22px] font-semibold">24-72 hrs</div>
            <div className="text-xs opacity-70">Typical turnaround</div>
          </div>
          <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
            <div className="text-[22px] font-semibold">Multi-discipline</div>
            <div className="text-xs opacity-70">Law, business, academia</div>
          </div>
          <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
            <div className="text-[22px] font-semibold">Revisions</div>
            <div className="text-xs opacity-70">Collaborative edits</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#1e3a2a] text-white px-6 py-3 text-[13px] hover:opacity-90 transition">Request a quote</a>
        </div>
      </div>
    </section>
  )
}
