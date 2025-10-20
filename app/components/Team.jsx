"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";
import { Award, Users, Calendar } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="w-full bg-[#f9f9f9]">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="relative h-[600px] w-full overflow-hidden rounded-[16px] ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]" variants={fadeInUp}>
          <Image src="/isoh.jpeg" alt="P. A. Isoh" fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 text-[#1c1c1c] px-3 py-1 text-xs font-medium shadow">Founder</div>
        </motion.div>
        <motion.div variants={fadeInUp}>
          {/* <h2 className="mb-2"></h2> */}
          <div className="inline-block rounded-full bg-black text-white px-4 py-1 text-[10px] tracking-[0.12em] mb-2">
          LET’S MEET THE FOUNDER
          </div>
          <h3 className="mb-1 text-[40px] leading-tight">Precious Amaka <br /> ISOH, ESQ</h3>
          <p className="text-[#201c17] mb-2 font-medium">- PRINCIPAL FOUNDER</p>
          <p className=" text-[#4b4b4b] mb-6 font-medium">
            We are committed to excellence, integrity, and delivering practical solutions. Our approach blends meticulous legal analysis with commercial awareness to achieve outcomes that matter.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-sm">
              <Award size={16} />
              <span>3+ Years Experience</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-sm">
              <Users size={16} />
              <span>15+ Satisfied Clients</span>
            </div>
          </div>
          <a
            href="https://wa.link/8knayl"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            <Calendar size={16} /> Book a Consultation
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
