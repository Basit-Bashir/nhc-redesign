'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: "Adam Garcia",
    role: "CEO & Founder",
    body: "Adam brings nearly a decade of Wall Street experience, with a track record spanning investment banking, private equity, corporate strategy, and executive leadership. He has managed middle-market M&A transactions exceeding $2 billion in combined value and founded New Path after identifying systemic inefficiencies in the commercial construction industry.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    name: "Brad Kay",
    role: "Director of Corporate Finance & Strategy",
    body: "Brad brings extensive expertise in private equity and corporate development, with experience sourcing opportunities resulting in over $500 million in enterprise value closures and managing transactions exceeding $1 billion in value. He oversees internal controls, financial targets, and the enforcement of financial strategy at NPC.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
  {
    name: "Justin Rios",
    role: "Director of Preconstruction & Design",
    body: "Justin is an accomplished architectural professional with over 10 years of experience spanning hospitality and educational sectors, with projects valued between $1 million and $95 million. He holds a Master's Degree in Architecture (NAAB accredited) from Drury University and specializes in BIM and cost estimation.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Shawn Montgomery",
    role: "Director of Operations",
    body: "Shawn brings over three decades of experience across residential, commercial, and international development. A former U.S. Marine, he emphasizes discipline, precision, and a results-driven mindset. He previously held senior leadership positions overseeing large-scale operations for private developers and global brands.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
  {
    name: "Kelly Tulk",
    role: "Director of Sales and Marketing",
    body: "Kelly brings expertise from the hospitality sector, including her role as Membership & Marketing Director at a private country club. She holds a Bachelor's in Advertising from the Illinois Institute of Art and excels at building strong client relationships with genuine care for project success.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  },
  {
    name: "Eric Little",
    role: "Director of Multifamily Construction",
    body: "Eric brings construction expertise from 1998 onward following service in the U.S. Marine Corps. He has overseen development of more than 30,000 residential units, including Vitruvian Park — a $1.2 billion, 118-acre mixed-use development — and The Belmont in Dallas, the first LEED Silver Multifamily certified project in Texas.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Evan Shor",
    role: "Director of Financial Solutions",
    body: "Evan collaborates with business owners and investors to secure strategic, timely financing that supports project success. His background includes mortgage lending, entrepreneurial experience, and over a decade as a firefighter and paramedic — disciplines that shaped his commitment to discipline, integrity, and service.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Justin Beyer",
    role: "Senior Business Development Manager",
    body: "Justin has served at NPC since 2018, driving organizational growth through new business creation and client retention. His expertise spans market analysis, business strategy, and marketing. He earned a Bachelor's in Business Management from Elmhurst University and has worked across Chicagoland industries in sales and marketing.",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&q=80",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Our People"
        title="The team behind"
        italic="every project."
        description="Senior leaders with decades of combined experience in general contracting, construction management, real estate development, and corporate finance."
      />

      <section className="py-32 relative bg-transparent z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 bg-transparent">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-transparent">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
            
            {/* In memoriam */}
            <div className="mt-16 col-span-full border border-border/60 bg-card/45 backdrop-blur-md p-8 md:p-12 rounded-3xl max-w-4xl mx-auto text-center">
              <p className="eyebrow text-accent mb-3 font-mono text-xs uppercase tracking-widest">— In Memoriam</p>
              <h3 className="display-heading text-3xl font-semibold mb-4 text-foreground">Oscar Garcia</h3>
              <p className="opacity-70 leading-relaxed text-sm md:text-base lg:text-lg font-sans max-w-2xl mx-auto">
                Oscar Garcia was a founding member of New Path Construction & Consulting and a valued partner whose dedication and spirit remain an enduring part of this firm.
              </p>
            </div>
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
            Send your resume to{' '}
            <a href="mailto:info@newpathconstruction.com" className="text-accent link-underline font-semibold font-display">
              info@newpathconstruction.com
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
