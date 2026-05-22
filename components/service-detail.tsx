'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from './page-header';
import { CTASection } from './cta-section';
import { useRef } from 'react';

interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  overview: string;
  capabilities: { title: string; body: string }[];
  process: { num: string; title: string; body: string }[];
  relatedServices: { title: string; href: string }[];
}

export function ServiceDetail({
  eyebrow,
  title,
  italic,
  description,
  overview,
  capabilities,
  process,
  relatedServices,
}: ServiceDetailProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Parallax for the overview details image
  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(imageScroll, [0, 1], ['-12%', '12%']);

  // Random Unsplash image index for each service
  const serviceImages: { [key: string]: string } = {
    'General Contracting': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    'Pre-Construction': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    'Construction Management': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    'Real Estate Advisory': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  };

  const bgImg = serviceImages[eyebrow] || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80';

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        italic={italic}
        description={description}
      />

      {/* Overview with Parallax Image */}
      <section ref={imageRef} className="py-40 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Section narrative */}
          <div className="lg:col-span-6 space-y-8 pr-4">
            <p className="eyebrow text-accent">— Overview</p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl leading-snug font-sans text-foreground"
            >
              {overview}
            </motion.p>
          </div>

          {/* Right: Structural detail parallax image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-border shadow-2xl">
              <motion.div
                style={{ y: imgY, scale: 1.15, backgroundImage: `url(${bgImg})` }}
                className="absolute inset-0 bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities cards with micro-animations */}
      <section className="bg-card/40 backdrop-blur-md border-y border-border py-40 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6 text-accent">— Capabilities</p>
          <h2 className="display-heading text-huge mb-24 max-w-3xl">
            What we <span className="italic text-accent">deliver.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="bg-background/45 backdrop-blur-sm border border-border/80 p-8 lg:p-10 rounded-3xl shadow-md hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover-lift"
              >
                <p className="text-accent font-display text-2xl mb-6">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="display-heading text-2xl lg:text-3xl mb-4 font-semibold">{cap.title}</h3>
                <p className="opacity-70 text-sm md:text-base leading-relaxed font-sans">{cap.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process list */}
      <section className="py-40 bg-transparent relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6 text-accent">— Process</p>
          <h2 className="display-heading text-huge mb-24 max-w-3xl">
            How it <span className="italic text-accent">works.</span>
          </h2>
          
          <div className="space-y-0">
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-6 py-10 border-t border-border/70 last:border-b items-center group hover:bg-muted/10 px-4 -mx-4 rounded-xl transition-colors duration-300"
              >
                <p className="col-span-2 md:col-span-1 text-accent font-display text-2xl">
                  {step.num}
                </p>
                <h3 className="col-span-10 md:col-span-4 display-heading text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="col-span-12 md:col-span-7 text-sm md:text-base opacity-70 leading-relaxed font-sans pr-4">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-foreground/95 backdrop-blur-md text-background py-32 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6 text-background/50">— Other services</p>
          <h2 className="display-heading text-5xl mb-16">
            Explore more disciplines.
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center justify-between hover:bg-accent hover:border-accent hover:text-foreground transition-all duration-500"
              >
                <span className="display-heading text-xl lg:text-2xl font-medium">{s.title}</span>
                <div className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
