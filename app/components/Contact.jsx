"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="space-y-6" variants={fadeInUp}>
          <div className="inline-block rounded-full bg-black text-white px-4 py-1 text-[10px] tracking-[0.12em]">
            DON'T BE SHY
          </div>
          <h2 className="text-[40px] leading-[1.1]">Reach out</h2>
          <p className="max-w-[500px] text-[#4b4b4b] ">
            Have questions or need legal assistance? Contact us today—our team is here to help. Whether by phone, email, or through our online form, we're ready to listen and provide the support you need.
          </p>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} /><span className="text-[14px]">+234-816-306-6508</span></li>
            <li className="flex items-center gap-3"><Mail size={16} /><span className="text-[14px]">Isohprecious99@gmail.com</span></li>
            <li className="flex items-center gap-3"><MapPin size={16} /><span className="text-[14px]">Kingfem Plaza, Mabushi, FCT, Abuja</span></li>
          </ul>
        </motion.div>
        <motion.div className="rounded-[12px] overflow-hidden border border-black/10" variants={fadeInUp}>
          <iframe
            title="Office location"
            className="w-full h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.232!2d7.333!3d9.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5b2e0b4f5d%3A0x2f8a5b1f4a5c7c!2sAbuja!5e0!3m2!1sen!2sNG!4v1700000000000">
          </iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.751588477289!2d7.456833075266094!3d9.086379890977275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b77ebdbc4a9%3A0x5b94975c44a886f!2sKingfem%20plaza%2CAbuja!5e0!3m2!1sen!2sng!4v1759926826508!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
