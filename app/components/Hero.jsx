"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden bg-[#f9f9f9] h-fit antialiased">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 py-24 sm:py-28 text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-xs uppercase tracking-[0.2em] text-[#201c17] mb-6 font-bold" variants={fadeInUp}>
          Securing your future
        </motion.div>
        <motion.h1
          className="font-semibold tracking-[-0.02em] mb-6 text-[40px] leading-[1.1] sm:text-[60px] md:text-[60px] max-w-4xl mx-auto text-[#1e1a16] opacity-90"
          variants={fadeInUp}
        >
          Legal solutions for your business that you can rely on
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-[16px] sm:text-[18px] text-black mb-10 font-medium"
          variants={fadeInUp}
        >
          Our legal solutions for you are designed to provide reliable, comprehensive support at every stage of your property transactions.
        </motion.p>
        <motion.div className="flex items-center justify-center gap-4" variants={fadeInUp}>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full bg-[#1e1a16] text-white px-6 py-3 text-[13px] hover:opacity-90 transition font-medium gap-2"
          >
            View Cases <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.link/8knayl"
            className="inline-flex items-center justify-center rounded-full border border-[#1e1a16] px-6 py-3 text-[13px]  text-[#1e1a16] transition font-medium"
          >
            Get Started
          </a>
        </motion.div>

        <motion.div className="flex items-start justify-center gap-4 mt-10 h-[452px]" variants={fadeInUp}>
        <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero image" width={500} height={500} className="rounded-xl object-cover w-3/5" />
        <Image src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero image" width={500} height={500} className="rounded-xl object-cover object- w-2/5 h-full" />
            </motion.div>
      </motion.div>
      <BackgroundBeams />
    </section>
  );
}
