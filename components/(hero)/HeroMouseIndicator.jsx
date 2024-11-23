'use client';

import { motion, useTransform } from 'motion/react';

export const HeroMouseIndicator = ({ scrollY }) => {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      initial={{ opacity: 1 }}
      style={{ opacity: useTransform(scrollY, [0, 500], [1, 0]) }}
      className="absolute bottom-28 left-1/2"
    >
      <div className="-translate-y-4 w-5 h-5 border-b-2 border-r-2 border-white rotate-45" />
    </motion.div>
  );
};
