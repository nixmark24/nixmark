"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <nav className="flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-[#0B1020]/80 px-8 backdrop-blur-2xl shadow-2xl">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NixMark"
              width={56}
              height={56}
              priority
              className="rounded-full object-contain"
            />

            <div>
              <h1 className="text-3xl font-extrabold leading-none">
                Nix
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Mark
                </span>
              </h1>

              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-gray-400">
                Digital Marketing Agency
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 text-[15px] font-medium lg:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#services" className="transition hover:text-cyan-400">
              Services
            </a>

            <a href="#portfolio" className="transition hover:text-cyan-400">
              Portfolio
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Get Started →
          </a>
        </nav>
      </div>
    </motion.header>
  );
}