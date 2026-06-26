"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Truck, FlaskConical } from "lucide-react";
import Image from "next/image";

const STATS = [
  { num: "15+",  label: "Years Experience" },
  { num: "800+", label: "Chemical Products" },
  { num: "300+", label: "Industry Clients" },
  { num: "Pan-IN", label: "Delivery Network" },
];

const BADGES = [
  { icon: <ShieldCheck size={14}/>, label: "ISO 9001:2015 Certified" },
  { icon: <FlaskConical size={14}/>, label: "GHS Compliant" },
  { icon: <Truck size={14}/>, label: "ADG Transport" },
];

export function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero.png" alt="Teja Suppliers chemical warehouse" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-blue-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-32 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 right-40 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">ISO Certified Chemical Supplier · Adilabad</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
          >
            Industrial Chemicals.{" "}
            <span className="text-gradient">Precision Grade.</span>{" "}
            <span className="block mt-1">Delivered Safe.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
          >
            Adilabad&apos;s premier chemical supply company — delivering high-purity industrial chemicals, laboratory reagents, and specialty compounds to manufacturers, pharma companies, and research labs across India.
          </motion.p>

          {/* Cert badges */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {BADGES.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-medium">
                {b.icon} {b.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button onClick={() => scroll("products")}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold transition-all duration-300 btn-glow hover:scale-105">
              View Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:+917780789865"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/15 transition-all duration-300 border border-white/20">
              <Phone size={18} /> Call Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}>
                <div className="text-3xl md:text-4xl font-black text-blue-400 font-sans">{s.num}</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 pointer-events-none">
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1.5">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1 h-2 rounded-full bg-blue-400" />
        </div>
        <span className="text-white/50 text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
