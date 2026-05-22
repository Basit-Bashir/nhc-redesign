'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, italic, description }: PageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax shifts and fades
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const lineDraw = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative pt-44 pb-24 border-b border-border overflow-hidden bg-muted/10"
    >
      {/* Dynamic architectural layout line in Page Header */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.line
            x1="0"
            y1="80"
            x2="100"
            y2="80"
            stroke="rgb(var(--foreground))"
            strokeWidth="0.05"
            style={{ opacity: lineDraw }}
          />
          <motion.line
            x1="10"
            y1="0"
            x2="10"
            y2="100"
            stroke="rgb(var(--foreground))"
            strokeWidth="0.05"
            style={{ opacity: lineDraw }}
          />
          <motion.circle
            cx="10"
            cy="80"
            r="1"
            fill="none"
            stroke="rgb(var(--accent))"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6 text-accent"
          >
            — {eyebrow}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display-heading text-6xl md:text-8xl lg:text-9xl mb-8 max-w-5xl"
          >
            {title}{' '}
            {italic && <span className="italic text-accent">{italic}</span>}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl max-w-3xl opacity-75 leading-relaxed font-sans"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
