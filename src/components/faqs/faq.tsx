'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { faqs } from '@/constants';
import PlusIcon from '../svgs/plus-icon';

export default function Faq() {
  const scrollRef = useRef(null);
  const [isOpenIndex, setIsOpenIndex] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setIsOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <motion.section className="pt-20 lg:pt-[200px]">
      <motion.div className="flex flex-col md:flex-row justify-between gap-[100px] lg:gap-[234px]">
        <motion.div className="md:max-w-[266px]">
          <motion.h1
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-paytone-one text-white font-[400] mb-20 text-[52px] leading-15"
          >
            FAQS
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[1rem] text-white leading-5 font-dm-sans mb-20 font-medium "
          >
            Here are some basic questions and answers to help you get started.
          </motion.p>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[1rem] text-white leading-5 font-dm-sans mb-4 font-[400] "
          >
            Get Revve on your phone
          </motion.p>
          <button className="bg-white text-nowrap text-black text-[1rem] mb-20 leading-6 rounded-[12px] py-3 px-5 font-dm-sans font-bold">
            Download the app
          </button>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-3"
          >
            <motion.div>
              <Image src={'/mouse.svg'} alt="" width={20} height={20} />
            </motion.div>
            <p className="font-dm-sans font-medium text-[1rem] leading-5 text-white/30">
              Point your mouse cursor here to continue scrolling
            </p>
          </motion.div>
        </motion.div>

        {/* Accordion */}
        <div className="w-full space-y-8">
          {faqs.map((faq, index) => {
            const isOpen = isOpenIndex.includes(index);
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ root: scrollRef }}
                transition={{ delay: 0.3, duration: 0.8 }}
                key={index}
                className="overflow-hidden rounded-md cursor-pointer border-b-2 pb-8 border-[#5D0186] last:border-b-0"
              >
                <motion.div
                  whileHover={{ color: 'white' }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="cursor-pointer flex justify-between hover:text-white items-start  gap-x-10 max-w-[780px]"
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleToggle(index);
                    }
                  }}
                >
                  <motion.p
                    whileHover={{ color: 'white' }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-extralight-purple  text-start font-paytone-one font-[400] text-xl lg:text-[40px] lg:leading-15"
                  >
                    {faq.question}
                  </motion.p>
                  <motion.button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    whileHover={{ color: 'white' }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <PlusIcon className="text-extralight-purple active:text-white hover:text-white" />
                  </motion.button>
                </motion.div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ delay: 0.5 }}
                      className=" text-sm p-8 bg-[#43015fd9]"
                    >
                      <p className="font-dm-sans font-medium text-[1rem] leading-5 text-white">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        {/* Accordion */}
      </motion.div>
    </motion.section>
  );
}
