import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'Real Estate Advisory — New Path Construction',
  description: 'Site selection, financial proforma modeling, entitlements, capital raising, and owner-side deal evaluation.',
};

export default function RealEstateAdvisoryPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="Real Estate Advisory"
        title="Evaluate opportunities and maximize"
        italic="shareholder value."
        description="Between our Wall Street roots and significant construction experience, New Path can help you evaluate real estate, drive value to shareholders, and provide options for the best use of any given property. Our advisory practice helps developers and investors evaluate opportunities before committing capital."
        overview="Our principals have completed over $5 billion in deals across multiple industries. We provide complimentary advisory services to NPC clients to foster long-term partnerships."
        capabilities={[
          { title: 'Dealmaking & Diligence', body: 'Site selection, comprehensive project due diligence, debt/equity investor introductions, and direct project co-investment capabilities.' },
          { title: 'Trusted Network Sourcing', body: 'Connecting clients directly to leading banking institutions, private equity and hedge funds, legal councils, and brokerage partners.' },
          { title: 'Construction & Finance IQ', body: 'Real-time pricing evaluation, site assessments, entitlement and zoning strategy, timeline projections, and proforma development.' },
          { title: 'Preconstruction Advisory', body: 'Budget-backward project planning, capital raising, business-friendly phasing plans, and highest-and-best-use analysis.' },
        ]}
        process={[
          { num: '01', title: 'Intake & Underwriting', body: 'We evaluate deal parameters, return targets, and capital requirements.' },
          { num: '02', title: 'Due Diligence & Site Selection', body: 'We execute site searches and verify physical, zoning, and legal constraints.' },
          { num: '03', title: 'Proforma Modeling', body: 'We build detailed financial models, cost structures, and timing projections.' },
          { num: '04', title: 'Capital & Partner Structuring', body: 'We align debt/equity sources and design presentations for investors and lenders.' },
          { num: '05', title: 'Strategic Execution', body: 'We assist in negotiations, entitlements, and land acquisition to launch the project.' },
        ]}
        relatedServices={[
          { title: 'Pre-Construction', href: '/pre-construction' },
          { title: 'General Contracting', href: '/general-contracting' },
          { title: 'Construction Management', href: '/construction-management' },
        ]}
      />
    </div>
  );
}
