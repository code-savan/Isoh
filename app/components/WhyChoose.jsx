"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

export default function WhyChoose() {
  return (
    <section id="why" className="w-full">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="mb-4">WHY CHOOSE US?</h2>
          <p>
            We offer in-depth expertise, a personalized approach, and a commitment to excellent results.
          </p>
        </motion.div>
        <motion.div className="rounded-[12px] border border-black/10 p-6 bg-white/60 backdrop-blur" variants={fadeInUp}>
          <div className="text-[#201c17] text-sm">SATISFIED CLIENTS</div>
          <div className="text-4xl font-semibold mt-2">15+</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
