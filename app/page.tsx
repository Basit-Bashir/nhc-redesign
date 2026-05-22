'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, MotionValue, useVelocity } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Counter } from '@/components/counter';

const services = [
  {
    num: '01',
    title: 'Spatial Planning',
    href: '/pre-construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    num: '02',
    title: 'Architectural Craft',
    href: '/general-contracting',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    blurb:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    num: '03',
    title: 'Tectonic Science',
    href: '/construction-management',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    blurb:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    num: '04',
    title: 'Material Research',
    href: '/real-estate-advisory',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    blurb:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const verticals = [
  {
    name: 'Typology Alpha',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    href: '/portfolio?category=restaurants',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.',
    count: '95 Realized',
    highlight: 'Archetype I',
    color: '#e09c50',
  },
  {
    name: 'Typology Beta',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=800&q=80',
    href: '/portfolio?category=gas-stations',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    count: '62 Realized',
    highlight: 'Archetype II',
    color: '#38bdf8',
  },
  {
    name: 'Typology Gamma',
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=80',
    href: '/portfolio?category=car-wash',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    count: '48 Realized',
    highlight: 'Archetype III',
    color: '#60a5fa',
  },
  {
    name: 'Typology Delta',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    href: '/portfolio?category=industrial',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    count: '110 Realized',
    highlight: 'Archetype IV',
    color: '#f97316',
  },
  {
    name: 'Typology Epsilon',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    href: '/portfolio?category=medical',
    description: 'Aenean sollicitudin lorem quis bibendum auctor. Nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    count: '74 Realized',
    highlight: 'Archetype V',
    color: '#2dd4bf',
  },
  {
    name: 'Typology Zeta',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    href: '/portfolio?category=multi-family',
    description: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat.',
    count: '93 Realized',
    highlight: 'Archetype VI',
    color: '#facc15',
  },
  {
    name: 'Typology Eta',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    href: '/portfolio?category=retail',
    description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    count: '142 Realized',
    highlight: 'Archetype VII',
    color: '#fb7185',
  },
  {
    name: 'Typology Theta',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    href: '/portfolio?category=self-storage',
    description: 'Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit.',
    count: '54 Realized',
    highlight: 'Archetype VIII',
    color: '#a78bfa',
  },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. HERO & ZOOM INTERACTIVES
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Hero text parallax
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '100%']);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  // Image zoom reveal
  const zoomSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: zoomScroll } = useScroll({
    target: zoomSectionRef,
    offset: ['start end', 'end start'],
  });

  const zoomWidth = useTransform(zoomScroll, [0, 0.5], ['55vw', '100vw']);
  const zoomHeight = useTransform(zoomScroll, [0, 0.5], ['55vh', '100vh']);
  const zoomRadius = useTransform(zoomScroll, [0, 0.5], ['24px', '0px']);
  const zoomScale = useTransform(zoomScroll, [0, 0.5], [1.2, 1]);

  // SVG Line Art drawing mapping
  const pathLength = useTransform(zoomScroll, [0, 0.4], [0, 1]);

  // 2. STATS SECTION BG COLOR INTERPOLATION
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: statsScroll } = useScroll({
    target: statsSectionRef,
    offset: ['start end', 'end start'],
  });
  // Stats background blend
  const statsBg = useTransform(
    statsScroll,
    [0.1, 0.5, 0.9],
    ['rgba(var(--background), 0)', 'rgba(var(--muted), 0.25)', 'rgba(var(--background), 0)']
  );

  // 3. FIRM INTRO WORD-BY-WORD HIGHLIGHTING
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introScroll } = useScroll({
    target: introRef,
    offset: ['start 80%', 'end 30%'],
  });

  // 4. SERVICES DECK STACKING
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: servicesScroll } = useScroll({
    target: servicesRef,
    offset: ['start start', 'end end'],
  });

  // 5. VERTICALS HORIZONTAL SCROLL
  const horizontalsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalScroll } = useScroll({
    target: horizontalsRef,
    offset: ['start start', 'end end'],
  });
  // Slide horizontally from 0% to -73% (covers 8 items plus spacing)
  const xTranslate = useTransform(horizontalScroll, [0, 1], ['0%', '-73%']);

  // 6. APPROACH ASYMMETRIC PARALLAX
  const approachRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: approachScroll } = useScroll({
    target: approachRef,
    offset: ['start end', 'end start'],
  });
  const leftColY = useTransform(approachScroll, [0, 1], ['0%', '-15%']);
  const rightColY = useTransform(approachScroll, [0, 1], ['0%', '15%']);

  // 7. FOOTER CURTAIN REVEAL
  const curtainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: curtainScroll } = useScroll({
    target: curtainRef,
    offset: ['start end', 'end end'],
  });
  const curtainScale = useTransform(curtainScroll, [0, 1], [0.96, 1]);
  const curtainOpacity = useTransform(curtainScroll, [0, 1], [0.5, 1]);

  return (
    <div ref={containerRef} className="relative z-10 w-full overflow-hidden bg-transparent">
      {/* 1. HERO & IMAGE ZOOM SECTION */}
      <section ref={heroRef} className="relative min-h-[140vh] flex flex-col justify-between pt-36 overflow-hidden bg-transparent">

        {/* Architectural grid drawing */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M 10,0 L 10,100 M 30,0 L 30,100 M 50,0 L 50,100 M 70,0 L 70,100 M 90,0 L 90,100 M 0,20 L 100,20 M 0,50 L 100,50 M 0,80 L 100,80"
              stroke="rgb(var(--foreground))"
              strokeWidth="0.05"
              fill="none"
              style={{ pathLength }}
            />
            {/* Diagonal perspective layout lines */}
            <motion.path
              d="M 0,0 L 100,100 M 100,0 L 0,100"
              stroke="rgb(var(--accent))"
              strokeWidth="0.03"
              fill="none"
              style={{ pathLength }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-12 flex-grow flex flex-col justify-end pb-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="eyebrow">Boutique Design &amp; Craft Studio</p>
          </motion.div>

          {/* Mega headline */}
          <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }}>
            <h1 className="display-heading text-mega mb-8 max-w-[12ch]">
              Forming <span className="italic text-accent">spaces,</span> sculpting light, defining landscapes.
            </h1>
          </motion.div>
        </div>

        {/* Framing expand block */}
        <div ref={zoomSectionRef} className="relative w-full h-screen flex items-center justify-center bg-transparent mt-12">
          <motion.div
            style={{ width: zoomWidth, height: zoomHeight, borderRadius: zoomRadius }}
            className="relative overflow-hidden shadow-2xl border border-border/10"
          >
            <motion.div
              style={{
                scale: zoomScale,
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&q=80)',
              }}
              className="absolute inset-0 bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />

            {/* Scroll Cue Inside zoom */}
            <div className="absolute bottom-10 left-6 lg:left-12 right-6 lg:right-12 z-20 flex justify-between items-end">
              <p className="text-sm opacity-60 leading-relaxed max-w-sm hidden md:block font-sans text-foreground">
                We create structures with deliberate restraint and geometric precision. A dialogue between space and materiality.
              </p>
              <div className="flex items-center gap-2 eyebrow text-accent">
                <span>Explore form</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-px h-8 bg-accent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR WITH BG COLOR PARALLAX */}
      <motion.section
        ref={statsSectionRef}
        style={{ backgroundColor: statsBg }}
        className="border-y border-border py-20 transition-all duration-300 bg-transparent"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 850, suffix: '+', label: 'Concepts realized' },
            { value: 12, suffix: '', label: 'Design systems', prefix: '' },
            { value: 4, suffix: '', label: 'Global ateliers' },
            { value: 100, suffix: '%', label: 'Standard certified' },
          ].map((stat, i) => (
            <div key={stat.label}>
              <div className="display-heading text-5xl md:text-6xl text-accent mb-2">
                <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-xs uppercase tracking-wider opacity-60 font-mono">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. INTRO STATEMENT WITH WORD SCROLL HIGHLIGHTING */}
      <section ref={introRef} className="py-40 bg-transparent relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">— The Atelier</p>
          </div>
          <div className="lg:col-span-9">
            <ScrollHighlightText
              progress={introScroll}
              text="Aethel is a multi-disciplinary architecture and spatial design atelier. Our work exists at the intersection of structural rigor and tactile warmth. We design not for immediate impact, but for enduring resonance, crafting environments that shape human experience."
            />
            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 link-underline text-accent font-mono text-xs uppercase tracking-wider"
              >
                Learn about our vision <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES — STICKY OVERLAPPING CARDS */}
      <section ref={servicesRef} className="relative py-24 bg-transparent">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-20">
          <p className="eyebrow mb-4">— Disciplines</p>
          <h2 className="display-heading text-huge max-w-3xl">
            Core <span className="italic text-accent">disciplines.</span>
          </h2>
        </div>

        {/* Card deck track */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 space-y-12 bg-transparent">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              total={services.length}
              scrollYProgress={servicesScroll}
            />
          ))}
        </div>
      </section>

      {/* 5. VERTICALS GRID — HORIZONTAL SCROLL GALLERY */}
      <section ref={horizontalsRef} className="relative h-[220vh] bg-transparent">
        <div className="sticky top-0 h-screen flex flex-col justify-between py-24 overflow-hidden z-10 bg-transparent">

          {/* Header area */}
          <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4 bg-transparent">
            <div>
              <p className="eyebrow mb-4">— Typologies</p>
              <h2 className="display-heading text-huge">
                Eight <span className="italic text-accent">archetypes.</span> One system.
              </h2>
            </div>
            <p className="text-sm opacity-60 max-w-sm font-sans mb-1 text-foreground">
              A selection of projects exploring diverse typologies, scales, and programmatic requirements.
            </p>
          </div>

          {/* Horizontal slider track */}
          <div className="relative z-10 w-full overflow-hidden bg-transparent">
            <motion.div style={{ x: xTranslate }} className="flex gap-8 pl-6 lg:pl-12 w-max bg-transparent">
              {verticals.map((v, i) => (
                <VerticalCard
                  key={v.name}
                  vertical={v}
                  index={i}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. APPROACH — ASYMMETRIC PARALLAX COLUMNS */}
      <section ref={approachRef} className="bg-foreground text-background py-32 overflow-hidden relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6 text-accent">— Philosophy</p>
          <h2 className="display-heading text-huge mb-24 max-w-4xl">
            Guided by fundamental principles:{' '}
            <span className="italic text-accent">scale, material integrity, and spatial rhythm.</span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left asymmetric column (slow scroll) */}
            <motion.div style={{ y: leftColY }} className="lg:col-span-5 space-y-12">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-background/10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80)' }}
                />
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                <p className="font-display text-accent text-3xl mb-4">01</p>
                <h3 className="display-heading text-2xl mb-4">Spatial Clarity</h3>
                <p className="opacity-70 leading-relaxed text-sm font-sans">
                  Every gesture is considered. We organize volumes and circulation to optimize natural light, sightlines, and functional efficiency.
                </p>
              </div>
            </motion.div>

            {/* Right asymmetric column (fast scroll) */}
            <motion.div style={{ y: rightColY }} className="lg:col-span-7 space-y-12 lg:mt-24">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                <p className="font-display text-accent text-3xl mb-4">02</p>
                <h3 className="display-heading text-2xl mb-4">Material Honesty</h3>
                <p className="opacity-70 leading-relaxed text-sm font-sans">
                  We select materials for their raw, authentic qualities—letting stone, timber, steel, and concrete express their natural texture, aging gracefully over time.
                </p>
              </div>
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-background/10">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80)' }}
                />
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                <p className="font-display text-accent text-3xl mb-4">03</p>
                <h3 className="display-heading text-2xl mb-4">Tactile Precision</h3>
                <p className="opacity-70 leading-relaxed text-sm font-sans">
                  A building is experienced through touch. We obsess over the details—the alignment of joints, the reveal of thresholds, the warmth of handrails.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA / CURTAIN REVEAL FOOTER */}
      <section ref={curtainRef} className="relative py-40 bg-transparent overflow-hidden">
        <motion.div
          style={{ scale: curtainScale, opacity: curtainOpacity }}
          className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center relative z-10"
        >
          <p className="eyebrow mb-8">— Inquire</p>
          <h2 className="display-heading text-mega mb-12 max-w-[15ch] mx-auto">
            Begin the design{' '}
            <span className="italic text-accent">inquiry.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full text-lg hover:bg-accent transition-colors group"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

