'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, MotionValue, useVelocity, AnimatePresence, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { Counter } from '@/components/counter';

const services = [
  {
    num: '01',
    title: 'General Contracting',
    href: '/general-contracting',
    image: 'https://www.newpathconstruction.com/wp-content/uploads/2021/03/Construction-above-2-1024x768.jpg',
    blurb:
      'New Path has completed hundreds of millions of dollars in General Contracting work in nearly every industry Vertical.',
  },
  {
    num: '02',
    title: 'Pre-Construction',
    href: '/pre-construction',
    image: 'https://www.newpathconstruction.com/wp-content/uploads/2023/05/9FF32248-2B7D-4E2A-9A38-B463AD782660-768x1024.jpg',
    blurb:
      'Between our wall street roots and significant construction experience, New Path can help with everything from raising capital to finding tenants and developer partners.',
  },
  {
    num: '03',
    title: 'Construction Management',
    href: '/construction-management',
    image: 'https://www.newpathconstruction.com/wp-content/uploads/2026/01/525780189_1224786436329630_4847205779204860387_n-768x1024.jpg',
    blurb:
      'If you are part of a tenant/landlord deal, New Path can step in to oversee the construction process to protect all stakeholders.',
  },
  {
    num: '04',
    title: 'Real Estate Advisory',
    href: '/real-estate-advisory',
    image: 'https://www.newpathconstruction.com/wp-content/uploads/2023/08/Newpath-1024x768.jpeg',
    blurb:
      'If you are part of a tenant/landlord deal, New Path can step in to oversee the construction process to protect all stakeholders.',
  },
];

const verticals = [
  {
    name: 'Restaurants & Hospitality',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    href: '/portfolio?category=restaurants',
    description: 'High-end restaurant builds, cafes, and hospitality spaces. Our experience spans national franchises like Starbucks and Dunkin\' to bespoke local dining concepts.',
    count: '75 Completed',
    highlight: 'Starbucks, Dairy Queen, Dunkin\'',
    color: '#e09c50',
  },
  {
    name: 'Gas & Service Stations',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=800&q=80',
    href: '/portfolio?category=gas-stations',
    description: 'Modern fueling terminals and convenience store facilities built for high capacity, utility integration, and compliance with all environmental standards.',
    count: '50 Completed',
    highlight: 'BP Fueling & Convenience',
    color: '#38bdf8',
  },
  {
    name: 'Express Car Washes',
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=80',
    href: '/portfolio?category=car-wash',
    description: 'Advanced express exterior car wash systems engineered with sophisticated water reclamation technology, complex plumbing, and high-durability coatings.',
    count: '40 Completed',
    highlight: 'Mango Express Car Wash',
    color: '#60a5fa',
  },
  {
    name: 'Industrial & Office',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    href: '/portfolio?category=industrial',
    description: 'Scalable warehouse spaces, distribution hubs, and high-performance corporate offices designed to optimize operational workflows and long-term utility.',
    count: '80 Completed',
    highlight: 'Ten Parkway North, Xttrium',
    color: '#f97316',
  },
  {
    name: 'Medical & Surgery Centers',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    href: '/portfolio?category=medical',
    description: 'Clinical outpatient environments, specialized surgery centers, and veterinary facilities requiring complex HVAC filtration, layouts, and strict regulatory standards.',
    count: '35 Completed',
    highlight: 'Pet Suites Arlington Heights',
    color: '#2dd4bf',
  },
  {
    name: 'Multi-Family Housing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    href: '/portfolio?category=multi-family',
    description: 'LEED-certified multi-family complexes, apartment buildings, and mixed-use urban villages designed to maximize tenant satisfaction and developer ROI.',
    count: '60 Completed',
    highlight: 'The Belmont, Vitruvian Park',
    color: '#facc15',
  },
  {
    name: 'Retail Commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    href: '/portfolio?category=retail',
    description: 'High-visibility retail locations, shopping centers, and multi-tenant commercial structures designed to draw in customers and elevate retail brands.',
    count: '90 Completed',
    highlight: 'Halo Heat Retail Center',
    color: '#fb7185',
  },
  {
    name: 'Self-Storage Facilities',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    href: '/portfolio?category=self-storage',
    description: 'Multi-story climate-controlled self-storage properties designed to optimize net rentable area, access control systems, and structural durability.',
    count: '30 Completed',
    highlight: 'Extra Space Storage',
    color: '#a78bfa',
  },
];

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const heroWordRevealVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 14,
      stiffness: 90,
    },
  },
};

const heroFadeUpVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 18,
      stiffness: 80,
    },
  },
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTypology, setActiveTypology] = useState<number | null>(0);

  // 1. HERO INTERACTIVES (CINEMATIC PARALLAX)
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  // Parallax transitions for video backdrop
  const videoScale = useTransform(heroScroll, [0, 1], [1.0, 1.12]);
  const videoOpacity = useTransform(heroScroll, [0, 0.8], [1.0, 0.45]);

  // Parallax transitions for overlay typography
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.65], [1.0, 0.0]);

  // SVG Line Art drawing mapping (draws over video as you scroll)
  const pathLength = useTransform(heroScroll, [0, 0.45], [0, 1]);
  const smoothPathLength = useSpring(pathLength, { stiffness: 45, damping: 15 });

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

  // 3. VERTICALS SHOWCASE LOGIC (STATE-BASED HOVER)
  // No longer scroll-hijacked. Interactivity is managed inline through hover and click states.

  // 4. FIRM INTRO WORD-BY-WORD HIGHLIGHTING
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introScroll } = useScroll({
    target: introRef,
    offset: ['start 80%', 'end 30%'],
  });

  // 5. SERVICES DECK STACKING
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: servicesScroll } = useScroll({
    target: servicesRef,
    offset: ['start start', 'end end'],
  });

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
      {/* 1. HERO WITH CINEMATIC VIDEO BACKGROUND */}
      <section
        ref={heroRef}
        className="relative h-[90vh] lg:h-[85vh] min-h-[650px] max-h-[800px] lg:max-h-[850px] xl:max-h-[900px] w-full flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-background"
      >
        {/* Cinematic Loop Video Backdrop */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0 z-0 h-full w-full pointer-events-none"
        >
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              x: [0, 8, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 h-full w-full"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/hero.mp4"
            />
          </motion.div>
          {/* Multi-layered cinematic gradient overlays for depth and extreme readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-background z-10 pointer-events-none" />
          {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px] z-10 pointer-events-none" /> */}
        </motion.div>

        {/* Architectural grid overlay drawing */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-25 dark:opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M 10,0 L 10,100 M 30,0 L 30,100 M 50,0 L 50,100 M 70,0 L 70,100 M 90,0 L 90,100 M 0,20 L 100,20 M 0,50 L 100,50 M 0,80 L 100,80"
              stroke="rgb(255 255 255)"
              strokeWidth="0.04"
              fill="none"
              style={{ pathLength: smoothPathLength }}
            />
            {/* Diagonal perspective layout lines */}
            <motion.path
              d="M 0,0 L 100,100 M 100,0 L 0,100"
              stroke="rgb(var(--accent))"
              strokeWidth="0.03"
              fill="none"
              style={{ pathLength: smoothPathLength }}
            />
          </svg>
        </div>

        {/* Heading & Details Overlay Content */}
        <div className="relative z-20 max-w-[1600px] mx-auto w-full px-6 lg:px-12">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <motion.div
              variants={heroFadeUpVariants}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="eyebrow text-white/95">General Contracting • Real Estate Advisor • Construction Management</p>
            </motion.div>

            {/* Editorial Serif & Sans Mix Heading */}
            <h1 className="display-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem] text-white mb-4 sm:mb-6 leading-[0.95] max-w-[15ch]">
              <span className="block overflow-hidden h-fit py-1">
                <motion.span variants={heroWordRevealVariants} className="block">
                  New Path
                </motion.span>
              </span>
              <span className="block overflow-hidden h-fit py-1">
                <motion.span variants={heroWordRevealVariants} className="block">
                  Construction &
                </motion.span>
              </span>
              <span className="block overflow-hidden h-fit py-1">
                <motion.span variants={heroWordRevealVariants} className="block">
                  <span className="italic text-accent">Consulting</span>
                </motion.span>
              </span>
            </h1>

            {/* Description Subheading */}
            <motion.p
              variants={heroFadeUpVariants}
              className="text-base md:text-lg lg:text-xl text-white/75 max-w-2xl font-sans leading-relaxed mb-6 sm:mb-8"
            >
              Your premier choice for a trusted, experienced, and reliable General Contractor. We approach every project with a seasoned perspective that breeds success.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              variants={heroFadeUpVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-accent text-background font-mono text-xs uppercase tracking-wider rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/15"
                >
                  Start a project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="group"
              >
                <Link
                  href="/portfolio"
                  onClick={(e) => e.preventDefault()}
                  style={{ cursor: 'default' }}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-mono text-xs uppercase tracking-wider rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  View Portfolio <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll down mouse indicator */}
        <div className="absolute bottom-28 left-6 lg:left-12 z-20 hidden sm:flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/45 [writing-mode:vertical-lr] rotate-180 mb-2">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
            />
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full border-y border-white/10 py-4 overflow-hidden bg-black/25 backdrop-blur-[2px]">
          <div className="marquee whitespace-nowrap">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4 shrink-0">
                {['General Contracting', 'Pre-Construction', 'Construction Management', 'Real Estate Advisory'].map((item) => (
                  <span key={item} className="flex items-center gap-8 font-display text-2xl lg:text-3xl text-white/90">
                    {item}
                    <span className="text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TYPOLOGIES SHOWCASE */}
      <section className="py-24 bg-transparent relative z-20">
        {/* Header area */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 bg-transparent">
          <div>
            <p className="eyebrow mb-4">— Typologies</p>
            <h2 className="display-heading text-huge">
              Eight <span className="italic text-accent">archetypes.</span> One system.
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg opacity-60 max-w-md font-sans mb-1 text-foreground">
            A selection of projects exploring diverse typologies, scales, and programmatic requirements.
          </p>
        </div>

        {/* Showcase Container */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 bg-transparent">
          {/* Desktop Showcase: Expanding columns accordion */}
          <div
            onMouseLeave={() => {
              window.dispatchEvent(new CustomEvent('portfolio-hover', { detail: { index: null } }));
            }}
            className="hidden lg:flex h-[600px] border border-border/80 rounded-3xl overflow-hidden bg-card/15 backdrop-blur-md"
          >
            {verticals.map((v, i) => {
              const isActive = activeTypology === i;
              return (
                <div
                  key={v.name}
                  onMouseEnter={() => {
                    setActiveTypology(i);
                    window.dispatchEvent(new CustomEvent('portfolio-hover', { detail: { index: i } }));
                  }}
                  className={`relative h-full border-r last:border-r-0 border-border/40 transition-all duration-700 ease-[0.16,1,0.3,1] overflow-hidden cursor-pointer ${isActive ? 'flex-[6.5] min-w-[420px]' : 'flex-[1] min-w-[80px]'
                    }`}
                >
                  {/* Background Image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${isActive ? 'scale-105 brightness-[0.4] grayscale-0' : 'scale-100 brightness-[0.15] grayscale'
                      }`}
                    style={{ backgroundImage: `url(${v.image})` }}
                  />

                  {/* Geometric Grid Overlay */}
                  <div className={`absolute inset-0 z-10 pointer-events-none border border-white/5 transition-opacity duration-500 ${isActive ? 'opacity-30' : 'opacity-0'}`} />

                  {/* Panel Content */}
                  <div className="relative z-20 h-full w-full">
                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.div
                          key="active-content"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col justify-between h-full p-8"
                        >
                          {/* Top Row */}
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-lg text-accent font-semibold">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span
                              style={{ borderColor: `${v.color}45` }}
                              className="px-3 py-1 backdrop-blur-md border rounded-full text-[10px] font-mono uppercase tracking-wider text-white bg-black/40"
                            >
                              {v.highlight}
                            </span>
                          </div>

                          {/* Bottom Row Details */}
                          <div className="flex flex-col items-start w-full">
                            <span
                              style={{ color: v.color }}
                              className="font-mono text-xs uppercase tracking-wider mb-2 block font-semibold"
                            >
                              {v.count}
                            </span>
                            <h3 className="display-heading text-3xl md:text-4xl text-white font-normal leading-tight mb-4">
                              {v.name}
                            </h3>
                            <p className="text-sm md:text-base lg:text-lg text-white/80 font-sans leading-relaxed mb-6 max-w-lg">
                              {v.description}
                            </p>
                            <Link
                              href={v.href}
                              onClick={(e) => e.preventDefault()}
                              style={{ cursor: 'default' }}
                              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent link-underline"
                            >
                              Explore Sector
                              <div
                                style={{ backgroundColor: v.color }}
                                className="w-8 h-8 rounded-full text-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ml-2"
                              >
                                <ArrowUpRight className="w-4 h-4" />
                              </div>
                            </Link>
                          </div>
                        </motion.div>
                      ) : (
                        /* Inactive Vertical Column */
                        <motion.div
                          key="inactive-content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center justify-between h-full py-8 pointer-events-none"
                        >
                          <span className="font-mono text-sm opacity-60 text-white">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display text-xs uppercase tracking-widest text-white/80 [writing-mode:vertical-lr] rotate-180 mb-2 whitespace-nowrap">
                            {v.name}
                          </span>
                          <div
                            style={{ backgroundColor: v.color }}
                            className="w-2 h-2 rounded-full shadow-lg"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Showcase: Collapsible Accordion List */}
          <div className="flex flex-col gap-4 lg:hidden">
            {verticals.map((v, i) => {
              const isMobileActive = activeTypology === i;
              return (
                <div
                  key={v.name}
                  className="border border-border/60 rounded-2xl overflow-hidden bg-card/25 backdrop-blur-md"
                >
                  <button
                    onClick={() => {
                      const nextIndex = isMobileActive ? null : i;
                      setActiveTypology(nextIndex);
                      window.dispatchEvent(
                        new CustomEvent('portfolio-hover', {
                          detail: { index: nextIndex },
                        })
                      );
                    }}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm opacity-60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-lg font-medium">{v.name}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        style={{ color: v.color, borderColor: `${v.color}35` }}
                        className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider border px-3 py-1 rounded-full bg-black/10 dark:bg-white/5"
                      >
                        {v.highlight}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 opacity-60 transition-transform duration-300 ${isMobileActive ? 'rotate-180' : ''
                          }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 space-y-4">
                          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/20 shadow-inner bg-muted/10">
                            <div
                              className="absolute inset-0 bg-cover bg-center"
                              style={{ backgroundImage: `url(${v.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent pointer-events-none" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span
                                style={{ color: v.color }}
                                className="font-mono text-xs uppercase tracking-wider font-semibold"
                              >
                                {v.count}
                              </span>
                              <span
                                style={{ color: v.color, borderColor: `${v.color}35` }}
                                className="inline-block sm:hidden text-[10px] font-mono uppercase tracking-wider border px-3 py-1 rounded-full bg-black/10 dark:bg-white/5"
                              >
                                {v.highlight}
                              </span>
                            </div>
                            <p className="text-sm sm:text-base opacity-80 leading-relaxed font-sans">
                              {v.description}
                            </p>
                          </div>
                          <div className="pt-2">
                            <Link
                              href={v.href}
                              onClick={(e) => e.preventDefault()}
                              style={{ cursor: 'default' }}
                              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent link-underline"
                            >
                              Explore Sector <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. STATS BAR WITH BG COLOR PARALLAX */}
      <motion.section
        ref={statsSectionRef}
        style={{ backgroundColor: statsBg }}
        className="border-y border-border py-20 transition-all duration-300 bg-transparent"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 200, prefix: '$', suffix: 'M+', label: 'Work completed' },
            { value: 15, suffix: '+', label: 'Years of experience' },
            { value: 4, suffix: '', label: 'Core service areas' },
            { value: 100, suffix: '%', label: 'Excellence committed' },
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

      {/* 4. CTA / CURTAIN REVEAL */}
      <section ref={curtainRef} className="relative py-40 bg-transparent overflow-hidden">
        <motion.div
          style={{ scale: curtainScale, opacity: curtainOpacity }}
          className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center relative z-10"
        >
          <p className="eyebrow mb-8">— Contact</p>
          <h2 className="display-heading text-mega mb-12 max-w-[20ch] mx-auto">
            Let's start a{' '}
            <span className="italic text-accent">conversation</span> about your next project.
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

      {/* 5. INTRO STATEMENT WITH WORD SCROLL HIGHLIGHTING */}
      <section ref={introRef} className="py-40 bg-transparent relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">— About Us</p>
          </div>
          <div className="lg:col-span-9">
            <ScrollHighlightText
              progress={introScroll}
              text="New Path Construction is your premier choice for a trusted and reliable General Contractor. Backed by a diverse portfolio and an unwavering commitment to excellence, we approach every project with a seasoned perspective that breeds success. From traditional projects to complex, innovative ventures, we consistently surpass expectations, bringing unmatched expertise and reliability to every build we undertake."
            />
            <div className="mt-12">
              <Link
                href="/about"
                onClick={(e) => e.preventDefault()}
                style={{ cursor: 'default' }}
                className="inline-flex items-center gap-2 link-underline text-accent font-mono text-xs uppercase tracking-wider"
              >
                Learn about our vision <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES — STICKY OVERLAPPING CARDS */}
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

      {/* 7. APPROACH — ASYMMETRIC PARALLAX COLUMNS */}
      <section ref={approachRef} className="bg-foreground text-background py-32 overflow-hidden relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6 text-accent">— Philosophy</p>
          <h2 className="display-heading text-huge mb-24 max-w-6xl">
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
                <p className="opacity-70 leading-relaxed text-sm md:text-base lg:text-lg font-sans">
                  Every gesture is considered. We organize volumes and circulation to optimize natural light, sightlines, and functional efficiency.
                </p>
              </div>
            </motion.div>

            {/* Right asymmetric column (fast scroll) */}
            <motion.div style={{ y: rightColY }} className="lg:col-span-7 space-y-12 lg:mt-24">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                <p className="font-display text-accent text-3xl mb-4">02</p>
                <h3 className="display-heading text-2xl mb-4">Material Honesty</h3>
                <p className="opacity-70 leading-relaxed text-sm md:text-base lg:text-lg font-sans">
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
                <p className="opacity-70 leading-relaxed text-sm md:text-base lg:text-lg font-sans">
                  A building is experienced through touch. We obsess over the details—the alignment of joints, the reveal of thresholds, the warmth of handrails.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
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
    <p className="flex flex-wrap font-sans font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground bg-transparent">
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
      className="sticky w-full max-w-[1400px] mx-auto h-[50vh] max-h-[380px] lg:max-h-[420px] xl:max-h-[450px] min-h-[320px] bg-card/65 border border-border/80 rounded-3xl p-6 lg:p-8 shadow-2xl backdrop-blur-md flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-8 items-stretch overflow-hidden"
    >
      <div className="col-span-7 flex flex-col justify-between">
        <div>
          <span className="font-mono text-sm opacity-50 mb-2 block">{service.num}</span>
          <h3 className="display-heading text-3xl lg:text-5xl text-accent mb-4">
            {service.title}
          </h3>
          <p className="opacity-70 leading-relaxed text-sm lg:text-base max-w-xl font-sans text-foreground">
            {service.blurb}
          </p>
        </div>

        <div className="pt-4 border-t border-border/50">
          <Link
            href={service.href}
            onClick={(e) => e.preventDefault()}
            style={{ cursor: 'default' }}
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


