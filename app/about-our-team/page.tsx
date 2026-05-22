'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { ArrowUpRight } from 'lucide-react';

const team = [
  { 
    name: 'Concept & Ideation', 
    role: 'Principal Architects', 
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80'
  },
  { 
    name: 'Spatial Systems', 
    role: 'Design Directors', 
    body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  { 
    name: 'Materiality', 
    role: 'Material Researchers', 
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?w=800&q=80'
  },
  { 
    name: 'Circulation & Light', 
    role: 'Spatial Planners', 
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  },
  { 
    name: 'Visual Synthesis', 
    role: 'Render Artists', 
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80'
  },
  { 
    name: 'Accountability', 
    role: 'Project Leads', 
    body: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
  },
];

export default function TeamPage() {
  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Atelier"
        title="Crafting space through"
        italic="collaboration."
        description="Our team is a collective of architects, designers, and spatial planners united by a commitment to geometric clarity and materiality."
      />

      <section className="py-32 relative bg-transparent z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 bg-transparent">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/45 backdrop-blur-md border-y border-border py-40 relative z-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center relative z-10 bg-transparent"
        >
          <p className="eyebrow mb-6 text-accent">— Join Us</p>
          <h2 className="display-heading text-huge mb-8 max-w-4xl mx-auto">
            Expand the{' '}
            <span className="italic text-accent">collective.</span>
          </h2>
          <p className="text-lg md:text-xl opacity-75 mb-10 max-w-xl mx-auto font-sans leading-relaxed text-foreground">
            Send your portfolio to{' '}
            <a href="mailto:careers@aethel-design.com" className="text-accent link-underline font-semibold font-display">
              careers@aethel-design.com
            </a>
          </p>
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
}

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ['6deg', '-6deg']), { stiffness: 120, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ['-6deg', '6deg']), { stiffness: 120, damping: 25 });

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

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-[1000px] py-2 bg-transparent"
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[4/5] bg-card border border-border/80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
      >
        {/* Background Image with Zoom Reveal on Hover */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url(${member.img})`,
          }}
        />
        {/* Dark elegant mask overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

        {/* 3D glow highlight overlay */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--glow-x)_var(--glow-y),rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"
          style={{
            // @ts-ignore
            '--glow-x': glowX,
            // @ts-ignore
            '--glow-y': glowY,
          }}
        />

        {/* Card info */}
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between text-background z-10 bg-transparent">
          <div className="flex items-center justify-between w-full">
            <span className="eyebrow border border-background/25 px-4 py-1.5 rounded-full bg-background/5 backdrop-blur-sm opacity-90 font-mono text-xs text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors duration-300">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            </div>
          </div>
          <div className="space-y-3 bg-transparent">
            <p className="eyebrow text-accent font-semibold">{member.role}</p>
            <h3 className="display-heading text-3xl font-semibold leading-none text-white">
              {member.name}
            </h3>
            <p className="text-sm opacity-70 leading-relaxed font-sans mt-2 line-clamp-3 text-white">
              {member.body}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
