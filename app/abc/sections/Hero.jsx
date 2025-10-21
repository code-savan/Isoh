"use client";
import React from 'react'
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/components/motion";
import { LibraryBig, BookOpenText, CalendarDays, Users, HandHeart, School, Globe2, FileSignature, Phone, ArrowDown } from "lucide-react";
import Link from "next/link";
import Button from '@/app/components/ui/whatsapp-button';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden md:h-screen h-fit">
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="flex items-center relative border-b border-b-slate-800/10 md:h-full h-[400px]">
      <motion.div className="text-[13px] cursor-pointer uppercase tracking-[0.25em] font-extrabold
      text-[#6b4f3a] inline-flex items-center gap-2 absolute top-6 md:left-12 left-6 border-b border-b-[#6b4f3a85] pb-1"
      style={{ fontFamily: 'var(--font-script)', fontWeight: '700' }} variants={fadeInUp}>
              <LibraryBig className="h-4 w-4" /> Amaka's Book Club
            </motion.div>
        <div className="w-full mx-auto max-w-[800px] px-6 md:px-12">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>

            <motion.h1 className="mt-4 text-[40px] sm:text-[56px] font-semibold text-[#2b2a27] leading-[1.1]" style={{ fontFamily: 'var(--font-script)' }} variants={fadeInUp}>
              Where readers connect and conversations inspire
            </motion.h1>

            <motion.div className="md:mt-6 mt-3" variants={fadeInUp}>
              <Link href="https://chat.whatsapp.com/GJX3PqGxjPkFFbIHxYGjKC?mode=wwt">
                {/* Join the book club on WhatsApp */}

              <Button />
              </Link>
              {/* <div className="ml-4 mt-1 text-[8px] text-black/60">You’ll be joining a WhatsApp group.</div> */}
            </motion.div>


          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 md:left-14 left-6" variants={fadeInUp}>
              <Link href="#books" className="inline-flex items-center gap-2 text-xs text-black/70 hover:underline underline-offset-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              <ArrowDown size={14} />
              <span>
                Discover our latest reads
              </span>
              </Link>
            </motion.div>
      </div>



      <div className="relative min-h-[60vh] md:min-h-screen">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-10 bg-[#2e1806] p-4 rounded-lg text-white shadow-md shadow-[#2f2014d2] w-[85%]">
        <motion.p className="mt-2 max-w-lg text-xs font-medium leading-relaxed text-white/90 backdrop-blur-xl" variants={fadeInUp} style={{ fontFamily: 'var(--font-poppins)' }}>
              A vibrant community for book lovers passionate about reading, meaningful conversations, and making positive impact. We connect readers locally and globally—online and in-person—to share lessons, emotions, and perspectives from diverse books.
            </motion.p>
        </div>
        <div className="absolute inset-0 bg-[url('/bookclub.png')] bg-cover bg-center" />
      </div>
    </div>
  </section>
  )
}

export default Hero
