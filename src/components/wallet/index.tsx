'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export const cardImg = [
  '/images/ngn.png',
  '/images/gha.png',
  '/images/cad.png',
  '/images/usd.png',
];

export default function MultiCurrencyWalletSection() {
  return (
    <section
      className="w-full px-10 pt-10 flex flex-col pb-0 xl:px-20 xl:pt-20 bg-white"
      id="wallet-section"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col mr-[22px] pb-[240px] lg:pb-10 justify-between max-w-[400px] gap-[70px] ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-paytone-one font-[400] text-3xl lg:text-5xl xl:text-[52px] xl:leading-15"
          >
            Multi-currency Wallets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-dm-sans font-medium text-[1rem] text-black leading-5"
          >
            Facilitate effortless management of multiple wallets, each dedicated
            to a specific currency, streamlining transactions and storage across
            various currencies.
            <br />
            <br />
            Enhance user experience with tailored wallets for different
            currencies, empowering efficient financial management and
            flexibility in global transactions
          </motion.p>
        </div>
        {/* wallet */}
        <div className="relative">
          {/* Phone Image */}
          <Image
            src="/images/iphone.png"
            width={358}
            height={619}
            className="object-cover"
            alt="iphone"
          />
          <div className="absolute -top-[200px] lg:-top-[40%] items-center left-0 right-0 flex flex-col justify-center gap-4 z-10">
            {cardImg.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Image
                  src={src}
                  width={250}
                  height={180}
                  className="object-cover backdrop:backdrop-blur-40"
                  alt={`Card ${index}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* wallet */}
        {/* girl */}
        <div className="max-w-[414px]">
          <Image
            src="/images/girl.png"
            alt="Girl Image"
            width={414}
            height={788}
            className="object-bottom w-full"
          />
        </div>
        {/* girl */}
      </div>
    </section>
  );
}
