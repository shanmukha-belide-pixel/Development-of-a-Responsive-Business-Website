"use client";
import { motion } from "framer-motion";

const ITEMS = [
  "🏅 ISO 9001:2015 Certified", "🔬 High-Purity Reagents", "🚛 Safe Chemical Logistics",
  "⚗️ Industrial Grade Chemicals", "🛡️ MSDS Compliance", "📦 Bulk & Retail Supply",
  "🌐 Pan-India Delivery", "📞 24/7 Technical Support", "✅ GHS Compliant",
  "🏅 ISO 9001:2015 Certified", "🔬 High-Purity Reagents", "🚛 Safe Chemical Logistics",
  "⚗️ Industrial Grade Chemicals", "🛡️ MSDS Compliance", "📦 Bulk & Retail Supply",
  "🌐 Pan-India Delivery", "📞 24/7 Technical Support", "✅ GHS Compliant",
];

export function TrustBar() {
  return (
    <div className="bg-blue-600/5 dark:bg-blue-500/5 border-y border-blue-200/40 dark:border-blue-500/15 py-4 overflow-hidden">
      <div className="flex gap-12 animate-ticker whitespace-nowrap w-max">
        {ITEMS.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
