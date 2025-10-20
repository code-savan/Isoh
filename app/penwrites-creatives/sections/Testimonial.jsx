import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Francis Okoye Odinikpo', quote: 'Penwrites Creatives is very reliable and works hard to meet up with deadlines' },
  { name: 'Oluwaseyi Favour Ebenezer', quote: 'I love how intelligent and structured their work is' },
  { name: 'Joy Nkem-Onuh', quote: 'Penwrites Creatives definitely meets up with deadlines and delivers an amazing work' },
]

export default function Testimonial() {
  return (
    <section id="testimonials" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#6b4f3a]">Testimonials</div>
          <h2 className="mt-2 text-[36px] sm:text-[44px] font-heading font-semibold text-[#2b2a27]">Client’s feedback</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="border border-[#6b4f3a]/20 rounded-xl p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-[#eab308]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">{t.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6b4f3a]/30" />
          <span className="h-2 w-2 rounded-full bg-[#6b4f3a]" />
          <span className="h-2 w-2 rounded-full bg-[#6b4f3a]/30" />
        </div>
      </div>
    </section>
  )
}
