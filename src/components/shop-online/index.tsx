'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import CustomImageColumns from './custom-image-column';

export default function ShopOnline() {
  const scrollRef = useRef(null);
  return (
    <section className="relative min-h-screen  flex flex-col justify-center overflow-hidden w-full bg-light p-10 md:pl-20">
      <div className="flex flex-col gap-[70px] md:gap-0 md:flex-row">
        {/* shop content */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-[352px] mr-9 md:mr-[70px]"
        >
          <div className="flex flex-col gap-20">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paytone-one text-4xl text-black md:text-[52px] md:leading-15"
            >
              Shop Online
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-dm-sans font-medium text-[1rem] leading-5 text-black"
            >
              Experience the world at your fingertips with our seamless online
              shopping platform. From the latest fashion trends to must-have
              gadgets, shop the world's best brands and products from the
              comfort of your own home.
            </motion.p>
            <div>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ root: scrollRef }}
                className="font-dm-sans font-medium mb-4 text-[1rem] leading-5 text-black"
              >
                Get Revve on your phone
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ root: scrollRef }}
                className="py-3 px-5 rounded-xl bg-black text-white font-dm-sans font-bold text-[1rem] leading-6 "
              >
                Download the app
              </motion.button>
            </div>
          </div>
        </motion.div>
        {/* shop content */}
        {/* images */}
        <div className="overflow-hidden">
          <Image
            src={'/images/shop-image.png'}
            alt="Shop Phone Image"
            width={358}
            height={619}
            className="object-cover"
          />
        </div>
        {/* images */}
        {/* grids */}
        <CustomImageColumns />
        {/* grids */}
      </div>
    </section>
  );
}
