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
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-border">
              <span className="font-display text-lg">
                Aethel<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
              }}
              className="p-6 space-y-1"
            >
              {navigation.map((item) => (
                <motion.li
                  key={item.name}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <Link
                    href={item.href}
                    className="block py-4 text-2xl font-display border-b border-border hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <ul className="pl-4 py-2 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-foreground/60 hover:text-accent"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </motion.ul>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
              <Link
                href="/contact"
                className="block w-full text-center py-4 bg-accent text-background rounded-full"
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
