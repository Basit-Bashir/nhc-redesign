'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  italic?: string;
  buttonText?: string;
}

export function CTASection({
  title = 'Let’s start a',
  italic = 'conversation.',
  buttonText = 'Get in touch',
}: CTASectionProps) {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="display-heading text-huge mb-10 max-w-[15ch] mx-auto"
        >
          {title} <span className="italic text-accent">{italic}</span>
        </motion.h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full hover:bg-accent transition-colors group"
        >
          {buttonText}
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
