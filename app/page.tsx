"use client";

export default function HomePage() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFDF5] text-[#111827] overflow-hidden">

      {/* Background Glow */}
      <div className="fixed top-10 left-10 w-72 h-72 bg-[#A7F3D0] opacity-30 blur-3xl rounded-full"></div>
      <div className="fixed bottom-10 right-10 w-80 h-80 bg-[#99F6E4] opacity-30 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/75 border-b border-white/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-4xl font-extrabold tracking-wide text-[#0F766E] drop-shadow-sm">
            Plan<span className="text-[#111827]">Topia</span>
          </h1>

          <div className="flex gap-4">
            <a
              href="/auth/login"
              className="px-5 py-2.5 rounded-xl border border-white/60 bg-white/60 hover:bg-white transition font-medium"
            >
              Login
            </a>

            <a
              href="/auth/register"
              className="px-5 py-2.5 rounded-xl bg-[#0F766E] text-white hover:bg-[#115E59] shadow-lg transition font-semibold"
            >
              Get Started
            </a>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        <div>
          <p className="text-[#0F766E] font-semibold uppercase tracking-widest mb-4">
            Smart Subscription Platform
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Manage Every Plan
            <br />
            With Confidence.
          </h1>

          <p className="text-lg text-gray-600 leading-8 mb-10 max-w-xl">
            PlanTopia helps users and businesses organize
            subscriptions, control recurring payments,
            reduce wasteful spending, and simplify billing
            through one elegant platform.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/auth/register"
              className="px-8 py-4 rounded-2xl bg-[#0F766E] text-white font-semibold hover:scale-105 transition shadow-xl"
            >
              Start Free
            </a>

            <a
              href="/auth/login"
              className="px-8 py-4 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-lg font-semibold hover:bg-white transition"
            >
              Login
            </a>
          </div>
        </div>

        {/* Glass Card */}
        <div className="bg-white/55 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-8 hover:-translate-y-2 transition duration-300">
          <h3 className="text-3xl font-bold mb-6 text-[#0F766E]">
            Why PlanTopia?
          </h3>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/70 shadow">
              Centralized Subscription Management
            </div>

            <div className="p-5 rounded-2xl bg-white/70 shadow">
              Elegant User & Admin Dashboards
            </div>

            <div className="p-5 rounded-2xl bg-white/70 shadow">
              Billing Visibility & Cost Control
            </div>

            <div className="p-5 rounded-2xl bg-white/70 shadow">
              Secure Access with Role-Based Login
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow text-center">
            <h3 className="text-4xl font-bold text-[#0F766E]">24/7</h3>
            <p className="text-gray-600 mt-2">Platform Access</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow text-center">
            <h3 className="text-4xl font-bold text-[#0F766E]">100%</h3>
            <p className="text-gray-600 mt-2">Subscription Visibility</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow text-center">
            <h3 className="text-4xl font-bold text-[#0F766E]">Secure</h3>
            <p className="text-gray-600 mt-2">Protected Access</p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow text-center">
            <h3 className="text-4xl font-bold text-[#0F766E]">Fast</h3>
            <p className="text-gray-600 mt-2">Modern Experience</p>
          </div>
        </div>
      </section>

      {/* Scroller */}
      <section className="py-6 border-y border-white/50 bg-white/40 backdrop-blur-xl overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-lg font-semibold text-gray-700">
          Smart Management • Elegant Dashboards • Cost Control • Secure Access • Modern Experience • Smart Management • Elegant Dashboards • Cost Control • Secure Access •
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-3 gap-8">

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
          <h3 className="text-2xl font-bold mb-4 text-[#0F766E]">
            Centralized Control
          </h3>
          <p className="text-gray-600 leading-7">
            Keep all subscriptions organized in one dashboard.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
          <h3 className="text-2xl font-bold mb-4 text-[#0F766E]">
            Smarter Spending
          </h3>
          <p className="text-gray-600 leading-7">
            Reduce unnecessary recurring costs with visibility.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition">
          <h3 className="text-2xl font-bold mb-4 text-[#0F766E]">
            Premium Security
          </h3>
          <p className="text-gray-600 leading-7">
            Role-based secure access for users and admins.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-8 pb-24">
        <h2 className="text-5xl font-bold mb-6">
          Subscription Management Reimagined
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Clean. Powerful. Built for modern users.
        </p>

        <a
          href="/auth/register"
          className="px-10 py-4 rounded-2xl bg-[#0F766E] text-white font-semibold shadow-xl hover:scale-105 transition"
        >
          Get Started Today
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/40 py-10 text-center text-gray-500 bg-white/30 backdrop-blur-lg">
        © 2026 PlanTopia. All rights reserved.
      </footer>

      {/* Marquee CSS */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 200%;
          animation: marquee 18s linear infinite;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}