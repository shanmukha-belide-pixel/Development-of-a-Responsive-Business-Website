"use client";
import { motion } from "framer-motion";
import { FlaskConical, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const QUICK_LINKS = ["Home","About","Products","Why Us","Contact"];
const PRODUCTS    = ["Industrial Solvents","Acids & Bases","Industrial Salts","AR/LR Reagents","HPLC Solvents","Specialty Chemicals"];

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const scroll = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#" + id);
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FlaskConical size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-base">Teja Suppliers</div>
                <div className="text-[10px] text-blue-400 tracking-widest uppercase">Chemical Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Adilabad&apos;s trusted ISO-certified chemical supply company since 2009. Delivering high-purity industrial chemicals and lab reagents safely across India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "W", label: "WhatsApp", href: "https://wa.me/917780789865", bg: "bg-green-600" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                   className={`w-9 h-9 ${s.bg} rounded-lg flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform duration-200`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h5>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <button onClick={() => scroll(l.toLowerCase().replace(" ","-"))}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-blue-500 group-hover:w-3 transition-all duration-300" />
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Products</h5>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <button onClick={() => scroll("products")}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-cyan-500 group-hover:w-3 transition-all duration-300" />
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contact Info</h5>
            <ul className="space-y-3.5">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Industrial Area, Adilabad – 504001, Telangana, India</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <a href="tel:7780789865" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">7780789865</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:info@tejasuppliers.com" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">info@tejasuppliers.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <MessageCircle size={16} className="text-green-400 shrink-0" />
                <a href="https://wa.me/917780789865" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-green-400 text-sm transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-gray-500 text-sm">
            &copy; {year} <span className="text-blue-400">Teja Suppliers</span>. All rights reserved. Adilabad, Telangana.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-gray-500 hover:text-blue-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-blue-400 text-xs transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
