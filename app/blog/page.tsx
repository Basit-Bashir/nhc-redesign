'use client';

import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    category: 'Analysis',
    title: 'Volumetric and spatial systems in contemporary design frameworks',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    category: 'Inquiry',
    title: 'Mapping architectural craft: material realization and scales',
    date: 'April 2026',
    readTime: '8 min read',
  },
  {
    category: 'Research',
    title: 'Stress testing substrates: thermal thresholds and weathering',
    date: 'March 2026',
    readTime: '5 min read',
  },
  {
    category: 'Process',
    title: 'Discipline in spatial planning: discovery through transition',
    date: 'February 2026',
    readTime: '7 min read',
  },
  {
    category: 'Tectonics',
    title: 'The mechanics of grid assemblies: programmatic void structures',
    date: 'January 2026',
    readTime: '6 min read',
  },
  {
    category: 'Notes',
    title: 'Geometries of scale: study on laminated core configurations',
    date: 'December 2025',
    readTime: '3 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Inquiry"
        title="Field notes, research,"
        italic="and updates."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* Featured Post with Hover Effects */}
      <section className="py-32 bg-transparent relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="#"
              className="group block border-t border-border pt-12 hover:border-accent transition-colors duration-300"
            >
              <p className="eyebrow text-accent mb-6 font-mono">— Featured</p>
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <h2 className="display-heading text-5xl md:text-7xl lg:text-8xl mb-8 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {posts[0].title}
                  </h2>
                  <div className="flex items-center gap-6 text-sm opacity-60 font-mono">
                    <span>{posts[0].category}</span>
                    <span>·</span>
                    <span>{posts[0].date}</span>
                    <span>·</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-full group-hover:border-accent group-hover:bg-accent group-hover:text-foreground transition-all duration-300">
                    Read article
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post Grid with staggered slide-in cards */}
      <section className="bg-card/40 backdrop-blur-md border-y border-border py-32 relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="eyebrow mb-16 text-accent font-mono">— All articles</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="hover-lift"
              >
                <Link
                  href="#"
                  className="group block border-t border-border pt-8 hover:border-accent transition-colors duration-300"
                >
                  <p className="eyebrow text-accent mb-4 font-mono">{post.category}</p>
                  <h3 className="display-heading text-2xl lg:text-3xl mb-8 group-hover:text-accent transition-colors duration-300 min-h-[3rem] font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs opacity-60 font-mono">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-40 bg-transparent relative z-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow mb-6 text-accent font-mono">— Newsletter</p>
          <h2 className="display-heading text-6xl md:text-7xl mb-8">
            Stay <span className="italic text-accent">informed.</span>
          </h2>
          <p className="text-lg md:text-xl opacity-75 mb-12 font-sans leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 px-6 py-4 bg-card/45 backdrop-blur-sm border border-border/80 rounded-full focus:outline-none focus:border-accent text-foreground transition-colors font-sans"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-accent hover:text-foreground transition-all duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

