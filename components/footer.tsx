'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, Mail } from 'lucide-react';

const offices = [
  {
    region: 'Midwest',
    city: 'Chicagoland',
    address: '1 Illinois Street, Suite 285',
    location: 'St. Charles, IL 60174',
  },
  {
    region: 'Southwest',
    city: 'Phoenix Metro',
    address: '4250 N. Drinkwater Blvd. Suite 300',
    location: 'Scottsdale, AZ 85251',
  },
  {
    region: 'South',
    city: 'Dallas–Fort Worth Metro',
    address: '1600 Airport Freeway, Floor 3',
    location: 'Bedford, TX 76022',
  },
];

const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-8 mt-12 relative overflow-hidden">
      {/* Massive wordmark */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading text-mega leading-[0.85] mb-16"
        >
          Build. Advise. <span className="italic text-accent">Manage.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Contact CTA */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Get in touch</p>
            <p className="text-xl mb-8 leading-relaxed opacity-80 font-sans">
              Contact us for more information or to discuss your next project.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:630-283-3884"
                className="!flex items-center gap-3 text-2xl font-display link-underline w-fit"
              >
                <Phone className="w-5 h-5 text-accent" />
                +1 (630) 283-3884
              </a>
              <a
                href="mailto:info@newpathconstruction.com"
                className="!flex items-center gap-3 text-2xl font-display link-underline w-fit"
              >
                <Mail className="w-5 h-5 text-accent" />
                info@newpathconstruction.com
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-accent text-foreground rounded-full hover:bg-background hover:text-foreground transition-colors"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Offices */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Corporate Offices</p>
            <div className="grid sm:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div key={office.region} className="border-t border-background/20 pt-4">
                  <p className="font-display text-lg mb-2 text-accent">{office.region}</p>
                  <p className="text-sm font-medium mb-1">{office.city}</p>
                  <p className="text-xs opacity-60 leading-relaxed font-sans">
                    {office.address}
                    <br />
                    {office.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-background/20">
          <p className="text-xs opacity-60 font-mono">
            © {new Date().getFullYear()} New Path Construction &amp; Consulting. AZ ROC License #327484
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs link-underline opacity-80 hover:opacity-100 font-mono"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
