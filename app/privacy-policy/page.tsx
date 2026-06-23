'use client';

import { PageHeader } from '@/components/page-header';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-transparent relative z-10">
      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy and data"
        italic="governance."
        description="We respect your privacy. This policy outlines how New Path Construction collects, uses, and safeguards your information."
      />

      <section className="py-24 bg-transparent relative z-10 font-sans">
        <div className="max-w-[1000px] mx-auto px-6 space-y-12 text-foreground/80 leading-relaxed text-base md:text-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">1. Information Collection</h2>
            <p>
              We collect information that you voluntarily provide to us when you fill out contact forms, express interest in obtaining information about us or our services, or otherwise contact us. This may include your name, email address, phone number, and project details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">2. Use of Information</h2>
            <p>
              We use the information we collect to communicate with you about your projects, respond to inquiries, send project updates, and improve our website experience and consulting services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">3. Information Sharing</h2>
            <p>
              New Path Construction does not sell, trade, or rent your personal information to third parties. We may share information with trusted subcontractors or service providers who assist us in operating our business and executing construction projects, subject to strict confidentiality agreements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="display-heading text-2xl md:text-3xl text-foreground font-semibold">4. Security</h2>
            <p>
              We implement a variety of industry-standard security measures to maintain the safety of your personal information. However, please remember that no method of transmission over the internet is 100% secure.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
