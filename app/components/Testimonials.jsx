"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

const TESTIMONIALS = [
  {
    name: "Ebenezer Oluwaseyi Favour",
    title: "",
    quote:
      "I highly recommend this business, they have good customer service and are attentive to needs of their clients. They have good knowledge of the different citation types and know how to write both academic and non academic styles.",
  },
  {
    name: "Tosin",
    title: "PR Executive",
    quote:
      "I had a great experience working with Penwrite Creatives for my article writing needs. While I know that articles typically take up to a week to complete, I was in urgent need of three articles and was impressed when they were delivered within just 24 hours. The quality of the writing was excellent, and I'm pleased to share that the articles have been published in three major Nigerian newspapers: Daily Sun, Vanguard, and The Nation. I will definitely return to Penwrite Creatives for future projects.",
  },
  {
    name: "Chika",
    title: "Founder, JasEssentials Digital Marketing",
    quote:
      "Working with PenWrites Creative has been an exceptional experience. As a digital marketing agency, we often partner with professionals who can translate business ideas into compelling, legally sound documents, and PenWrites Creative stands out for her precision, clarity, and depth of understanding.\n\nHer ability to merge legal expertise with business communication is rare. Every proposal, agreement, and corporate document she crafts reflects a strong grasp of both structure and strategy. What truly sets them apart is their professionalism, attention to detail, and the ease of collaboration throughout each project.\n\nFor any business owner, startup, or professional looking for reliable, articulate, and legally grounded writing services, I highly recommend PenWrites. They don’t just write, they position your brand and protect your interests through words.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#f9f9f9]">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center max-w-2xl mx-auto" variants={fadeInUp}>
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#201c17]">Testimonials</div>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-heading font-semibold text-[#1e1a16]">What our clients say</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name + t.title}
              className="rounded-xl shadow-sm  bg-white/70 backdrop-blur-sm p-6 h-fit"
              variants={fadeInUp}
            >
              <blockquote className="text-xs leading-relaxed text-black/80 whitespace-pre-line">“{t.quote}”</blockquote>
              <figcaption className="mt-4">
                <div className="text-sm font-semibold text-[#1e1a16]">{t.name}</div>
                {t.title ? (
                  <div className="text-xs opacity-70">{t.title}</div>
                ) : null}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
