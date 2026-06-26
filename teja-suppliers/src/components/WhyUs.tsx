"use client";
import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, Truck, Microscope, Package, HeadphonesIcon } from "lucide-react";

const FEATURES = [
  { icon: <ShieldCheck size={26}/>, title: "ISO 9001:2015 Certified", desc: "Every product batch is tested and documented with a Certificate of Analysis before dispatch to your facility.", color: "blue" },
  { icon: <ShieldCheck size={26}/>, title: "Full Safety Compliance", desc: "Complete GHS/MSDS documentation, hazmat labeling, and ADG transport compliance on all shipments.", color: "indigo" },
  { icon: <Truck size={26}/>, title: "Specialized Logistics", desc: "Dedicated hazmat-certified transport fleet with spill containment and GPS tracking for safe delivery across India.", color: "cyan" },
  { icon: <FlaskConical size={26}/>, title: "In-House Quality Lab", desc: "Our QC laboratory conducts assay, purity, pH, and density testing to ensure every chemical meets your specifications.", color: "blue" },
  { icon: <Package size={26}/>, title: "Flexible Packing & Volumes", desc: "Consumer packs (500ml–5L), carboys (25–50L), drums (200L), IBCs (1000L), and bulk tankers available.", color: "indigo" },
  { icon: <HeadphonesIcon size={26}/>, title: "Technical Sales Support", desc: "Chemistry graduates on our team help you select the right grade, concentration, and packing for your process.", color: "cyan" },
];

const COLOR = {
  blue:   "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600",
  indigo: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600",
  cyan:   "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-100 dark:border-cyan-900/50 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600",
} as const;

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-500 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-blue-500" /> Why Choose Us <span className="w-6 h-px bg-blue-500" />
          </div>
          <h2 className="font-sans font-black text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            The <span className="text-gradient">Teja Advantage</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            We don&apos;t just supply chemicals — we provide end-to-end chemical solutions with safety, quality, and precision at every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-white/5 rounded-2xl p-7 card-hover overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 transition-all duration-300 ${COLOR[f.color as keyof typeof COLOR]}`}>
                {f.icon}
              </div>
              <h3 className="font-sans font-bold text-lg text-gray-900 dark:text-white mb-3">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
