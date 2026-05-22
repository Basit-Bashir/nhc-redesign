'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { ArrowUpRight, Play, Volume2 } from 'lucide-react';

const episodes = [
  { num: '012', title: 'Volumetric calibration and scale metrics', guest: 'Architectural Dialogue', duration: '48 min' },
  { num: '011', title: 'Tectonic interface assembly logic', guest: 'Materials Lab', duration: '52 min' },
  { num: '010', title: 'System integration and grid analysis', guest: 'Systems Panel', duration: '41 min' },
  { num: '009', title: 'Mapping structural profiles across vectors', guest: 'Design Colloquium', duration: '37 min' },
  { num: '008', title: 'The parameters of physical boundary structures', guest: 'Geometry Forum', duration: '44 min' },
  { num: '007', title: 'Research notes on core spatial alignments', guest: 'Inquiry Session', duration: '46 min' },
];

export default function PodcastPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Motion values for hero 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ['4deg', '-4deg']), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ['-4deg', '4deg']), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(normX);
    y.set(normY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Broadcast"
        title="Auditory research"
        italic="and technical reviews."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Latest episode hero section */}
      <section className="py-24 relative bg-transparent z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="perspective-[1200px]">
            <motion.div
              ref={heroRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-12 gap-12 items-center border border-border/80 rounded-3xl p-8 lg:p-16 bg-card/40 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden"
            >
              {/* Grid abstract background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />
              
              {/* Animated podcast cover artwork */}
              <div className="lg:col-span-5 relative z-10">
                <div 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="aspect-square bg-foreground text-background rounded-2xl relative overflow-hidden flex flex-col justify-between p-8 group cursor-pointer shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-foreground transition-opacity duration-500 group-hover:opacity-80" />
                  
                  {/* Subtle dynamic soundwave lines */}
                  <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-20 group-hover:opacity-30 transition-opacity">
                    {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                      <motion.div
                        key={bar}
                        className="w-1.5 bg-background rounded-full"
                        animate={{
                          height: isPlaying ? [20, 80, 20] : [20, 30, 20],
                        }}
                        transition={{
                          duration: 1 + bar * 0.15,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-start z-10 w-full">
                    <span className="font-mono text-xs border border-background/20 px-3 py-1 rounded-full bg-background/5 backdrop-blur-sm">
                      EPISODE {episodes[0].num}
                    </span>
                    {isPlaying && (
                      <span className="flex items-center gap-1.5 text-accent text-xs font-mono bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" /> PLAYING
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-center my-auto z-10">
                    <motion.button
                      aria-label="Play latest episode"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-24 h-24 rounded-full bg-accent text-foreground flex items-center justify-center shadow-lg"
                    >
                      <Play className={`w-8 h-8 fill-foreground text-foreground transition-transform duration-300 ${isPlaying ? 'rotate-90 scale-90' : 'translate-x-0.5'}`} />
                    </motion.button>
                  </div>

                  <div className="flex justify-between items-end z-10 w-full">
                    <p className="eyebrow uppercase tracking-widest text-[10px] opacity-70">LATEST BROADCAST</p>
                    <span className="text-xs opacity-70 font-mono">{episodes[0].duration}</span>
                  </div>
                </div>
              </div>

              {/* Episode narrative details */}
              <div className="lg:col-span-7 relative z-10 space-y-6">
                <p className="eyebrow text-accent">— Season 1 Premiere</p>
                <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight font-bold">
                  {episodes[0].title}
                </h2>
                <p className="text-base md:text-lg opacity-75 font-sans leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex items-center gap-6 text-sm opacity-60 font-mono">
                  <span>With {episodes[0].guest}</span>
                  <span>·</span>
                  <span>{episodes[0].duration}</span>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Apple Podcasts', 'Spotify', 'YouTube', 'RSS'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-5 py-3 border border-border/80 rounded-full text-xs font-mono uppercase tracking-wider hover:border-accent hover:text-accent bg-background/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2"
                    >
                      {platform}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Episode list */}
      <section className="bg-card/40 backdrop-blur-md border-y border-border py-40 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-6 text-accent">— All Episodes</p>
          <h2 className="display-heading text-huge mb-24">
            The <span className="italic text-accent">archive.</span>
          </h2>
          
          <div className="space-y-0">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group border-t border-border/80 last:border-b py-8"
              >
                <Link
                  href="#"
                  className="grid grid-cols-12 gap-4 items-center px-4 rounded-2xl group-hover:bg-muted/20 transition-all duration-300 -mx-4 py-4"
                >
                  <span className="col-span-2 md:col-span-1 eyebrow text-accent text-lg font-mono">
                    {ep.num}
                  </span>
                  
                  <div className="col-span-10 md:col-span-6 space-y-1">
                    <h3 className="display-heading text-xl md:text-2xl lg:text-3xl group-hover:text-accent transition-colors font-semibold">
                      {ep.title}
                    </h3>
                  </div>

                  <p className="col-span-8 md:col-span-3 text-sm opacity-70 font-sans pl-2 md:pl-0">
                    {ep.guest}
                  </p>
                  
                  <p className="col-span-3 md:col-span-1 text-xs opacity-50 text-right font-mono">
                    {ep.duration}
                  </p>
                  
                  <div className="hidden md:flex col-span-1 justify-end">
                    <div className="w-10 h-10 rounded-full border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-background flex items-center justify-center transition-all duration-300">
                      <Play className="w-4 h-4 fill-transparent group-hover:fill-background translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want to be a" italic="guest?" buttonText="Pitch us" />
    </div>
  );
}
