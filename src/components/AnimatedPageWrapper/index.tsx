import { motion } from 'framer-motion';
import React from 'react';

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

interface Props {
  children: React.ReactNode;
}

const AnimatedPageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
