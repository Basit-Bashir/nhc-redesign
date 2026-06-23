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
        eyebrow="About the Firm"
        title="We built this firm to do one thing well:"
        italic="represent the owner."
        description="New Path Construction & Consulting was founded by construction professionals who saw the same problem again and again: owners lacked a true advocate in the building process."
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
                    'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80)',
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
              Founded in the Midwest with a focus on disciplined process, NPC has grown into a nationally active firm with offices in Illinois, Arizona, and Texas. We serve commercial, institutional, mixed-use, and residential developers who demand more than a transactional relationship.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Our team combines general contracting backgrounds with owner&apos;s representation experience — meaning we understand both how buildings are built and how to protect the people paying for them. We bring that dual perspective to every engagement, from a 5,000-square-foot tenant improvement to a ground-up development exceeding $100 million.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Every NPC project is led by a principal. Every client gets direct access to the decision-makers. That is not a promise — it is how we are structured.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values - staggered slide in cards */}
      <section className="bg-card/45 backdrop-blur-md border-y border-border py-40 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 bg-transparent">
          <p className="eyebrow mb-6 text-accent">— Principles</p>
          <h2 className="display-heading text-huge mb-24 max-w-3xl">
            Principles we don&apos;t <span className="italic text-accent">compromise on.</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Integrity first.', body: 'We give clients honest assessments — even when the answer isn\'t what they want to hear. Long-term relationships matter more to us than any single project.' },
              { num: '02', title: 'Owners\' interests, always.', body: 'We work exclusively for owners and developers, never contractors. Our advice is never compromised by subcontractor relationships.' },
              { num: '03', title: 'Boutique by design.', body: 'We stay small intentionally. Every client gets senior leadership attention, not junior staff. Our principals are involved from kickoff to closeout.' },
              { num: '04', title: 'Precision over speed.', body: 'We plan obsessively upfront so we execute without surprises downstream. A well-run project is always faster than a reactive one.' },
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
              { value: 200, suffix: 'M+', prefix: '$', label: 'Work completed' },
              { value: 15, suffix: '+', prefix: '', label: 'Years of experience' },
              { value: 3, suffix: '', label: 'Corporate offices' },
            ].map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="p-8 bg-card/45 backdrop-blur-md border border-border/60 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow"
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
