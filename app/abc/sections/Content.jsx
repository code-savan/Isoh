"use client";
import React from 'react'
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/components/motion";
import { BookOpenText, CalendarDays, Users, HandHeart, Globe2, FileSignature, Phone, LibraryBig } from "lucide-react";
import Button from '@/app/components/ui/whatsapp-button';

const copy = {
  vision:
    "To build a community that cultivates a lifelong love for books and inspires transformative conversations that impact lives across generations and borders.",
  scope: [
    "Monthly virtual book reviews and discussion via Zoom",
    "Quarterly in-person meet-ups with fun activities, networking and guest speakers.",
    "School and community literacy outreaches",
    "Online community (Instagram & LinkedIn)",
    "Collaborative projects with authors",
  ],
  outreach: [
    "2–3 outreaches per year to public primary & secondary schools",
    "Sponsorship and partnership with brands and NGOs that support education.",
  ],
  guideline: [
    "Books are selected by member polls",
    "A leader will be assigned for each virtual meeting",
    "Membership is via a signup form on website",
  ],
  phone: "08163066508",
};

const Content = () => {
  return (
    <div>
      {/* Single dark section with all content and mini footer */}
      <section className="bg-[#0f0f0f] text-white/90">
        <div className="mx-auto md:px-14 px-6 md:py-16 py-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 md:space-y-8 space-y-6 md:gap-10 gap-4 items-start">
            <div className="">

            <motion.div className="text-[16px] cursor-pointer uppercase tracking-[0.25em] font-extrabold
      text-[#c5936d] inline-flex items-center gap-2 border-b border-b-[#6b4f3a85] pb-1"
      style={{ fontFamily: 'var(--font-script)', fontWeight: '700' }} variants={fadeInUp}>
              <LibraryBig size={16} /> Amaka's Book Club
            </motion.div>
              <p className="mt-3 text-xs opacity-80 max-w-[320px]" style={{ fontFamily: 'var(--font-poppins)' }}>
              The club is committed to social impact through literacy outreaches, school campaigns
and corporate reading programs that reignite the culture of reading in an AI-driven
world.
              </p>
                <div className="mt-4">
              <Button />
                </div>
            </div>


            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <h3 className="text-xl font-semibold text-white/90">Scope of Engagement</h3>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-xs opacity-90 text-white/70" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {copy.scope.map((it) => (<li key={it}>{it}</li>))}
                </ul>
              </motion.div>



              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <h3 className="text-xl font-semibold text-white/90">Club’s Guideline</h3>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-xs opacity-90 text-white/70" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {copy.guideline.map((it) => (<li key={it}>{it}</li>))}
                </ul>
              </motion.div>
          </div>





          <div className="grid grid-cols-1 md:grid-cols-3 md:space-y-8 space-y-6 md:gap-10 gap-4 items-start">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <h3 className="text-xl font-semibold text-white/90">Vision</h3>
                <p className="mt-3 text-xs opacity-90 leading-relaxed text-white/70">{copy.vision}</p>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <h3 className="text-xl font-semibold text-white/90">Outreach</h3>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-xs opacity-90 text-white/70" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {copy.outreach.map((it) => (<li key={it}>{it}</li>))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <h3 className="text-xl font-semibold text-white/90">Contact Information</h3>
                <div className="mt-3 text-xs opacity-90 inline-flex items-center gap-2 text-white/70" style={{ fontFamily: 'var(--font-poppins)' }}><Phone className="h-4 w-4" /> Phone number: {copy.phone}</div>
              </motion.div>

          </div>




              {/* Mini footer */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <a href="#top" className="text-xs underline underline-offset-4 opacity-80 hover:opacity-100">Back to top</a>
              2025 © Amaka's Book Club
              </motion.div>
        </div>
      </section>

      {/* The separate sections below were merged into the dark accordion section above as requested. */}
    </div>
  )
}

export default Content
// md:grid-cols-[360px_1fr]
