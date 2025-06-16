'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const steps = [
  {
    id: 1,
    title: 'Choose Currency',
    description: 'Select from supported currencies in your wallet dashboard.',
    icon: '/images/step-1.png',
  },
  {
    id: 2,
    title: 'Send or Receive',
    description: 'Initiate a transfer or receive funds easily.',
    icon: '/images/step-2.png',
  },
  {
    id: 3,
    title: 'Confirm Transaction',
    description: 'Review details and confirm in one click.',
    icon: '/images/step-3.png',
  },
];

export default function MultiCurrencyWalletSection() {
  return (
    <section
      className="w-full px-6 py-20 bg-white dark:bg-black"
      id="wallet-section"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Multi-Currency Wallet
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          Seamlessly manage, send, and receive multiple currencies in one secure
          wallet.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#F6F9FC] dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center shadow-md"
            >
              <div className="mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
