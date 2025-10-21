"use client";
import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/app/components/motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const books = [
  { title: "Redeeming Love", author: "Francine Rivers", image: "/img1.jpg" },
  { title: "Atomic Habits", author: "James Clear", image: "/img2.jpg" },
  { title: "The Richest Man in Babylon", author: "George Clason", image: "https://m.media-amazon.com/images/I/91Z+9CTjlzL._SL1500_.jpg" },
  { title: "Emotional Intelligence", author: "Travis Bradberry", image: "https://m.media-amazon.com/images/I/71h-WJfCXEL._SL1500_.jpg" },
  { title: "Becoming", author: "Michelle Obama", image: "https://m.media-amazon.com/images/I/71rm0H5uOaL._SL1500_.jpg" },
  { title: "The Psychology of Money", author: "Morgan Housel", image: "https://m.media-amazon.com/images/I/81tRylsl8+L._SL1500_.jpg" },
  { title: "Act Like a Lady, Think Like a Man", author: "Steve Harvey", image: "https://m.media-amazon.com/images/I/81QB5FjNCrL._SL1500_.jpg" },
  { title: "Nearly All the Men in Lagos Are Mad", author: "Damilare Kuku", image: "https://m.media-amazon.com/images/I/71GpRvNQtwL._SL1500_.jpg" },
  { title: "The Purpose Driven Life", author: "Rick Warren", image: "https://m.media-amazon.com/images/I/71Ufis3YzeL._SL1500_.jpg" },
  { title: "Americanah", author: "Chimamanda Ngozi Adichie", image: "https://m.media-amazon.com/images/I/81QDbYRotvL._SL1500_.jpg" },
  { title: "The Masterpiece", author: "Fiona Davis", image: "https://m.media-amazon.com/images/I/81EDyAY3nPL._SL1500_.jpg" },
  { title: "Money: Master the Game", author: "Tony Robbins", image: "https://m.media-amazon.com/images/I/91S7IaFislL._SL1500_.jpg" },
];

const Books = () => {
  const scrollRef = useRef(null);

  const onScrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section id="books" className="scroll-mt-24 bg-white/90 md:h-screen py-10 md:py-0">
      <div className="mx-auto relative">
        <div className="flex items-center justify-between mx-auto md:px-14 px-6 md:py-14 py-6">
          <h2 className="text-[28px] sm:text-[30px] font-heading font-semibold text-[#2b2a27]"
          style={{ fontFamily: 'var(--font-script)' }}
          >Top Reads</h2>
          <div className=" sm:flex items-center gap-2">
            <button aria-label="Previous" onClick={() => onScrollBy(-1)} className="inline-flex h-9 w-9 items-center justify-center cursor-pointer rounded-full border border-[#6b4f3a]/30 text-[#6b4f3a] hover:bg-[#6b4f3a]/10">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button aria-label="Next" onClick={() => onScrollBy(1)} className="inline-flex h-9 w-9 items-center justify-center cursor-pointer rounded-full border border-[#6b4f3a]/30 text-[#6b4f3a] hover:bg-[#6b4f3a]/10">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <motion.div
          ref={scrollRef}
          className="mt-8 flex gap-12 overflow-x-auto snap-x-proximity snap-mandatory scroll-smooth md:pr-14 md:pl-14 pr-6 pl-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {books.map((b) => (
            <motion.figure key={b.title} className="group snap-start" variants={fadeInUp}>
              <div className="relative aspect-[10/15] w-full min-w-[200px] md:min-w-[300px] overflow-hidden">
                <img src={b.image} alt={b.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <figcaption className="mt-4">
                <div className="text-[22px] font-semibold text-[#2b2a27]" style={{ fontFamily: 'var(--font-script)' }}>{b.title}</div>
                <div className="text-sm text-black/60" style={{ fontFamily: 'var(--font-poppins)' }}>-{b.author}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Books
