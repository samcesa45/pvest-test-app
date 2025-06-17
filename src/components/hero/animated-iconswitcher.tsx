'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type Icons = {
  src: string;
  bg: string;
};

type IconProps = {
  icons: Icons[];
};
export default function AnimatedIconSwitcher({ icons }: IconProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % icons.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative h-[100px] w-[100px] md:w-[152px] md:h-[152px] rounded-2xl md:rounded-[32px] overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: icons[index].bg }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={icons[index].src}
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 90 }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
          }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <Image
            src={icons[index].src}
            alt="Animated Icon"
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
