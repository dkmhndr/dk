'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef } from 'react';

type PageTransitionProps = HTMLMotionProps<'div'>;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const transition = { duration: 0.6, ease: 'easeInOut' };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
