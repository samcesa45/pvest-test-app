'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            Send and Receive <br /> Money Instantly
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Empower your finances with our simple, fast and secure platform.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7000FF] text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-[#5800cc] transition">
              Get Started
            </button>
            <button className="bg-gray-100 text-[#7000FF] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[500px]"
        >
          <Image
            src="/images/hero-main.png"
            alt="Hero visual"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
