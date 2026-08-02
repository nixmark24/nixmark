"use client";

import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  PenTool,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive websites designed to convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    desc: "Grow your brand with engaging content and powerful social media strategies.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Boost your Google rankings and drive consistent organic traffic.",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    desc: "Target the right audience and maximize ROI with Google Ads campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Meta Ads",
    desc: "High-converting Facebook & Instagram advertising for real business growth.",
  },
  {
    icon: PenTool,
    title: "Branding & Design",
    desc: "Professional logos, brand identity and creative visuals that build trust.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-[1400px] px-10 lg:px-16 py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center"
      >
        <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-cyan-300">
          OUR SERVICES
        </span>

        <h2 className="mt-6 text-5xl font-black md:text-6xl">
          Everything You Need To Grow Online
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          We build brands, websites and marketing campaigns that help businesses
          generate more leads, sales and long-term growth.
        </p>
      </motion.div>

      <div className="mx-auto mt-24 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass group flex mt-auto flex-col rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(37,99,235,.25)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 transition duration-300 group-hover:scale-110">
                <Icon size={34} className="text-cyan-400" />
              </div>

              <h3 className="text-3xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {service.desc}
              </p>

              <button className="mt-auto pt-8 font-semibold text-cyan-400 transition hover:text-white">
                Learn More →
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}