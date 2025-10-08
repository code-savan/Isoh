"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";
import Image from "next/image";
import { Scale, Star, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Black wood background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <motion.div
        className="max-w-[1000px] mx-auto px-4 py-36 text-center text-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="inline-block rounded-full bg-white text-black font-semibold px-4 py-1 text-xs mb-6" variants={fadeInUp}>
          ABOUT US
        </motion.div>
        <motion.h2 className="mb-6 text-white text-[30px]" variants={fadeInUp}>Who are we</motion.h2>
        <motion.p className="text-white/70 text-[20px] font-semibold max-w-3xl mx-auto" variants={fadeInUp}>
          P.A. Isoh Legal Consultants is a full-service law firm based in Nigeria offering dispute resolution, corporate and regulatory compliance, entertainment & IP law, filings and licences, legal writing, and real estate services. Founded on excellence, integrity and professionalism, we deliver practical results for startups, corporations, entrepreneurs and individuals.
        </motion.p>
        <motion.div className="mt-12 grid md:grid-cols-3 gap-6" variants={fadeInUp}>
          <div className="rounded-[16px] bg-white/90 text-black px-4 py-3 flex items-center gap-4 shadow-[0_4px_0_#0000001a]">
            <div className="h-14 w-14 rounded-xl bg-black/80 flex items-center justify-center">
              <Scale className="text-white" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="text-xs tracking-wide text-[#201c17] font-semibold">NUMBER OF CLIENTS</div>
              <div className="text-2xl font-semibold">15+</div>
            </div>
          </div>
          <div className="rounded-[16px] bg-white/90 text-black px-4 py-3 flex items-center gap-4 shadow-[0_4px_0_#0000001a]">
            <div className="h-14 w-14 rounded-xl bg-black/80 flex items-center justify-center">
              <Star className="text-white" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="text-xs tracking-wide text-[#201c17] font-semibold">YEARS OF EXPERIENCE</div>
              <div className="text-2xl font-semibold">12+</div>
            </div>
          </div>
          <div className="rounded-[16px] bg-white/90 text-black px-4 py-3 flex items-center gap-4 shadow-[0_4px_0_#0000001a]">
            <div className="h-14 w-14 rounded-xl bg-black/80 flex items-center justify-center">
              <Users className="text-white" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="text-xs tracking-wide text-[#201c17] font-semibold">TEAM MEMBERS</div>
              <div className="text-2xl font-semibold">19</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
