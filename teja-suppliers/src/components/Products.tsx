"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/utils/path";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CATEGORIES = ["All", "Industrial", "Laboratory", "Specialty"];

const PRODUCTS = [
  {
    id: 1, cat: "Industrial", tag: "⚙️ Industrial",
    img: "/images/product-industrial.png",
    title: "Industrial Solvents",
    desc: "High-grade Acetone, MEK, Toluene, Xylene, IPA, and Ethanol. Available in 200L drums and IBCs for manufacturing and cleaning applications.",
    features: ["Acetone, MEK, Toluene", "200L drums & IBC", "ADG compliant transport"],
    status: "In Stock",
  },
  {
    id: 2, cat: "Industrial", tag: "⚙️ Industrial",
    img: "/images/product-industrial.png",
    title: "Acids & Bases",
    desc: "H₂SO₄, HCl, HNO₃, NaOH, Na₂CO₃ — stored and transported in compliance with ADG regulations in certified HDPE containers.",
    features: ["Sulfuric, Hydrochloric, Nitric", "HDPE/carboy packaging", "Full MSDS documentation"],
    status: "In Stock",
  },
  {
    id: 3, cat: "Industrial", tag: "⚙️ Industrial",
    img: "/images/product-industrial.png",
    title: "Industrial Salts & Compounds",
    desc: "NaCl, CaCl₂, (NH₄)₂SO₄, FeCl₃, ZnSO₄, KMnO₄ — for water treatment, electroplating, textile, and chemical processing.",
    features: ["Water treatment grade", "Electroplating quality", "Bulk supply available"],
    status: "In Stock",
  },
  {
    id: 4, cat: "Laboratory", tag: "🔬 Laboratory",
    img: "/images/product-lab.png",
    title: "AR / LR Grade Reagents",
    desc: "Analytical Reagent and Laboratory Reagent grade chemicals with complete COA — purity, assay, and heavy metal content certified per batch.",
    features: ["Certified COA per batch", "AR & LR grades", "Pharma & research use"],
    status: "In Stock",
  },
  {
    id: 5, cat: "Laboratory", tag: "🔬 Laboratory",
    img: "/images/product-lab.png",
    title: "HPLC & GC Grade Solvents",
    desc: "Ultra-high purity Methanol, Acetonitrile, DCM, Hexane, Ethyl Acetate for chromatography — pharma, food safety, and environmental testing.",
    features: ["HPLC & GC purity", "Methanol, ACN, DCM", "UV cutoff certified"],
    status: "In Stock",
  },
  {
    id: 6, cat: "Specialty", tag: "✨ Specialty",
    img: "/images/product-industrial.png",
    title: "Specialty & Fine Chemicals",
    desc: "Surfactants, catalysts, polymer additives, pH buffers, and high-purity metal salts with tight specification control for niche applications.",
    features: ["Custom specifications", "Tight purity control", "On-demand sourcing"],
    status: "On Order",
  },
];

export function Products() {
  const [filter, setFilter] = useState("All");

  const visible = PRODUCTS.filter((p) => filter === "All" || p.cat === filter);

  return (
    <section id="products" className="section-padding bg-white dark:bg-gray-950/50 relative">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-blue-500 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-blue-500" /> Our Products <span className="w-6 h-px bg-blue-500" />
          </div>
          <h2 className="font-sans font-black text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Chemical <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Over 800 chemical products — from bulk industrial solvents to precision laboratory reagents — ready for immediate dispatch.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {visible.map((p) => (
              <motion.article key={p.id} layout
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35 }}
                className="glass-card rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={getAssetPath(p.img)} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gray-950/70 backdrop-blur-sm text-blue-300 border border-blue-500/30">
                    {p.tag}
                  </span>
                  <span className={`absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    p.status === "In Stock" ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${p.status === "In Stock" ? "bg-green-400" : "bg-amber-400"} shadow-lg`}/>
                    {p.status}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-sans font-bold text-lg text-gray-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 size={13} className="text-blue-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="group/btn flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-3 transition-all duration-300">
                    Enquire Now <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
