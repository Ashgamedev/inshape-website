import React from "react";
import { motion } from "framer-motion";

// Color theme
// Primary: White
// Secondary: Light Yellow (#FFF7CC) & Black
// Accent: Mild Red (#E5533D)

export default function InshapeFitnessWebsite() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#FFF1B8]">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">Inshape Fitness</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="hover:text-[#E5533D]" href="#services">Services</a>
            <a className="hover:text-[#E5533D]" href="#trials">Free Trial</a>
            <a className="hover:text-[#E5533D]" href="#about">About</a>
            <a className="hover:text-[#E5533D]" href="#contact">Contact</a>
          </nav>
          <button className="bg-[#E5533D] hover:bg-[#cf4a35] text-white px-5 py-3 rounded-lg">Book Free Trial</button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#FFF7CC]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 p-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Fitness Coaching That Works</h1>
            <p className="mb-6 text-lg text-gray-800">Train smarter. Get stronger. Stay healthy with customized coaching plans.</p>
            <div className="flex gap-4">
              <button className="bg-[#E5533D] hover:bg-[#cf4a35] text-white px-5 py-3 rounded-lg">Start Free Trial</button>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src="/our-history.png"
            alt="Inshape Fitness training session"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Personal Training", "Weight Loss Coaching", "Strength & Conditioning"].map((s) => (
            <div key={s} className="rounded-2xl border border-[#FFE8A3] p-6 bg-white shadow">
              <h3 className="font-semibold text-lg mb-2">{s}</h3>
              <p className="text-sm text-gray-700">Customized programs designed to match your goals and lifestyle.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trial */}
      <section id="trials" className="bg-[#FFF7CC]">
        <div className="max-w-7xl mx-auto p-8 grid md:grid-cols-1 gap-6">
          <div className="rounded-2xl border border-[#FFE8A3] p-6 bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">Free Trial</h3>
            <p className="text-gray-700 mb-4">Experience our coaching with zero commitment.</p>
            <button className="bg-[#E5533D] hover:bg-[#cf4a35] text-white px-5 py-3 rounded-lg">Book Free Trial</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-4">Why Inshape Fitness?</h2>
        <p className="max-w-3xl text-gray-800">We specialize in personal coaching that adapts to your body, schedule, and goals. Whether you're just starting out or training seriously, our programs help you stay consistent and motivated.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black text-white">
        <div className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
            <p className="text-gray-300">Book a free trial or speak with our team to find the best plan for you.</p>
          </div>
          <div className="flex flex-col gap-3">
            <input placeholder="Full name" className="p-3 rounded text-black" />
            <input placeholder="Phone number" className="p-3 rounded text-black" />
            <button className="bg-[#E5533D] hover:bg-[#cf4a35] text-white px-5 py-3 rounded-lg">Request Callback</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm p-6 text-center">
        © {new Date().getFullYear()} Inshape Fitness. All rights reserved.
      </footer>
    </div>
  );
}

