"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";
import { Scale, Shield, Copyright, FileText, PenTool, Building2 } from "lucide-react";

const serviceCards = [
  {
    icon: Scale,
    title: "Dispute Resolution",
    body:
      "Proactive, cost‑effective mechanisms to resolve conflicts with minimal disruption — including litigation and ADR expertise.",
  },
  {
    icon: Shield,
    title: "Corporate & Regulatory Compliance",
    body:
      "Navigate Nigeria’s regulatory landscape with confidence through advisory, registrations with regulators, and risk assessment.",
  },
  {
    icon: Copyright,
    title: "Entertainment & IP Law",
    body:
      "Specialised support for creators and tech companies: contract review, IP protection, and guidance on streaming rights.",
  },
  {
    icon: FileText,
    title: "Corporate Filing & Licenses",
    body:
      "Efficient incorporations, post‑incorporation filings, and operating licences to keep your business compliant and recognised.",
  },
  {
    icon: PenTool,
    title: "Document Preparation & Legal Writing",
    body:
      "Precise, professional documents — contracts, property documents, legal opinions, research, and academic writing.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property Law",
    body:
      "End‑to‑end support for acquisition, development and management: due diligence, title verification, drafting and perfection.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#0a0a0a]">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col items-start justify-center sticky top-30">
            <motion.div className="inline-block rounded-full bg-white text-black font-semibold px-4 py-1 text-xs mb-6" variants={fadeInUp}>
              OUR LEGAL SERVICES
            </motion.div>
            <motion.h2 className="mb-4 text-white text-[30px]" variants={fadeInUp}>
              Practical, business‑minded counsel across disputes, compliance, IP and property
            </motion.h2>
            <motion.p className="max-w-[520px] text-white/80 text-[14px]" variants={fadeInUp}>
              We deliver strategic legal support tailored to how you operate — helping you prevent risk, unlock opportunities and move forward with clarity.
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {serviceCards.map(({ icon: Icon, title, body }, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
                variants={fadeInUp}
              >
                <div className="h-10 w-10 rounded-lg bg-black/80 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={18} />
                </div>
                <h3 className="mb-2">{title}</h3>
                <p className="text-[14px] text-[#4b4b4b]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
