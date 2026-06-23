'use client';

import { PageHeader } from '@/components/page-header';
import { motion } from 'framer-motion';

export default function TermsConditionsPage() {
  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Terms"
        title="Terms & Conditions of"
        italic="service."
        description="By accessing our website and services, you agree to comply with and be bound by the following terms of use."
      />

      <section className="py-24 bg-transparent relative z-10 font-sans">
        <div className="max-w-[1000px] mx-auto px-6 space-y-12 text-foreground/80 leading-relaxed text-base md:text-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">1. Acceptance of Terms</h2>
            <p>
              By browsing and using the website of New Path Construction, you acknowledge that you have read, understood, and agreed to be bound by these terms. If you do not agree to these terms, please do not use our website.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">2. Service Scope</h2>
            <p>
              Our website provides information about our General Contracting, Pre-Construction, Construction Management, and Real Estate Advisory services. All project details, portfolio items, and capabilities listed on this site are for informational purposes and subject to final, signed contracts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">3. Intellectual Property</h2>
            <p>
              The content, graphics, imagery, branding, logos, layout, and visual designs featured on this website are the intellectual property of New Path Construction &amp; Consulting or its content suppliers and are protected by copyright laws. Any unauthorized distribution, reproduction, or use is strictly prohibited.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">4. Limitation of Liability</h2>
            <p>
              New Path Construction shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, or any materials or information contained herein.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
