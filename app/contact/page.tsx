'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/page-header';
import { ArrowUpRight, Check, MapPin } from 'lucide-react';

const offices = [
  { region: 'Midwest Sector', city: 'Regional Node 01', address: '1 Coordinate Street, Suite 285', location: 'St. Charles, IL 60174' },
  { region: 'Southwest Sector', city: 'Regional Node 02', address: '4250 Vector Blvd. Suite 300', location: 'Scottsdale, AZ 85251' },
  { region: 'Southern Sector', city: 'Regional Node 03', address: '1600 Grid Freeway, Floor 3', location: 'Bedford, TX 76022' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Contact"
        title="Establish contact"
        italic="and project dialogue."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="py-32 bg-transparent relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-12 text-accent">— Project Inquiry</p>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="border border-accent rounded-3xl p-16 text-center bg-card/45 backdrop-blur-md shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-accent text-background rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-8 h-8 stroke-[3]" />
                </motion.div>
                <h3 className="display-heading text-4xl mb-4 font-bold text-foreground">Transmission received.</h3>
                <p className="opacity-70 max-w-sm mx-auto font-sans leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <FormField 
                    id="first" 
                    label="First name *" 
                    required 
                    activeField={activeField} 
                    setActiveField={setActiveField} 
                  />
                  <FormField 
                    id="last" 
                    label="Last name *" 
                    required 
                    activeField={activeField} 
                    setActiveField={setActiveField} 
                  />
                </div>

                <FormField 
                  id="email" 
                  label="Email *" 
                  type="email" 
                  required 
                  activeField={activeField} 
                  setActiveField={setActiveField} 
                />

                <FormField 
                  id="phone" 
                  label="Phone" 
                  type="tel" 
                  activeField={activeField} 
                  setActiveField={setActiveField} 
                />

                <div className="relative border-b border-border py-2">
                  <label htmlFor="service" className="eyebrow text-xs text-accent block mb-2 font-mono">Typology interest</label>
                  <select
                    id="service"
                    onFocus={() => setActiveField('service')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-transparent py-2 focus:outline-none transition-colors appearance-none cursor-pointer font-sans text-base pr-8 text-foreground font-medium"
                  >
                    <option className="bg-background dark:bg-neutral-900 text-foreground">Spatial Planning</option>
                    <option className="bg-background dark:bg-neutral-900 text-foreground">Architectural Craft</option>
                    <option className="bg-background dark:bg-neutral-900 text-foreground">Tectonic Science</option>
                    <option className="bg-background dark:bg-neutral-900 text-foreground">Material Research</option>
                    <option className="bg-background dark:bg-neutral-900 text-foreground">Other Typologies</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none opacity-60">
                    <ArrowUpRight className="w-4 h-4 rotate-90" />
                  </div>
                  {activeField === 'service' && (
                    <motion.div 
                      layoutId="input-focus" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" 
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </div>

                <div className="relative border-b border-border py-2">
                  <label htmlFor="message" className="eyebrow text-xs text-accent block mb-2 font-mono">Project parameters *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-transparent py-2 focus:outline-none transition-colors resize-none font-sans text-base text-foreground font-medium"
                    placeholder="Scale, coordinates, parameter requirements..."
                  />
                  {activeField === 'message' && (
                    <motion.div 
                      layoutId="input-focus" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" 
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full hover:bg-accent hover:text-foreground transition-all duration-300 font-mono uppercase text-xs tracking-widest font-semibold shadow-md hover:shadow-lg"
                >
                  Send transmission
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Info */}
          <motion.aside 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-16 lg:pl-8 border-l border-border/40"
          >
            <div className="space-y-4">
              <p className="eyebrow text-accent">— Direct</p>
              <div className="space-y-4">
                <a href="mailto:inquiries@aethel.design" className="block text-xl font-display hover:text-accent transition-colors link-underline w-fit">
                  inquiries@aethel.design
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <p className="eyebrow text-accent">— Regional Nodes</p>
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <motion.div 
                    key={office.region}
                    whileHover={{ x: 6 }}
                    className="border-t border-border/80 pt-6 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-foreground font-display text-xl font-semibold group-hover:text-accent transition-colors mb-1">{office.region}</p>
                        <p className="text-sm font-medium opacity-80">{office.city}</p>
                        <p className="text-xs opacity-60 leading-relaxed mt-2 font-sans">
                          {office.address}<br />{office.location}
                        </p>
                      </div>
                      <MapPin className="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/80 pt-8 space-y-3">
              <p className="eyebrow text-accent">— Calibration Standards</p>
              <p className="text-sm opacity-70 leading-relaxed font-sans font-medium">
                System Standard 00-11-22<br />
                Certified Assembly Certification
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  activeField: string | null;
  setActiveField: (id: string | null) => void;
}

function FormField({ id, label, type = 'text', required = false, activeField, setActiveField }: FormFieldProps) {
  return (
    <div className="relative border-b border-border py-2">
      <label htmlFor={id} className="eyebrow text-xs text-accent block mb-2 font-mono">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        onFocus={() => setActiveField(id)}
        onBlur={() => setActiveField(null)}
        className="w-full bg-transparent py-2 focus:outline-none transition-colors font-sans text-base text-foreground font-medium"
      />
      {activeField === id && (
        <motion.div 
          layoutId="input-focus" 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" 
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
      )}
    </div>
  );
}

