"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

const PRODUCTS_LIST = [
  { group: "Industrial Chemicals", items: ["Industrial Solvents","Acids & Bases","Industrial Salts","Other Industrial"] },
  { group: "Laboratory Chemicals", items: ["AR/LR Grade Reagents","HPLC/GC Solvents","Stains & Indicators","Other Laboratory"] },
  { group: "Specialty Chemicals",  items: ["Specialty & Fine Chemicals","Pharmaceutical Intermediates","Water Treatment Chemicals"] },
];

export function Contact() {
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const [form, setForm] = useState({ name:"", phone:"", company:"", email:"", product:"", quantity:"", message:"" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.phone.trim())   e.phone   = "Phone is required";
    if (!form.product)        e.product = "Please select a product";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "f1a120e1-7718-47df-a6d2-b83203bb0763";
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      alert("Inquiry Form setup is incomplete!\n\nTo receive inquiries at your email in production, please register a free access key at https://web3forms.com and add it as NEXT_PUBLIC_WEB3FORMS_KEY in your .env file or project configurations.");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          phone: form.phone,
          company: form.company,
          email: form.email,
          product: form.product,
          quantity: form.quantity,
          message: form.message,
          subject: `New Inquiry from ${form.name} (${form.company || "Individual"})`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        alert("Submission failed: " + (result.message || "Please check your access key."));
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit inquiry. Please check your network connection.");
      setStatus("idle");
    }
  };


  const field = (id: keyof typeof form, label: string, type = "text", placeholder = "") => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</label>
      <input
        id={id} type={type} value={form[id]} placeholder={placeholder}
        onChange={e => setForm(p => ({ ...p, [id]: e.target.value }))}
        className={`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400 ${
          errors[id] ? "border-red-400 dark:border-red-500" : "border-gray-200 dark:border-white/10"
        }`}
      />
      {errors[id] && <p className="text-red-400 text-xs">{errors[id]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-blue-500 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-blue-500" /> Get In Touch
            </div>
            <h2 className="font-sans font-black text-4xl md:text-5xl text-gray-900 dark:text-white mb-5">
              Request a <span className="text-gradient">Quote</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              Need a specific chemical, custom grade, or bulk quantity? Our technical team responds within 24 hours.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: <MapPin size={18}/>, title: "Address", content: "Industrial Area, Adilabad – 504001, Telangana, India" },
                { icon: <Phone size={18}/>, title: "Phone", content: "7780789865", href: "tel:7780789865" },
                { icon: <Mail size={18}/>, title: "Email", content: "info@tejasuppliers.com", href: "mailto:info@tejasuppliers.com" },
                { icon: <Clock size={18}/>, title: "Hours", content: "Mon–Sat: 8AM–7PM  |  Sun: 9AM–2PM" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start group">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-1">{item.title}</div>
                    {item.href
                      ? <a href={item.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.content}</a>
                      : <p className="text-sm text-gray-700 dark:text-gray-300">{item.content}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 shadow-lg">
              <iframe
                title="Teja Suppliers location – Adilabad, Telangana"
                src="https://maps.google.com/maps?q=Industrial%20Area,%20Adilabad,%20Telangana,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="lg:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-white/8 rounded-3xl p-8 md:p-10">
              {!isLoggedIn ? (
                <div className="flex flex-col items-center text-center py-10 gap-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock text-blue-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-gray-900 dark:text-white mb-2">Sign In to Request Quote</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm leading-relaxed">
                      To submit inquiries, request pricing quotes, and access the supplier catalog, please sign in with your account.
                    </p>
                  </div>
                  <Link href="/login" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm transition-all duration-300 btn-glow hover:scale-[1.02]">
                    Sign In Now
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="font-sans font-bold text-2xl text-gray-900 dark:text-white mb-1">Send an Inquiry</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Fill out the form and we&apos;ll respond within 24 hours.</p>

                  {status === "success" ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-12 gap-4">
                      <div className="w-20 h-20 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center">
                        <CheckCircle2 size={36} className="text-green-400" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white">Inquiry Sent!</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">Our team will contact you within 24 hours. For urgent needs, call us directly.</p>
                      <a href="tel:7780789865" className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                        <Phone size={16} /> 7780789865
                      </a>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {field("name",    "Full Name *",    "text",  "Your full name")}
                        {field("phone",   "Phone *",        "tel",   "7780789865")}
                      </div>
                      {field("company", "Company / Organisation", "text", "Your company name")}
                      {field("email",   "Email Address",          "email","your@email.com")}

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="product" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Chemical Category *</label>
                        <select id="product" value={form.product} onChange={e => setForm(p => ({...p, product: e.target.value}))}
                          className={`w-full bg-gray-50 dark:bg-gray-800/60 border rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 ${errors.product ? "border-red-400" : "border-gray-200 dark:border-white/10"}`}>
                          <option value="" disabled>Select chemical category</option>
                          {PRODUCTS_LIST.map(g => (
                            <optgroup key={g.group} label={g.group}>
                              {g.items.map(i => <option key={i} value={i}>{i}</option>)}
                            </optgroup>
                          ))}
                        </select>
                        {errors.product && <p className="text-red-400 text-xs">{errors.product}</p>}
                      </div>

                      {field("quantity","Chemical Name & Quantity","text","e.g. Acetone – 500L, H₂SO₄ – 200L drum")}

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Special Requirements</label>
                        <textarea id="message" rows={4} value={form.message}
                          onChange={e => setForm(p => ({...p, message: e.target.value}))}
                          placeholder="Purity grade, packaging preference, delivery location, timeline..."
                          className="w-full bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 resize-none"
                        />
                      </div>

                      <button type="submit" disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-base transition-all duration-300 btn-glow disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]">
                        {status === "loading"
                          ? <><Loader2 size={20} className="animate-spin" /> Sending...</>
                          : <><Send size={18} /> Send Inquiry</>
                        }
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
