"use client";

import Image from "next/image";
import { FiCornerDownRight } from "react-icons/fi";
import { motion } from "framer-motion";

interface Step {
  text: React.ReactNode;
}

interface ASDClosureSectionProps {
  tag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  steps: Step[];
}

export default function ASDClosureSection({
  tag,
  title,
  imageSrc,
  imageAlt,
  steps,
}: ASDClosureSectionProps) {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
         className="relative w-full h-[350px] md:h-[420px] lg:h-[520px] rounded-[70px] rounded-br-2xl overflow-hidden"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={1000}
            className="object-cover h-full w-full"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Subtitle */}
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
            {tag}
          </p>

          {/* Title */}
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h2>

          {/* Steps */}
          <div className="mt-6 space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="flex items-start gap-3"
              >
                <FiCornerDownRight className="text-blue-500 mt-1 shrink-0" />
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
