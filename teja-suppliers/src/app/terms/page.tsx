"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-custom">
          {/* Back link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <div className="max-w-4xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                <FileText size={24} />
              </div>
              <div>
                <h1 className="font-sans font-black text-3xl md:text-4xl text-gray-900 dark:text-white">Terms of Use</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Last Updated: June 26, 2026</p>
              </div>
            </div>
            
            <div className="prose prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
              <p>
                Welcome to <strong>Teja Suppliers</strong>. By accessing or using our website, you agree to comply with and be bound by the following Terms of Use. Please read these terms carefully.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">1. Use of the Site</h2>
              <p>
                The content of this website is for your general information and business use only. We reserve the right to modify or withdraw services, products, or information without prior notice.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">2. Product Specifications & Purity</h2>
              <p>
                Teja Suppliers distributes industrial-grade and laboratory-grade chemicals. While we ensure all products comply with our strict Certificates of Analysis (COA) and material data sheets, it is the buyer's sole responsibility to ensure that the chemical ordered matches the intended chemical process, application, and safety limits.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">3. Safety Regulations & Transportation</h2>
              <p>
                By requesting quotes or placing orders, you represent that your organization complies with all national safety regulations (including GHS, chemical license permits where applicable, and safe warehouse storage standards) for handling, storing, and utilizing chemical compounds.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">4. Intellectual Property</h2>
              <p>
                All trademarks, logos, texts, images, and content displayed on this website are the property of Teja Suppliers or respective partner manufacturers. Reproduction or unauthorized distribution is strictly prohibited.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">5. Limitation of Liability</h2>
              <p>
                In no event shall Teja Suppliers be liable for any direct, indirect, special, punitive, incidental, or consequential damages arising from the use of, or inability to use, this website or the purchase and shipment of products, save for product replacements as governed by standard sales terms.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the State of Telangana, India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Adilabad, Telangana.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
