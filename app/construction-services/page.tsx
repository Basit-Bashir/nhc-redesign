'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Spatial Planning',
    href: '/pre-construction',
    blurb: 'Geometric order and programmatic allocation prior to development.',
    points: ['Volumetric study', 'Material logic', 'Cost optimization', 'Layout analysis'],
  },
  {
    num: '02',
    title: 'Architectural Craft',
    href: '/general-contracting',
    blurb: 'Complete material realization and construction craftsmanship.',
    points: ['Tectonic assembly', 'Slab engineering', 'Detail refinement', 'System integration'],
  },
  {
    num: '03',
    title: 'Tectonic Science',
    href: '/construction-management',
    blurb: 'Systematic supervision and quality stewardship.',
    points: ['Scheduling rigor', 'Financial balance', 'Visual reporting', 'Threshold checks'],
  },
  {
    num: '04',
    title: 'Material Research',
    href: '/real-estate-advisory',
    blurb: 'Inquiry into raw substrates, aging, and structural performance.',
    points: ['Context studies', 'Substrate tests', 'Light modeling', 'Thermal engineering'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Services"
        title="Four typologies."
        italic="One language."
        description="Aethel is structured around four primary research and development areas, ensuring cohesive execution across scales."
      />

      <section className="py-32 bg-transparent relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 space-y-16 bg-transparent">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-transparent"
            >
              <Link
                href={s.href}
                className="group block border-t border-border pt-12 hover:border-accent transition-colors bg-transparent"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start bg-transparent">
                  <div className="lg:col-span-1">
                    <p className="text-accent font-display text-4xl">{s.num}</p>
                  </div>
                  
                  <div className="lg:col-span-5 bg-transparent">
                    <h2 className="display-heading text-4xl md:text-6xl mb-6 group-hover:text-accent transition-colors flex items-center gap-4">
                      {s.title}
                      <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                    </h2>
                    <p className="text-lg opacity-75 max-w-md font-sans text-foreground">{s.blurb}</p>
                  </div>
                  
                  <div className="lg:col-span-6 lg:pt-2 bg-transparent">
                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8 bg-transparent">
                      {s.points.map((p, pIdx) => (
                        <motion.li
                          key={p}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 + pIdx * 0.05 }}
                          className="flex items-center gap-3 text-sm md:text-base font-mono"
                        >
                          <span className="text-accent">→</span>
                          <span className="opacity-80 group-hover:opacity-100 transition-opacity text-foreground">{p}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection title="Collaborate on" italic="new designs." />
    </div>
  );
}
