"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Real Estate",
    review:
      "NixMark completely transformed our online presence. Within a few weeks we started receiving high-quality leads and our website conversion rate improved significantly.",
  },
  {
    name: "Priya Singh",
    company: "Fashion Brand",
    review:
      "The team delivered a beautiful website along with Meta Ads that boosted our online sales. Professional, creative and always available to help.",
  },
  {
    name: "Amit Verma",
    company: "Restaurant Owner",
    review:
      "Google Ads campaigns by NixMark helped us attract more local customers. The ROI was far beyond our expectations.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#08101f] py-32 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-cyan-300">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Trusted By Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We focus on delivering measurable growth and long-term success for every client.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass group rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(37,99,235,.25)]"
            >

              {/* Stars */}

              <div className="mb-6 flex gap-1">

                {[1,2,3,4,5].map((star)=>(

                  <Star
                    key={star}
                    size={18}
                    fill="#facc15"
                    className="text-yellow-400"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="leading-8 text-gray-300">
                "{item.review}"
              </p>

              {/* Client */}

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400">
                    {item.company}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}