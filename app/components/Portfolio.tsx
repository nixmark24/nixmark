"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Real Estate Website",
    category: "Website Development",
    image: "/portfolio/real-estate.jpg",
    description:
      "Premium real estate website focused on lead generation and modern user experience.",
  },
  {
    title: "Google Ads Campaign",
    category: "Performance Marketing",
    image: "/portfolio/google-ads.jpg",
    description:
      "High-converting Google Ads campaigns delivering measurable ROI and quality leads.",
  },
  {
    title: "Restaurant Branding",
    category: "Brand Identity",
    image: "/portfolio/branding.jpg",
    description:
      "Creative branding solutions that make businesses memorable and professional.",
  },
  {
    title: "Social Media Growth",
    category: "Marketing",
    image: "/portfolio/social-media.jpg",
    description:
      "Content strategies and campaigns designed to increase engagement and followers.",
  },
  {
    title: "E-Commerce Store",
    category: "Website Development",
    image: "/portfolio/ecommerce.jpg",
    description:
      "Fast, modern online stores optimized for sales and customer experience.",
  },
  {
    title: "SEO Optimization",
    category: "Search Engine Optimization",
    image: "/portfolio/seo.jpg",
    description:
      "SEO strategies that improve Google rankings and generate organic traffic.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#08101f] py-32 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-cyan-300">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Recent Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Explore some of our recent work in website development,
            branding and digital marketing.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(37,99,235,.25)]"
            >

              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-5 left-5">

                  <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-xs font-semibold text-cyan-300">
                    {project.category}
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {project.description}
                </p>

                <button className="mt-7 rounded-xl border border-cyan-500 px-5 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white">
                  View Case Study →
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}