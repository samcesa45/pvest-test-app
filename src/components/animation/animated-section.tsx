'use client';
import { useAnimation, useInView, motion, inView } from 'motion/react';
import React, { useEffect, useRef } from 'react';

export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const animateInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (animateInView) {
      controls.start('visible');
    }
  }, [inView,controls,animateInView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.6 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
