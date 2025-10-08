"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { fadeInUp, staggerContainer } from "./motion";

export default function CTA() {
  return (
    <section className="w-full bg-white my-20">
      <motion.div
        className="max-w-[1200px] mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative overflow-hidden rounded-[24px] bg-black text-white">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1651647232601-fbea5b6cca0d?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CTA background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Decorative right lines */}
          <div className="pointer-events-none absolute -right-10 top-0 h-full w-[55%] opacity-60">
            <svg viewBox="0 0 600 300" className="h-full w-full" fill="none">
              <path d="M0 300 C90 210 190 190 290 140 C390 90 490 50 600 -600" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
              <path d="M10 300 C100 220 200 200 300 150 C400 100 500 60 600 -550" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
              <path d="M20 300 C110 230 210 210 310 160 C410 110 510 70 600 -400" stroke="white" strokeOpacity="0.12" strokeWidth="2" />
              <path d="M30 300 C120 240 220 220 320 170 C420 120 520 80 600 -200" stroke="white" strokeOpacity="0.1" strokeWidth="2" />
              <path d="M40 300 C130 250 230 230 330 180 C430 130 530 90 600 -100" stroke="white" strokeOpacity="0.08" strokeWidth="2" />
              <path d="M50 300 C140 260 240 240 340 190 C440 140 540 100 600 30" stroke="white" strokeOpacity="0.12" strokeWidth="2" />
              <path d="M60 300 C150 270 250 250 350 200 C450 150 550 110 600 100" stroke="white" strokeOpacity="0.08" strokeWidth="2" />
              <path d="M70 300 C160 280 260 260 360 210 C460 160 560 120 600 200" stroke="white" strokeOpacity="0.08" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex items-center gap-10 px-6 sm:px-10 py-10 sm:py-14 relative z-20">
            <div className="hidden sm:flex items-center justify-center h-[72px] w-[72px] rounded-full bg-white/10 ring-2 ring-white/20">
              <div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center">
                <FileText size={22} />
              </div>
            </div>
            <div className="flex-1">
              <motion.h2 className="text-white/90 mb-3 text-[28px] sm:text-[40px] leading-[1.1]" variants={fadeInUp}>
                Schedule a free legal <br /> case evaluation
              </motion.h2>
              <motion.p className="text-white/70 md:max-w-[480px]" variants={fadeInUp}>
                Discuss your situation with an experienced attorney. Get clear guidance on your rights and options—no cost, no obligation.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black h-12 px-6 text-sm font-medium shadow hover:opacity-90 transition"
              >
                Schedule Now <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
