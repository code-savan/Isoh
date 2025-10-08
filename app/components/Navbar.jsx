import { PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#f9f9f9]  border-black/10">
      <div className="max-w-[1200px] mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center justify-start gap-2 w-1/5">
          <Image src="/logo.png" alt="Firm logo" width={35} height={35} />
          <span className="text-[13px] font-semibold tracking-tight leading-tight">P.A. ISOH LEGAL <br /> CONSULTANTS</span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-sm w-3/5 justify-center font-medium">
          <Link href="#about" className="hover:underline underline-offset-4">About</Link>
          <Link href="#services" className="hover:underline underline-offset-4">Services</Link>
          <Link href="#why" className="hover:underline underline-offset-4">Why Us</Link>
          <Link href="#team" className="hover:underline underline-offset-4">Team</Link>
          <Link href="#contact" className="hover:underline underline-offset-4">Contact</Link>
        </nav>
        <div className="w-1/5 flex justify-end">
{/* Amaka;s Bookclub */}
        <a className="inline-flex items-center justify-center rounded-full bg-[#1e1a16] text-white px-4 py-3 text-xs sm:text-base hover:opacity-90 transition gap-2 "
             href="#portfolio"
          >
            <PenTool className="w-3 h-3" />
            <span className="text-[10px] font-semibold tracking-wide">PENWRITES CREATIVES</span>

          </a>
        </div>
      </div>
    </header>
  );
}
