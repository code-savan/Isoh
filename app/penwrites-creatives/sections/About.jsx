import { PenTool, ShieldCheck, Timer, BookOpenText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4 py-20">
        <div className="flex md:gap-10 items-center md:flex-row flex-col-reverse gap-3">
          <div className="relative md:w-2/6 w-full">
            <div className="relative aspect-[1/1] rounded-[28px] overflow-hidden shadow-sm border border-[#6b4f3a]/20">
              <img src="https://images.unsplash.com/photo-1592693281996-fbff6b85041c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt="Reading together" className="h-full w-full object-cover" />
            </div>
            <div className="absolute left-4 bottom-4 z-10 rounded-2xl bg-white/85 backdrop-blur border border-[#6b4f3a]/20 p-3 pr-5 shadow-sm flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-[#6b4f3a]/20 border border-white" />
                <div className="h-7 w-7 rounded-full bg-[#6b4f3a]/30 border border-white" />
                <div className="h-7 w-7 rounded-full bg-[#6b4f3a]/40 border border-white" />
              </div>
              <div className="text-xs">
                <div className="font-medium">Join our active writing community</div>
                <div className="opacity-70">Readers and thinkers worldwide</div>
              </div>
            </div>
          </div>
          <div className="md:w-4/6 w-full">
            <div className="rounded-[28px] bg-white/70 p-6 sm:p-10">
              <div className="">
                {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#6b4f3a]/10 text-[#6b4f3a] px-3 py-1 text-[11px] uppercase tracking-[0.25em]">Who we are</div> */}
                <h2 className="mt-3 text-[32px] sm:text-[36px] font-heading font-semibold text-[#2b2a27] leading-tight text-left">Where structured writing <br /> meets clarity</h2>
                <p className="mt-4 text-sm leading-relaxed max-w-2xl mx-auto text-black/70 text-left">
                Penwrites Creativesis a premier academic and professional
writing consultancy, dedicated to delivering exceptional
structure, precision, and professionalism in all writing and
research projects. <br /> We specialize in crafting tailored solutions
across a wide spectrum of industries, including; business
proposal, academic projects, corporate filing, content writing,
etc. <br />
Our expertise empowers clientsto present theirideas with
clarity and authority, ensuring impactful communication in
every document.
                </p>
                <a href="#services" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1e3a2a] text-white px-6 py-3 text-[13px] hover:opacity-90 transition">Read More</a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#6b4f3a]/20 bg-white/80 p-5 flex items-start gap-3">
                  <span className="inline-flex h-10 w-18 items-center justify-center rounded-lg bg-[#6b4f3a]/10 text-[#6b4f3a]"><ShieldCheck className="h-5 w-5" /></span>
                  <div>
                    <div className="text-base font-semibold">Precision & Clarity</div>
                    <p className="mt-1 text-sm leading-relaxed opacity-80">Research-grounded writing that is structured and easy to digest.</p>
                  </div>
                </div>
                <div className="rounded-xl border border-[#6b4f3a]/20 bg-white/80 p-5 flex items-start gap-3">
                  <span className="inline-flex h-10 w-18 items-center justify-center rounded-lg bg-[#6b4f3a]/10 text-[#6b4f3a]"><Timer className="h-5 w-5" /></span>
                  <div>
                    <div className="text-base font-semibold">On‑time Delivery</div>
                    <p className="mt-1 text-sm leading-relaxed opacity-80">Deadline-driven processes with collaborative revisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
