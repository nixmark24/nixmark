"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-32 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="NixMark"
            width={180}
            height={180}
            priority
            className="drop-shadow-[0_0_60px_rgba(37,99,235,.6)]"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-6xl font-black md:text-8xl"
        >
          Nix
          <span className="gradient-text">Mark</span>
        </motion.h2>

        <p className="mt-4 text-sm uppercase tracking-[8px] text-gray-400 md:text-lg">
          DIGITAL MARKETING AGENCY
        </p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Turning{" "}
          <span className="gradient-text">Clicks</span>{" "}
          Into Clients.
        </motion.h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          Grow your business with high-converting websites,
          Meta Ads, Google Ads, Branding and SEO that
          actually generate leads.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <button className="btn-primary rounded-xl px-10 py-4 text-lg font-bold">
            Get Free Consultation
          </button>

          <button className="glass rounded-xl border border-cyan-500 px-10 py-4 text-lg font-bold">
            View Portfolio
          </button>

        </div>

      </div>

      {/* Partner Section */}

      <div className="relative z-10 mx-auto -mt-10 max-w-4xl px-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="grid grid-cols-2 gap-10 text-center">

            {/* Meta */}

            <div>

              <h3 className="text-5xl font-bold text-white">
                ∞ Meta
              </h3>

              <p className="mt-3 text-lg text-gray-400">
                Business Partner
              </p>

            </div>

            {/* Google */}

            <div>

              <h3 className="text-5xl font-bold">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-400">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </h3>

              <p className="mt-3 text-lg text-gray-400">
                Partner
              </p>

            </div>

          </div>

        </div>

        {/* Rating */}

        <div className="mt-8 text-center">

          <div className="text-4xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-3 text-2xl font-semibold">
            4.9/5 Trusted by 100+ Businesses Worldwide
          </p>

        </div>

      </div>

    </section>
  );
}