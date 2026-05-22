'use client';

import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { Counter } from '@/components/counter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  
  // Parallax tracking for About Story Image
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ['start end', 'end start'],
  });
  
  const imageY = useTransform(storyScroll, [0, 1], ['-15%', '15%']);

  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Atelier"
        title="Spatial inquiry guided by"
        italic="restraint."
        description="Aethel is an architecture and spatial design studio creating environments that bridge structural clarity and raw material expression."
      />

      {/* Mission statement with Parallax Image */}
      <section ref={storyRef} className="py-40 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Sticky/Parallax Image Column */}
          <div className="lg:col-span-5 relative bg-transparent">
            <p className="eyebrow mb-6 text-accent">— The Narrative</p>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-2xl bg-muted/20">
              <motion.div
                style={{
                  y: imageY,
                  scale: 1.15,
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80)',
                }}
                className="absolute inset-0 bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>

          {/* Right: Narrative text */}
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed opacity-85 pr-4 font-sans text-foreground">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Aenean sollicitudin lorem quis bibendum auctor. Nam nec tellus a odio tincidunt auctor a ornare odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values - staggered slide in cards */}
      <section className="bg-card/45 backdrop-blur-md border-y border-border py-40 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 bg-transparent">
          <p className="eyebrow mb-6 text-accent">— Principles</p>
          <h2 className="display-heading text-huge mb-24 max-w-3xl">
            What we <span className="italic text-accent">stand for.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Clarity', body: 'Every line and joint serves a purpose. We edit volumes to prioritize natural light and structural logic.' },
              { num: '02', title: 'Honesty', body: 'Materials are left in their authentic state, celebrating the beauty of stone, raw steel, and timber.' },
              { num: '03', title: 'Rhythm', body: 'Designing transitions that connect interior spaces with the natural environment, establishing balance.' },
              { num: '04', title: 'Dialogue', body: 'Architecture is a collaboration between site conditions, human patterns, and geometric order.' },
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="border-t border-border pt-8 hover-lift bg-transparent"
              >
                <p className="text-accent font-display text-3xl mb-6">{item.num}</p>
                <h3 className="display-heading text-2xl lg:text-3xl mb-4 font-semibold">{item.title}</h3>
                <p className="opacity-70 text-sm md:text-base leading-relaxed font-sans">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section with Parallax Float */}
      <section className="py-40 bg-transparent relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 bg-transparent">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left bg-transparent">
            {[
              { value: 850, suffix: '+', label: 'Projects completed' },
              { value: 12, suffix: '', prefix: '', label: 'Creative partners' },
              { value: 4, suffix: '', label: 'Global offices' },
            ].map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 bg-card/45 backdrop-blur-md border border-border/60 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow bg-transparent"
              >
                <div className="display-heading text-7xl md:text-8xl text-accent mb-4">
                  <Counter end={s.value} suffix={s.suffix} prefix={s.prefix || ''} />
                </div>
                <p className="eyebrow tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to work" italic="together?" />
    </div>
  );
}
