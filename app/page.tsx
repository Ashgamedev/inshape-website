import React from "react";

export default function InshapeFitnessWebsite() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#FFF1B8]">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">Inshape Fitness</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="hover:text-[#E5533D]" href="#services">Services</a>
            <a className="hover:text-[#E5533D]" href="#trials">Free Trial</a>
            <a className="hover:text-[#E5533D]" href="#about">About</a>
            <a className="hover:text-[#E5533D]" href="#contact">Contact</a>
          </nav>
          <button className="bg-[#E5533D] text-white px-5 py-3 rounded-lg">
            Book Free Trial
          </button>
        </div>
      </header>

      <section className="bg-[#FFF7CC]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 p-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Personal Fitness Coaching That Works</h1>
            <p className="mb-6 text-lg text-gray-800">
              Train smarter. Get stronger. Stay healthy with customized coaching plans.
            </p>
            <button className="bg-[#E5533D] text-white px-5 py-3 rounded-lg">
              Start Free Trial
            </button>
          </div>

          <img
            src="/our-history.png"
            alt="Inshape Fitness"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Personal Training", "Weight Loss Coaching", "Strength & Conditioning"].map((s) => (
            <div key={s} className="rounded-2xl border p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">{s}</h3>
              <p className="text-sm text-gray-700">
                Customized programs designed to match your goals.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="trials" className="bg-[#FFF7CC] p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Free Trial</h3>
        <p className="mb-4">Experience our coaching with zero commitment.</p>
        <button className="bg-[#E5533D] text-white px-5 py-3 rounded-lg">
          Book Free Trial
        </button>
      </section>

      <footer className="bg-black text-gray-400 text-sm p-6 text-center">
        © {new Date().getFullYear()} Inshape Fitness
      </footer>
    </div>
  );
}
