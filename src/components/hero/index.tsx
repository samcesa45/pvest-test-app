'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import ScrollButtons from './scroll-button';
import AnimatedIconSwitcher from './animated-iconswitcher';
const icons = [
  { src: '/naira.svg', bg: '#9747FF' },
  { src: '/dollar.svg', bg: '#F63448' },
];
const plainIcons = [
  { src: '/plain-icon.svg', bg: '#04B159' },
  { src: '/blue.svg', bg: '#215CFF' },
];
export default function Hero() {
  const scrollRef = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleScroll = (direction: 'up' | 'down') => {
    const offset = 1200;
    if (sectionRef.current) {
      window.scrollBy({
        top: direction === 'down' ? offset : -offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-10 md:pt-20 md:pb-[175px] md:mb-[175px] min-h-screen overflow-hidden"
    >
      {/* scroll content */}
      <ScrollButtons onScroll={handleScroll} />
      {/* scroll content */}
      {/* background floating icons */}
      <div
        className="bg-center bg-cover absolute flex items-center justify-center top-[10px] md:top-[70px] -left-[40px] w-[100px] h-[100px]  md:w-[152px] md:h-[152px] rounded-[32px]"
        style={{ backgroundImage: 'url(/send.svg)' }}
      >
        <p className="text-white font-paytone-one md:text-3xl lg:leading-[52px] lg:text-[40px]">
          Send
        </p>
      </div>
      <div
        className="bg-center bg-cover absolute -left-[45px] lg:-left-[40px] bottom-0 w-[191px] h-[280px] rounded-[32px]"
        style={{ backgroundImage: 'url(/images/female2.jpg)' }}
      />
      <div
        className="bg-center bg-cover absolute top-[10px] md:top-[70px] right-[20px] md:right-[76px] w-[152px] h-[180px] rounded-[32px]"
        style={{ backgroundImage: 'url(/images/female3.jpg)' }}
      />
      <div
        className="bg-center bg-cover flex items-center justify-center absolute bottom-0 -right-[40px] w-[100px] h-[100px]  md:w-[152px] md:h-[152px] rounded-[32px]"
        style={{ backgroundImage: 'url(/send.svg)' }}
      >
        <p className="text-white font-paytone-one md:text-3xl lg:leading-[52px] lg:text-[40px]">
          Send
        </p>
      </div>
      {/* background floating icons */}
      {/* central content */}
      <div className="flex flex-col items-center justify-center space-y-12 mt-20 z-10 relative">
        <div className="flex items-center justify-center md:gap-6">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mr-2 mb-[133px]"
          >
            <AnimatedIconSwitcher icons={icons} />
          </motion.div>
          <div className=" flex flex-col items-center justify-center">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <Image
                src={'/images/female1.jpg'}
                alt="Hero Woman image"
                width={424}
                height={493}
                className="object-cover rounded-[32px] lg:rounded-[52px] w-auto h-[350px] lg:w-[424px] lg:h-[493px]"
              />
              <div
                className="absolute top-0 rounded-[32px] lg:rounded-[52px] w-auto h-[350px] lg:w-[424px] lg:h-[493px] left-0 right-0 bottom-0 z-[1] "
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 43.73%, rgba(0, 0, 0, 0.6) 87.94%)',
                }}
              />
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-dm-sans font-medium max-w-3xl absolute left-[20%] -translate-x-[20%]  bottom-10 z-[2] px-4 md:px-0 text-start  text-sm md:text-[1rem] md:leading-5 text-white"
              >
                Seamlessly bridge distances with our effortless remittance
                service. Send support, and financial care to your loved ones
                back home.
              </motion.p>
            </motion.div>
            <motion.div 
             initial={{ y: 20 }}
             whileInView={{ y: 0 }}
             viewport={{ root: scrollRef }}
             transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto text-center mt-4 max-w-[541px]">
              <motion.h1
               
                className="font-paytone-one font-[400] text-3xl sm:text-4xl md:text-4xl lg:leading-15 lg:text-[52px]"
              >
                Send and Receive Money
              </motion.h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="ml-2"
          >
            <AnimatedIconSwitcher icons={plainIcons} />
          </motion.div>
        </div>
      </div>
      {/* central content */}
    </section>
  );
}
