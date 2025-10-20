import { Briefcase, GraduationCap, FileText, Presentation, ClipboardList, FlaskConical, IdCard, UserRound, Building2, Palette } from 'lucide-react'

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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-[#6b4f3a]/20 rounded-xl p-5 bg-white/70 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#6b4f3a]/10 text-[#6b4f3a]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

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
