import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'Pre-Construction — New Path Construction',
  description: 'Aligning design with budget, constructability review, value engineering, and logistics planning.',
};

export default function PreConstructionPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="Pre-Construction"
        title="Decisions made before structural execution"
        italic="define success."
        description="The most impactful decisions in any project happen before the first shovel enters the ground. Our pre-construction services help owners make those decisions with full information — reducing risk, aligning design with budget, and eliminating surprises during construction."
        overview="New Path Construction excels in preconstruction services by leveraging its deep roots in Wall Street and extensive construction expertise — combining financial rigor with hands-on building knowledge to give owners a unique advantage before a shovel breaks ground."
        capabilities={[
          { title: 'Design & Planning', body: 'Constructability and design review, conceptual, schematic, and GMP cost estimating, value engineering, life-cycle cost analysis, phasing and logistics planning.' },
          { title: 'Procurement & Permitting', body: 'Permitting strategy and schedule development, bid package development and leveling, capital procurement assistance, and prospective tenant identification.' },
          { title: 'Financial & Advisory', body: 'Budget-backward project planning, developer partnership support, capital raising capabilities, and business-friendly phasing plans.' },
        ]}
        process={[
          { num: '01', title: 'Discovery & Constraints', body: 'We sit down with the owner to understand target budgets, yield expectations, and key project parameters.' },
          { num: '02', title: 'Estimating & Cost Modeling', body: 'Using our proprietary unit-cost database, we create schematic and GMP estimates to align design with budget.' },
          { num: '03', title: 'Value Engineering', body: 'We perform life-cycle cost analysis and propose material/system alternatives to save capital without sacrificing quality.' },
          { num: '04', title: 'Logistics & Phasing', body: 'We map out the logistics, schedules, and permitting strategy to eliminate downstream delays.' },
          { num: '05', title: 'Bid Leveling & Handoff', body: 'We package and level bids transparently, preparing the project for smooth construction execution.' },
        ]}
        relatedServices={[
          { title: 'General Contracting', href: '/general-contracting' },
          { title: 'Construction Management', href: '/construction-management' },
          { title: 'Real Estate Advisory', href: '/real-estate-advisory' },
        ]}
      />
    </div>
  );
}
