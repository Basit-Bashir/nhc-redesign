'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const offices = [
  {
    region: 'Region Alpha',
    city: 'Civitas I',
    address: '100 Lorem Blvd, Suite 25',
    location: 'Dolor City, IL 60174',
  },
  {
    region: 'Region Beta',
    city: 'Civitas II',
    address: '200 Ipsum Ave, Suite 30',
    location: 'Sit Amet, AZ 85251',
  },
  {
    region: 'Region Gamma',
    city: 'Civitas III',
    address: '300 Consectetur Rd, Floor 3',
    location: 'Adipiscing, TX 76022',
  },
];

const socials = [
  { name: 'Lorem', href: '#' },
  { name: 'Ipsum', href: '#' },
  { name: 'Dolor', href: '#' },
  { name: 'Sit', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-8 mt-12 relative overflow-hidden">
      {/* Massive wordmark */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading text-mega leading-[0.85] mb-16"
        >
          Forma. Spatium. <span className="italic text-accent">Substantia.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Contact CTA */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Get in touch</p>
            <p className="text-xl mb-8 leading-relaxed opacity-80 font-sans">
              Contact us for more information or to discuss your next project.
            </p>
            <div className="space-y-3">
              <a
                href="tel:555-019-2834"
                className="flex items-center gap-3 text-2xl font-display link-underline w-fit"
              >
                +1 (555) 019-2834
              </a>
              <a
                href="mailto:hello@aethel-design.com"
                className="flex items-center gap-3 text-2xl font-display link-underline w-fit"
              >
                hello@aethel-design.com
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-accent text-foreground rounded-full hover:bg-background hover:text-foreground transition-colors"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Offices */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Corporate Offices</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div key={office.region} className="border-t border-background/20 pt-4">
                  <p className="font-display text-lg mb-2 text-accent">{office.region}</p>
                  <p className="text-sm font-medium mb-1">{office.city}</p>
                  <p className="text-xs opacity-60 leading-relaxed font-sans">
                    {office.address}
                    <br />
                    {office.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-background/20 py-6 overflow-hidden mb-12">
          <div className="marquee whitespace-nowrap">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4 shrink-0">
                {['Lorem Ipsum', 'Consectetur Adipiscing', 'Sed Do Eiusmod', 'Tempor Incididunt', 'Ut Labore Et Dolore', 'Magna Aliqua'].map((item) => (
                  <span key={item} className="flex items-center gap-8 font-display text-3xl">
                    {item}
                    <span className="text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-background/20">
          <p className="text-xs opacity-60 font-mono">
            © {new Date().getFullYear()} Aethel Design &amp; Craft. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="text-xs link-underline opacity-80 hover:opacity-100 font-mono"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
