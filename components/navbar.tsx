'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'About New Path', href: '/about' },
      { name: 'About Our Team', href: '/about-our-team' },
    ],
  },
  {
    name: 'Services',
    href: '/construction-services',
    children: [
      { name: 'Pre Construction', href: '/pre-construction' },
      { name: 'General Contracting', href: '/general-contracting' },
      { name: 'Construction Management', href: '/construction-management' },
      { name: 'Real Estate Advisory', href: '/real-estate-advisory' },
    ],
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    children: [
      { name: 'View All', href: '/portfolio' },
      { name: 'Restaurants', href: '/portfolio?category=restaurants' },
      { name: 'Gas Stations', href: '/portfolio?category=gas-stations' },
      { name: 'Car Wash', href: '/portfolio?category=car-wash' },
      { name: 'Industrial & Office', href: '/portfolio?category=industrial' },
      { name: 'Medical', href: '/portfolio?category=medical' },
      { name: 'Multi-Family', href: '/portfolio?category=multi-family' },
      { name: 'Retail', href: '/portfolio?category=retail' },
      { name: 'Self-Storage', href: '/portfolio?category=self-storage' },
    ],
  },
  { name: 'News', href: '/blog' },
  { name: 'Podcast', href: '/podcast' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-background font-display font-bold text-sm">
              A
            </div>
            <span className="font-display text-lg tracking-tight hidden sm:block">
              Aethel<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.href !== '/') e.preventDefault();
                  }}
                  style={item.href !== '/' ? { cursor: 'default' } : undefined}
                  className="px-4 py-2 text-sm flex items-center gap-1 hover:text-accent transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                <AnimatePresence>
                  {item.children && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 min-w-[220px]"
                    >
                      <div className="bg-card border border-border rounded-md p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={(e) => e.preventDefault()}
                            style={{ cursor: 'default' }}
                            className="block px-3 py-2 text-sm hover:bg-muted rounded-sm transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              onClick={(e) => e.preventDefault()}
              style={{ cursor: 'default' }}
              className="hidden md:inline-flex items-center px-5 py-2 bg-foreground text-background text-sm rounded-full hover:bg-accent transition-colors"
            >
              Start a project
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden flex flex-col h-[100dvh]"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-border flex-none">
              <span className="font-display text-lg">
                Aethel<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Scrollable middle container */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <motion.ul
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.05 } },
                }}
                className="space-y-1"
              >
                {navigation.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    className="border-b border-border/50 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          if (item.href !== '/') {
                            e.preventDefault();
                          } else {
                            setMobileOpen(false);
                          }
                        }}
                        style={item.href !== '/' ? { cursor: 'default' } : undefined}
                        className="flex-1 py-4 text-2xl font-display hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setMobileDropdown(
                              mobileDropdown === item.name ? null : item.name
                            );
                          }}
                          className="w-12 h-14 flex items-center justify-center text-foreground/60 hover:text-accent transition-colors"
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              mobileDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {item.children && (
                      <AnimatePresence initial={false}>
                        {mobileDropdown === item.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pl-4 pb-4 space-y-2 border-l border-border/60 ml-2 mt-1"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={(e) => e.preventDefault()}
                                  style={{ cursor: 'default' }}
                                  className="block py-2 text-base text-foreground/75 hover:text-accent transition-colors"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Bottom action bar */}
            <div className="p-6 border-t border-border flex-none bg-background">
              <Link
                href="/contact"
                onClick={(e) => e.preventDefault()}
                style={{ cursor: 'default' }}
                className="block w-full text-center py-4 bg-accent text-background font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
