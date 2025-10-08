"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-[#1c1c1c] border-t border-t-white/30">
      <div className="relative max-w-[1200px] mx-auto">
        <div
          className="absolute inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "radial-gradient(800px 400px at 10% 0%, rgba(0,0,0,0.03), transparent 60%), radial-gradient(700px 350px at 90% 20%, rgba(0,0,0,0.03), transparent 60%), #f5f5f5",
          }}
        />

        <motion.div
          className="py-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <motion.div className="flex items-center" variants={fadeInUp}>
              <Image src="/logo.png" alt="Firm logo" width={100} height={100} />
              {/* <span className="text-lg font-semibold tracking-tight leading-tight">P.A. ISOH LEGAL CONSULTANTS</span> */}
            </motion.div>
            <motion.div className="text-sm space-y-2 text-white/70" variants={fadeInUp}>
              <div className="font-semibold text-white">Company</div>
              <Link href="#about" className="hover:underline">About Us</Link><br />
              <Link href="#team" className="hover:underline">Meet the Team</Link><br />
              <Link href="#services" className="hover:underline">Insights</Link><br />
              <Link href="#contact" className="hover:underline">Contact</Link>
            </motion.div>
            <motion.div className="text-sm space-y-2 text-white/70" variants={fadeInUp}>
              <div className="font-semibold text-white">For Lawyers</div>
              <a href="#" className="hover:underline">Partners</a><br />
              <a href="#" className="hover:underline">Associates</a>
            </motion.div>
            <motion.div className="text-sm space-y-2 text-white/70" variants={fadeInUp}>
              <div className="font-semibold text-white">For Law Firms</div>
              <a href="#" className="hover:underline">Partner Search</a><br />
              <a href="#" className="hover:underline">Associate Placement</a><br />
              <a href="#" className="hover:underline">Consulting Services</a>
            </motion.div>
            <motion.div className="text-sm space-y-2 text-white/70" variants={fadeInUp}>
              <div className="font-semibold text-white">In‑House Legal</div>
              <a href="#" className="hover:underline">General Counsel Search</a><br />
              <a href="#" className="hover:underline">Legal Counsel Search</a>
            </motion.div>
          </div>
        </motion.div>

        <div className="border-t border-white/30" />

        <motion.div
          className="max-w-[1200px] mx-auto px-4 py-20 flex items-start justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p className="text-sm font-medium md:max-w-1/3 text-white/90" variants={fadeInUp}>
            P.A. Isoh Legal Consultants is a Nigeria‑based law firm providing dispute resolution, compliance, IP, filings, and real estate services. Our reputation is built on results and referrals.
          </motion.p>
          <motion.ul className="space-y-3 text-sm text-white/90" variants={fadeInUp}>
            <li className="flex items-center gap-3 font-semibold"><Phone size={16} /> +234-816-306-6508</li>
            <li className="flex items-center gap-3 font-semibold"><Mail size={16} /> Isohprecious99@gmail.com</li>
            <li className="flex items-center gap-3 font-semibold"><MapPin size={16} /> Kingfem Plaza, Mabushi, FCT, Abuja</li>
          </motion.ul>
          <motion.div className="flex items-center gap-4 " variants={fadeInUp}>

            <a href="#" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition"><Facebook size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-70 hover:opacity-100 transition"><Linkedin size={18} /></a>
          </motion.div>
        </motion.div>

        {/* <div className="border-t border-black/10" /> */}

        <div className="max-w-[1200px] mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="opacity-70 font-semibold">Copyright © {new Date().getFullYear()} P.A. ISOH LEGAL CONSULTANTS</div>
          <div className="flex items-center gap-6 opacity-80">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            {/* <a href="#" className="hover:underline">Cookie Settings</a> */}
          </div>
          <a href="#top" className="flex items-center gap-2 font-semibold"><span>Back to Top</span><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
