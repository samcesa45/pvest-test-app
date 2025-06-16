'use client';
import { AnimatePresence } from 'motion/react';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function PayBills() {
  const scrollRef = useRef(null);
  return (
    <section
      className="p-10 md:p-20 bg-center bg-cover relative min-h-screen w-full flex flex-col justify-center"
      style={{ backgroundImage: 'url(/images/paybills.jpg)' }}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black/20" />
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-between relative z-[2]"
        >
          <div className="max-w-[333px]">
            <div className="flex flex-col gap-20">
              <h1 className="font-paytone-one text-4xl text-white md:text-[52px] md:leading-15">
                Pay Bills
              </h1>
              <p className="font-dm-sans font-medium text-[1rem] leading-5 text-white">
                Say goodbye to long queues and endless processes—our platform
                offers a seamless solution for paying bills instantly without
                any hiccups.
              </p>
              <div>
                <p className="font-dm-sans font-medium mb-4 text-[1rem] leading-5 text-white">
                  Get Revve on your phone
                </p>
                <button className="py-3 px-5 rounded-xl bg-white text-black font-dm-sans font-bold text-[1rem] leading-6 ">
                  Coming soon
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={'/calendar.svg'}
              alt="Calendar Image"
              width={340}
              height={368}
              className="object-cover with-full backdrop-blur-40"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