// ==================== SUB-COMPONENTS ====================

// 1. Text Highlight Component
interface ScrollHighlightTextProps {
  text: string;
  progress: MotionValue<number>;
}

function ScrollHighlightText({ text, progress }: ScrollHighlightTextProps) {
  const words = text.split(' ');

  return (
    <p className="flex flex-wrap display-heading text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground bg-transparent">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1.5) / words.length;
        const opacity = useTransform(progress, [start, end], [0.12, 1]);
        const color = useTransform(progress, [start, end], ['rgb(var(--foreground) / 0.12)', 'rgb(var(--foreground))']);

        return (
          <motion.span
            key={i}
            style={{ opacity, color }}
            className="mr-[0.25em] select-none"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

// 2. Stacking Cards Component
interface Service {
  num: string;
  title: string;
  href: string;
  image: string;
  blurb: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function ServiceCard({ service, index, total, scrollYProgress }: ServiceCardProps) {
  const start = index / total;
  const end = (index + 1) / total;

  // Transform scales and filter brightness for overlapping stacking layers
  const scale = useTransform(scrollYProgress, [start, end, 1], [1, 0.96 - (total - index) * 0.015, 0.94]);
  const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [start - 0.2, start], [100, 0]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y,
        top: `calc(12vh + ${index * 24}px)`,
      }}
      className="sticky w-full max-w-[1400px] mx-auto h-[65vh] bg-card/65 border border-border/80 rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-md flex flex-col md:grid md:grid-cols-12 gap-8 items-stretch overflow-hidden"
    >
      <div className="col-span-7 flex flex-col justify-between">
        <div>
          <span className="font-mono text-sm opacity-50 mb-2 block">{service.num}</span>
          <h3 className="display-heading text-4xl lg:text-6xl text-accent mb-6">
            {service.title}
          </h3>
          <p className="opacity-70 leading-relaxed text-base max-w-xl font-sans text-foreground">
            {service.blurb}
          </p>
        </div>

        <div className="pt-6 border-t border-border/50">
          <Link
            href={service.href}
            className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-accent link-underline"
          >
            Explore discipline
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="col-span-5 relative min-h-[250px] md:min-h-0 rounded-2xl overflow-hidden border border-border/10 bg-muted/20">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${service.image})` }}
        />
      </div>
    </motion.div>
  );
}

// 3. Horizontal Scroll Vertical Card Component
interface Vertical {
  name: string;
  image: string;
  href: string;
  description: string;
  count: string;
  highlight: string;
  color: string;
}

interface VerticalCardProps {
  vertical: Vertical;
  index: number;
}

function VerticalCard({ vertical, index }: VerticalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Custom Motion values for mouse hover tracking (3D card tilt & hover light reflection)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(x, [-0.5, 0.5], ['-10deg', '10deg']);

  // Glow position values
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    // Normalize coordinates from -0.5 to 0.5
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normX);
    y.set(normY);
  };

  const handleMouseLeave = () => {
    // Reset values to zero
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1000px] py-4 bg-transparent">
      <Link href={vertical.href} className="block">
        <motion.div
          ref={cardRef}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            setIsHovered(true);
            window.dispatchEvent(new CustomEvent('portfolio-hover', { detail: { index } }));
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseLeave();
            window.dispatchEvent(new CustomEvent('portfolio-hover', { detail: { index: null } }));
          }}
          className="relative w-[300px] sm:w-[350px] md:w-[420px] aspect-[4/5] bg-card/45 border border-border/80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-md group"
        >
          {/* Background Image with blur-zoom transition */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${vertical.image})` }}
            animate={{
              scale: isHovered ? 1.08 : 1.0,
              filter: isHovered ? 'brightness(0.35) contrast(1.15) blur(1px)' : 'brightness(0.6) contrast(1.0) blur(0px)',
            }}
          />

          {/* Clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />

          {/* 3D custom-colored glow highlight overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              // @ts-ignore
              '--glow-x': glowX,
              // @ts-ignore
              '--glow-y': glowY,
              background: `radial-gradient(circle at var(--glow-x) var(--glow-y), ${vertical.color}25 0%, transparent 60%)`,
            }}
          />

          {/* Card content layers */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between items-stretch z-10 bg-transparent">
            {/* Top row: Sector index and highlight tag */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs opacity-65 text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div
                style={{ borderColor: `${vertical.color}35`, background: 'rgba(0,0,0,0.3)' }}
                className="px-3 py-1 backdrop-blur-md border rounded-full text-[10px] font-mono uppercase tracking-wider text-white/95"
              >
                {vertical.highlight}
              </div>
            </div>

            {/* Bottom details block */}
            <div className="flex flex-col items-start w-full">
              {/* Completed builds indicator */}
              <span
                style={{ color: vertical.color }}
                className="font-mono text-[10px] uppercase tracking-wider mb-2 block font-semibold"
              >
                {vertical.count}
              </span>

              {/* Title */}
              <h3 className="display-heading text-2xl md:text-3xl text-white font-normal leading-tight">
                {vertical.name}
              </h3>

              {/* Slider description reveal */}
              <motion.p
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{
                  height: isHovered ? 'auto' : 0,
                  opacity: isHovered ? 0.8 : 0,
                  marginTop: isHovered ? 8 : 0,
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs text-white/80 font-sans leading-relaxed overflow-hidden"
              >
                {vertical.description}
              </motion.p>

              {/* Footer action detail */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.35, delay: isHovered ? 0.05 : 0 }}
                className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between w-full"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 font-sans">Explore Sector</span>
                <div
                  style={{ backgroundColor: vertical.color }}
                  className="w-8 h-8 rounded-full text-black flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
