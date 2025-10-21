import React from 'react'

import Hero from "./sections/Hero";
import Books from "./sections/Books";
import Content from "./sections/Content";

export const metadata = {
    title: 'Amaka’s Book Club | Book Club',
    description: 'Where readers connect and conversations inspire',
  }

export default function BookClubPage() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "var(--font-poppins)", backgroundColor: "#f9f5ef" }}>
     <Hero />
    <Books />

    <Content />
    </main>
  );
}
