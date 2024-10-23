"use client";

import { motion } from 'framer-motion';
import React from 'react';

const TransitionVariants = {
   initial: {
      x: '100%',
      scale: 0.8,
      rotate: 45,
      opacity: 0,
   },
   animate: {
      x: '0%',
      scale: 1,
      rotate: 0,
      opacity: 1,
   },
   exit: {
      x: ['0%', '100%'],
      scale: 0.8,
      rotate: -45,
      opacity: 0,
   }
};

export const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 h-screen w-screen right-full z-[30] bg-[#61cea0]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 h-screen w-screen right-full z-[30] bg-[#7561ce]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 h-screen w-screen right-full z-[30] bg-[#61cea0]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
};

export default Transition;
