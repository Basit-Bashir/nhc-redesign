'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'restaurants', label: 'Typology I' },
  { id: 'gas-stations', label: 'Typology II' },
  { id: 'car-wash', label: 'Typology III' },
  { id: 'industrial', label: 'Typology IV' },
  { id: 'medical', label: 'Typology V' },
  { id: 'multi-family', label: 'Typology VI' },
  { id: 'retail', label: 'Typology VII' },
  { id: 'self-storage', label: 'Typology VIII' },
];

const categoryToIndex: { [key: string]: number } = {
  'restaurants': 0,
  'gas-stations': 1,
  'car-wash': 2,
  'industrial': 3,
  'medical': 4,
  'multi-family': 5,
  'retail': 6,
  'self-storage': 7,
};

const projects = [
  { title: 'Structural Volume I', category: 'restaurants', location: 'North Sector', year: '2024' },
  { title: 'Tectonic Grid III', category: 'restaurants', location: 'South Quad', year: '2023' },
  { title: 'Programmatic Axis V', category: 'gas-stations', location: 'East Axis', year: '2024' },
  { title: 'Volumetric Array II', category: 'gas-stations', location: 'West Terminal', year: '2023' },
  { title: 'Geometric Assembly IX', category: 'car-wash', location: 'North Sector', year: '2024' },
  { title: 'Spatial Sequence IV', category: 'car-wash', location: 'South Quad', year: '2023' },
  { title: 'Substrate Monolith VI', category: 'industrial', location: 'East Axis', year: '2024' },
  { title: 'Tectonic Interface VII', category: 'industrial', location: 'West Terminal', year: '2023' },
  { title: 'Material System VIII', category: 'medical', location: 'North Sector', year: '2024' },
  { title: 'Spectral Void X', category: 'medical', location: 'South Quad', year: '2023' },
  { title: 'Concentric Core XI', category: 'multi-family', location: 'East Axis', year: '2024' },
  { title: 'Bilateral Plan XII', category: 'multi-family', location: 'West Terminal', year: '2023' },
  { title: 'Laminated Section XIII', category: 'retail', location: 'North Sector', year: '2024' },
  { title: 'Slab Assembly XIV', category: 'retail', location: 'South Quad', year: '2023' },
  { title: 'Tectonic Vessel XV', category: 'self-storage', location: 'East Axis', year: '2024' },
  { title: 'Grid Void XVI', category: 'self-storage', location: 'West Terminal', year: '2023' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Portfolio"
        title="Materialized spaces,"
        italic="documented forms."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Filter bar - sticky with premium backdrop */}
      <section className="sticky top-[80px] z-30 bg-background/50 backdrop-blur-md border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 min-w-max">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-6 py-2.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${
                  active === c.id
                    ? 'bg-foreground text-background font-semibold scale-102 shadow-md'
                    : 'border border-border hover:border-accent hover:text-accent bg-transparent'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Interactive Project Cards */}
      <section className="pt-16 pb-20 bg-transparent relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] md:min-h-[500px]"
            >
              {filtered.map((p, i) => (
                <PortfolioCard key={p.title} project={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection title="Collaborate on" italic="new forms." />
    </div>
  );
}

// Interactive 3D Card Subcomponent for Portfolio items
interface Project {
  title: string;
  category: string;
  location: string;
  year: string;
}

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ['8deg', '-8deg']), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ['-8deg', '8deg']), { stiffness: 150, damping: 20 });

  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normX);
    y.set(normY);
  };

  const handleMouseEnter = () => {
    const catIdx = categoryToIndex[project.category];
    if (typeof catIdx !== 'undefined') {
      window.dispatchEvent(new CustomEvent('portfolio-hover', { detail: { index: catIdx } }));
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    window.dispatchEvent(new CustomEvent('portfolio-hover', { detail: { index: null } }));
  };

  const imgId = [
    '1503387762-592deb58ef4e',
    '1486406146926-c627a92ad1ab',
    '1517245386807-bb43f82c33c4',
    '1497366216548-37526070297c',
    '1567521464027-f127ff144326',
    '1487958449943-2429e8be8625',
    '1545324418-cc1a3fa10c00',
    '1483366774565-c783b9f70e2c',
    '1497366811353-6870744d04b2',
  ][index % 9];

  return (
    <div className="perspective-[800px] py-2">
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[4/5] bg-card border border-border rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-${imgId}?w=800&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />

        {/* 3D glow highlight overlay */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--glow-x)_var(--glow-y),rgba(255,255,255,0.12)_0%,transparent_50%)] pointer-events-none"
          style={{
            // @ts-ignore
            '--glow-x': glowX,
            '--glow-y': glowY,
          }}
        />

        {/* Card info */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between text-background z-10">
          <div className="flex items-center justify-between w-full">
            <span className="eyebrow border border-background/20 px-3 py-1 rounded-full bg-background/5 backdrop-blur-sm opacity-90">
              {project.year}
            </span>
            <div className="w-9 h-9 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-accent hover:text-background transition-colors duration-300">
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <p className="eyebrow text-accent opacity-90 mb-2">{project.location}</p>
            <h3 className="display-heading text-2xl lg:text-3xl leading-tight font-semibold">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

