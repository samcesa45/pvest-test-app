'use client';
import { imgColumn1, imgColumn2, imgColumn3 } from '@/constants';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function CustomImageColumns() {
  return (
    <div className="flex gap-4">
      {[imgColumn1, imgColumn2, imgColumn3].map((column, colIdx) => (
        <div
          key={colIdx}
          className={`flex flex-col justify-center ${colIdx === 1 ? 'gap-[152px]' : ''} gap-4`}
        >
          {column.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
            >
              <Image
                src={src}
                alt={`image-${colIdx}-${idx}`}
                width={120}
                height={258}
                className="h-auto object-cover w-full"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
