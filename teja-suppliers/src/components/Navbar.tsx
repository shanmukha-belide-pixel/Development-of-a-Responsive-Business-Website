"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FlaskConical } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { getAssetPath } from "@/utils/path";

const NAV_LINKS = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Contact",  href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.reload();
  };

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    if (pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/" + href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-blue-900/10 border-b border-gray-200/50 dark:border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="#hero" onClick={() => handleNav("Home","#hero")} className="flex items-center gap-3 group">
              <img 
                src={getAssetPath("/images/logo.png")} 
                alt="Teja Suppliers logo" 
                className="w-10 h-10 rounded-xl object-contain bg-white p-1 border border-gray-200 dark:border-white/10 shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col leading-none">
                <span className={`font-sans font-800 text-base tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-gray-900 dark:text-white" : "text-white"
                }`}>
                  Teja Suppliers
                </span>
                <span className="text-[10px] font-medium tracking-widest text-blue-500 uppercase">Chemical Solutions</span>
              </div>
            </Link>
 
            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.label, link.href)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      active === link.label
                        ? scrolled
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60"
                          : "text-white bg-white/15"
                        : scrolled
                        ? "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {active === link.label && scrolled && (
                      <motion.div layoutId="nav-pill" className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-950/60 -z-10" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              {isLoggedIn ? (
                <button
                  onClick={handleSignOut}
                  className={`hidden md:inline-block text-sm font-semibold transition-colors duration-300 ${
                    scrolled ? "text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400" : "text-white/80 hover:text-red-400"
                  }`}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className={`hidden md:inline-block text-sm font-semibold transition-colors duration-300 ${
                    scrolled ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" : "text-white/80 hover:text-white"
                  }`}
                >
                  Sign In
                </Link>
              )}
              <button
                onClick={() => handleNav("Contact","#contact")}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold transition-all duration-300 btn-glow hover:scale-105"
              >
                Request Quote
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full glass"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-4"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full glass">
              <X size={20} className="text-white" />
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNav(link.label, link.href)}
                className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            {isLoggedIn ? (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                onClick={handleSignOut}
                className="text-3xl font-bold text-red-400 hover:text-red-300 transition-colors"
              >
                Sign Out
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/login");
                }}
                className="text-3xl font-bold text-white/80 hover:text-blue-400 transition-colors"
              >
                Sign In
              </motion.button>
            )}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (NAV_LINKS.length + 1) * 0.08 }}
              onClick={() => handleNav("Contact","#contact")}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg btn-glow"
            >
              Request Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
