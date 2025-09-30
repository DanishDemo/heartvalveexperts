"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            style={{ letterSpacing: "2px" }}
            className="text-gray-600 text-base font-medium tracking-wide flex items-center justify-start mb-3 gap-1 uppercase"
          >
            <span className="w-6 h-6 rounded-full">
              <img
                src="/images/icon/Ellipse 3.svg"
                alt=""
                className="w-full h-full object-contain"
              />
            </span>
            Get in Touch
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
            Contact the Leading Cardiologists in Mumbai for Advanced Heart Care
          </h2>
          <p className="text-gray-600 mb-6">
            Your query will be answered within 24 hours of time, in case of any
            urgency email us or call on the details below:
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FiMail className="text-black text-4xl mt-1 border p-2 rounded-full" />
              <a
                href="mailto:heartvalveexperts@gmail.com"
                className="hover:text-blue-600"
              >
                heartvalveexperts@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-black text-4xl mt-1 border p-2 rounded-full" />
              <a
                href="tel:+919004506263"
                className="hover:text-blue-600"
              >
                +91 900 450 6263
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="text-black text-4xl mt-1 border p-2 rounded-full" />
              <p>
                Silver Apartments, A12, Shankar Ghanekar Rd, <br />
                behind Siddhivinayak Mandir, Prabhadevi, Mumbai, Maharashtra
                400025
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="animate-gradient-circle p-6 py-10 lg:p-12 rounded-[50px] shadow-lg"
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-5 py-3 rounded-3xl bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" cursor-pointer mx-auto px-5 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
