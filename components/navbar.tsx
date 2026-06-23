'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Menu, MenuItem, HoveredLink } from './ui/navbar-menu';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'About New Path Construction', href: '/about' },
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
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
      >
        <nav
          className={`w-full max-w-[1400px] pointer-events-auto transition-all duration-500 flex items-center justify-between rounded-full border ${scrolled
            ? 'bg-background/80 backdrop-blur-xl border-border px-8 py-14 h-16 shadow-lg shadow-black/5'
            : 'bg-transparent border-transparent px-8 py-5 h-20'
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 lg:w-32 lg:h-32 relative flex items-center justify-center overflow-hidden rounded-sm">
              <img
                src="/images/npc-logo.avif"
                alt="New Path Construction Logo"
                className="w-full h-full object-contain"
              />
            </div>

          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:block">
            <Menu setActive={setOpenDropdown}>
              {navigation.map((item) => {
                if (item.children) {
                  return (
                    <MenuItem
                      key={item.name}
                      setActive={setOpenDropdown}
                      active={openDropdown}
                      item={item.name}
                      href={item.href}
                    >
                      <div className="flex flex-col gap-2 min-w-[200px] py-1 text-left">
                        {item.children.map((child) => (
                          <HoveredLink
                            key={child.href}
                            href={child.href}
                          >
                            {child.name}
                          </HoveredLink>
                        ))}
                      </div>
                    </MenuItem>
                  );
                } else {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onMouseEnter={() => setOpenDropdown(null)}
                      className="cursor-pointer font-medium text-foreground/80 hover:text-accent transition-colors py-2 px-1 text-lg"
                    >
                      {item.name}
                    </Link>
                  );
                }
              })}
            </Menu>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-foreground text-background text-base font-medium rounded-full hover:bg-accent transition-colors"
            >
              Start a project
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu dropdown card */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay to close when clicking outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden pointer-events-auto"
            />

            {/* The dropdown card */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-24 left-4 right-4 z-50 bg-card/95 backdrop-blur-xl border border-border rounded-[2rem] p-6 shadow-2xl flex flex-col max-h-[75vh] overflow-y-auto lg:hidden pointer-events-auto"
            >
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name} className="border-b border-border/30 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 py-2 text-xl font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenDropdown(
                              openDropdown === item.name ? null : item.name
                            );
                          }}
                          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted text-foreground/60 hover:text-accent transition-colors"
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.children && (
                      <AnimatePresence initial={false}>
                        {openDropdown === item.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pl-4 pb-2 pt-2 space-y-2 border-l border-accent/30 ml-2"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-1.5 text-[16px] text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 bg-accent text-background font-medium rounded-full hover:bg-accent/90 transition-colors shadow-lg shadow-accent/10"
                >
                  Start a project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
