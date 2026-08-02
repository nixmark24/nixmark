"use client";

import { motion } from "framer-motion";
import {
  Award,
  Target,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    number: "120+",
    title: "Happy Clients",
  },
  {
    number: "250+",
    title: "Projects Delivered",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

const features = [
  {
    icon: Award,
    title: "Experienced Team",
    desc: "Professional marketers, designers and developers working together.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Every strategy is built to increase leads, sales and revenue.",
  },
  {
    icon: Target,
    title: "Result Driven",
    desc: "Data-backed campaigns with measurable business results.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    desc: "Long-term support with transparent communication.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-32 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-cyan-300">
            ABOUT NIXMARK
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            We Help Businesses Grow Faster
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            NixMark is a full-service digital marketing agency helping
            businesses build their online presence through websites,
            branding, SEO, Google Ads and Meta Ads.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl border border-white/10 p-10"
          >

            <h3 className="text-3xl font-bold">
              Why Choose NixMark?
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              We don't just create websites and marketing campaigns.
              We build complete digital systems that help businesses
              attract more customers and increase revenue.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              {stats.map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl bg-white/5 p-6 text-center"
                >
                  <h4 className="text-4xl font-black text-cyan-400">
                    {item.number}
                  </h4>

                  <p className="mt-2 text-gray-300">
                    {item.title}
                  </p>
                </div>

              ))}

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="glass flex items-start gap-5 rounded-3xl border border-white/10 p-6 transition duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(37,99,235,.25)]"
                >
                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <Icon
                      size={32}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-300">
                      {feature.desc}
                    </p>
                  </div>

                </div>
              );
            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
}