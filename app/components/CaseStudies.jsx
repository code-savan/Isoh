"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

const CASE_STUDIES = [
  {
    title: "Recovery of fraudulently taken funds for a Diaspora Client",
    image:
      "/case1.png",
    paragraphs: [
      "A client based in the United Kingdom contacted our firm after being defrauded by an individual in Nigeria. The client had transferred funds for a service that was never rendered, and all attempts to recover the money independently had failed.",
      "Upon engagement, our firm promptly initiated legal proceedings, beginning with a formal letter of demand and follow-up negotiations. When the defaulting party failed to comply, we pursued the matter through appropriate law enforcement and legal channels.",
      "Through strategic legal intervention, we successfully recovered the funds and obtained damages back to our client. The case reinforced our firm’s commitment to safeguarding the financial interests of Nigerians in the diaspora and ensuring justice through efficient legal representation.",
    ],
  },
  {
    title: "Securing Sole Custody for a Diaspora Client",
    image:
      "/case2.png",
    paragraphs: [
      "Our client, a Nigerian residing abroad, was involved in a custody dispute following a prolonged separation. Despite several years of legal and emotional challenges, she sought to obtain sole custody of her child, who was resident in Nigeria.",
      "We represented the client through all legal stages, filing relevant applications, presenting evidence of parental fitness, and demonstrating the child’s best interests before the court. Our legal team combined strong advocacy ensuring that the client’s rights were clearly articulated and protected.",
      "After months of legal representation the court granted our client sole custody of her child. This victory stands as a testament to our firm’s dedication to family law and our unwavering commitment to protecting the rights of parents and children, both within Nigeria and in the diaspora.",
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full bg-[#f9f9f9]">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center max-w-2xl mx-auto" variants={fadeInUp}>
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#201c17]">Case Studies</div>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-heading font-semibold text-[#1e1a16]">Results we’re proud of</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <motion.article key={cs.title} className="rounded-xl shadow-sm bg-white/70 backdrop-blur-sm overflow-hidden" variants={fadeInUp}>
              <div className="relative  w-full overflow-hidden">
                <img src={cs.image} alt={cs.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1e1a16]">{cs.title}</h3>
                {cs.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-3 text-sm leading-relaxed text-black/80">
                    {p}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
