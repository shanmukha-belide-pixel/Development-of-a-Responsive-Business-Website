"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
              <div className="w-12 h-12 rounded-2xl bg-blue-550/10 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                <Shield size={24} />
              </div>
              <div>
                <h1 className="font-sans font-black text-3xl md:text-4xl text-gray-900 dark:text-white">Privacy Policy</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Last Updated: June 26, 2026</p>
              </div>
            </div>
            
            <div className="prose prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
              <p>
                At <strong>Teja Suppliers</strong>, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Teja Suppliers and how we use it.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">1. Information We Collect</h2>
              <p>
                We only collect personal information that you voluntarily provide to us when you fill out the contact or quote request form on our website. This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and contact details (email address, phone number).</li>
                <li>Your company or organization name.</li>
                <li>Details of the chemical products, quantities, and special requirements you request.</li>
              </ul>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website.</li>
                <li>Process your quote requests and reply to inquiries.</li>
                <li>Understand and analyze how you use our website to improve user experience.</li>
                <li>Communicate with you for customer support, service updates, and logistical purposes.</li>
                <li>Prevent fraudulent transactions and ensure safety compliance.</li>
              </ul>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">3. Log Files</h2>
              <p>
                Teja Suppliers follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">4. Cookies and Web Beacons</h2>
              <p>
                Like any other website, Teja Suppliers uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">5. Third-Party Services</h2>
              <p>
                Our contact form is processed securely via third-party services (such as Web3Forms). These services receive form data solely to forward the inquiry to our email and do not sell or use your information for advertising.
              </p>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">6. Contact Us</h2>
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:info@tejasuppliers.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@tejasuppliers.com</a> or via phone at <strong>7780789865</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
