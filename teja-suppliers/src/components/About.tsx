"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/path";
import { ShieldCheck, FlaskConical, Truck, Award } from "lucide-react";

const FEATURES = [
  { icon: <FlaskConical size={20}/>, title: "High-Purity Standards", desc: "All chemicals are sourced from certified manufacturers and tested in our in-house QC lab against COA specifications before dispatch." },
  { icon: <ShieldCheck size={20}/>, title: "Full Regulatory Compliance", desc: "Complete MSDS documentation, GHS labeling, and ADG transport compliance — we meet every statutory requirement for chemical handling." },
  { icon: <Truck size={20}/>, title: "Safe Certified Logistics", desc: "Dedicated hazmat-certified transport fleet with spill containment and temperature control for safe, on-time nationwide delivery." },
];

const CERTS = ["ISO 9001:2015", "GHS Compliant", "MSDS Certified", "BIS Approved"];

export function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <Image src={getAssetPath("/images/about.png")} alt="Teja Suppliers QC lab team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
            </div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }} viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-5 shadow-xl shadow-blue-900/40"
            >
              <div className="font-black text-4xl font-sans leading-none">15+</div>
              <div className="text-blue-200 text-xs font-semibold tracking-wider uppercase mt-1">Years of<br/>Expertise</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-blue-500" /> About Us
            </div>
            <h2 className="font-sans font-black text-4xl md:text-5xl text-gray-900 dark:text-white mb-5 leading-tight">
              Chemistry You Can <span className="text-gradient">Trust.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Founded in 2009, Teja Suppliers has established itself as one of the most reliable chemical supply companies in Adilabad, Telangana. We source, store, and distribute a comprehensive portfolio of industrial chemicals, laboratory reagents, specialty compounds, and chemical safety equipment.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Our state-of-the-art warehouse features climate-controlled storage, hazmat handling infrastructure, and a QC lab — ensuring every product meets strict purity standards before it reaches your facility.
            </p>

            {/* Features */}
            <div className="space-y-5 mb-8">
              {FEATURES.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CERTS.map((c) => (
                <span key={c} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                  <Award size={12} /> {c}
                </span>
              ))}
            </div>

            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
              Request a Quote
              <motion.span animate={{ x: [0,4,0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
