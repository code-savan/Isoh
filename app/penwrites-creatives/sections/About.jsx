import { PenTool } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className=" gap-10 items-center">
          <div>
            <div className="flex w-fit items-center gap-2 rounded-full bg-[#6b4f3a]/10 text-[#6b4f3a] px-3 py-1 text-[11px] uppercase tracking-[0.25em] mx-auto text-center">Who we are</div>
            <h2 className="mt-3 text-[36px] sm:text-[44px] font-heading font-semibold text-[#2b2a27] text-center">Where structured writing meets clarity</h2>
            <p className="mt-4 text-sm leading-relaxed text-center mx-auto">
            Penwrites Creativesis a premier academic and professional
writing consultancy, dedicated to delivering exceptional
structure, precision, and professionalism in all writing and
research projects. We specialize in crafting tailored solutions
across a wide spectrum of industries, including; business
proposal, academic projects, corporate filing, content writing,
etc.
Our expertise empowers clientsto present theirideas with
clarity and authority, ensuring impactful communication in
every document.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm w-fit mx-auto">
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> Tailored proposals & research</li>
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> Academic rigor, professional tone</li>
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> On-time delivery</li>
              <li className="inline-flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#6b4f3a]" /> Multi-industry experience</li>
            </ul>

            {/* <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
                <div className="text-[28px] font-semibold">200+</div>
                <div className="text-xs opacity-70">Projects</div>
              </div>
              <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
                <div className="text-[28px] font-semibold">98%</div>
                <div className="text-xs opacity-70">On-time</div>
              </div>
              <div className="rounded-xl bg-white/70 border border-[#6b4f3a]/20 p-4">
                <div className="text-[28px] font-semibold">4.9</div>
                <div className="text-xs opacity-70">Rating</div>
              </div>
            </div> */}
          </div>

            {/* <div className="gap-4 w-full flex items-center justify-center"> */}
          {/* <div className="grid grid-cols-2 border gap-4">

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Reading and research" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Reading and research" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div className="grid grid-cols-2 border gap-4">

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Reading and research" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Reading and research" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div> */}
          {/* <PenTool className="h-[200px] w-[200px] " /> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
