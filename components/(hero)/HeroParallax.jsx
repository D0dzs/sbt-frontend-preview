'use client';

import { useEffect, useRef, useState } from 'react';
import { PARALLAX_LAYER_STYLES } from '~/utils/constants';
import { MotionConfig, useScroll, useTransform, motion } from 'motion/react';
import { HeroMouseIndicator } from './HeroMouseIndicator';

export const HeroParallax = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  const y0 = useTransform(scrollY, [0, 1000], [0, 1000]);
  const y1 = useTransform(scrollY, [0, 1000], [0, 550]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 600]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 650]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 700]);
  const y5 = useTransform(scrollY, [0, 1000], [0, 750]);
  const y6 = useTransform(scrollY, [0, 1000], [0, 800]);
  const y7 = useTransform(scrollY, [0, 1000], [0, 850]);
  const y8 = useTransform(scrollY, [0, 1000], [0, 900]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <MotionConfig reducedMotion={'user'}>
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y: isMobile ? 0.01 : y0, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/0.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y8, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/8.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y7, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/7.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y6, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/6.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y5, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/5.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y4, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/4.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y3, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/3.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y2, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/2.webp)' }} />
        <motion.div style={{ y: isMobile ? 0.01 : y1, ...PARALLAX_LAYER_STYLES, backgroundImage: 'url(/parallax/1.webp)' }} />

        <HeroMouseIndicator scrollY={scrollY} />
      </div>
    </MotionConfig>
  );
};
