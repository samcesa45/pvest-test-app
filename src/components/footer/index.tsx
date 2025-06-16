'use client';
import React, { useRef } from 'react';
import { navLinks, socialLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'motion/react';
import FaqSection from '../faqs';
import ContactForm from '../form/contact-form';

export default function Footer() {
  const scrollRef = useRef(null);
  return (
    <>
      <footer className="row-start-3 relative flex gap-[24px]  justify-center bg-footer-purple min-h-screen w-full p-[40px] md:p-[80px]">
        <div>
          <FaqSection />
          <div className="mt-[100px]">
            <ContactForm />
          </div>
        </div>
        <div className="absolute bottom-[80px] md:bottom-[140px] -right-5 md:right-5 z-[2]">
          <Image
            src="/images/comment-icon.png"
            alt="Comment Image"
            className="object-cover w-full"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute -bottom-10 md:bottom-2 right-10">
          <Image
            src="/images/phone-icon.png"
            alt="Phone Image"
            className="object-cover w-full"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute -bottom-30 md:-bottom-18 left-2.5 md:left-8 z-[1]">
          <Image
            src="/images/email-icon.png"
            className="object-cover w-full"
            alt="Email Image"
            width={100}
            height={100}
          />
        </div>
      </footer>
      {/* footer-bottom */}
      <motion.div className="flex pt-[200px] flex-col md:flex-row md:justify-between items-center w-full  px-[80px] overflow-hidden  pb-[36px] bg-footer-purple ">
        {/* social links */}
        <ul className="flex gap-8 mb-10 md:mb-0">
          {socialLinks.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 0.85 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.url}
                className="text-white font-dm-sans font-medium text-[16px] leading-5 transition-all ease-in duration-300"
              >
                <Image src={link.img} alt={link.id} width={20} height={19.97} />
              </Link>
            </motion.li>
          ))}
        </ul>
        {/* social links */}
        {/* links */}
        <div className="flex items-center justify-center flex-wrap">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 0.85 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.url}
                  className="text-white text-nowrap font-dm-sans font-medium text-[16px] leading-5 transition-all ease-in duration-300"
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
          {/* copyrights */}
          <p className="text-white font-dm-sans font-medium text-nowrap text-[1rem] leading-5 mt-4 ml-10  md:mt-0">
            &copy; {new Date().getFullYear()} Revve. All rights reserved.
          </p>
          {/* copyrights */}
        </div>
        {/* links */}
      </motion.div>
      {/* footer-bottom */}
    </>
  );
}
