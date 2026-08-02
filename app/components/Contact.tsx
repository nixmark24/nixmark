"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_5mee8tm",
        "template_ihuxelk",
        form.current,
        "1n3NMOzO_26ocFnur"
      )
      .then(() => {
        setLoading(false);
        setSuccess("✅ Message Sent Successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setSuccess("❌ Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#050816] py-32 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-cyan-300">
            CONTACT US
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Let's Grow Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Have a project in mind? Get in touch and we'll help you
            build, market and grow your business online.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl border border-white/10 p-10"
          >
            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              We'd love to hear about your project.
              Reach out using the details below.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-5">
                <Mail className="text-cyan-400" size={28} />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">
                    hellonixmark@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Phone className="text-cyan-400" size={28} />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">
                    +91 92364 97210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <MapPin className="text-cyan-400" size={28} />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">
                    Buddh Vihar, Part C, Taramandal,
                    Gorakhpur, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Clock className="text-cyan-400" size={28} />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-300">
                    Mon - Sat | 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl border border-white/10 p-10"
          >

            <div className="grid gap-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <select
                name="service"
                required
                className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              >
                <option value="">Choose a Service</option>
                <option>Website Development</option>
                <option>Google Ads</option>
                <option>Meta Ads</option>
                <option>SEO</option>
                <option>Branding</option>
                <option>Social Media Marketing</option>
              </select>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project..."
                className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary rounded-xl py-4 text-lg font-bold disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {success && (
                <p className="text-center text-green-400">
                  {success}
                </p>
              )}

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}