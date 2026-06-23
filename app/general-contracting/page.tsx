import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'General Contracting — New Path Construction',
  description: 'Full-accountability project delivery, Six Sigma scheduling, custom cost databases, and customizable contracts.',
};

export default function GeneralContractingPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="General Contracting"
        title="Single-point responsibility for every"
        italic="aspect of construction."
        description="We serve as the prime contractor on projects where owners need a single point of responsibility for every aspect of construction. Our team self-performs key coordination functions and manages a vetted network of specialty subcontractors to protect your schedule, quality standards, and budget."
        overview="We operate across the Continental United States with local subcontractor and material sourcing capabilities — delivering the accountability of a national firm with the relationships of a regional partner."
        capabilities={[
          { title: 'Estimating & Costs', body: 'Internally developed unit-cost database, full project take-off analysis, commodity tracking, real-time pricing, and competitive/negotiated bid procurement.' },
          { title: 'Safety & Quality Control', body: 'OSHA training for all staff, custom jobsite safety signage, regular site inspections, toolbox safety meetings, and rigorous quality audits.' },
          { title: 'Scheduling & Tech', body: 'Record-setting completion timelines, proprietary Six Sigma efficiency platform, custom project tracking, and 24/7 direct communication channels.' },
          { title: 'Contracts & closeout', body: 'Direct bank coordination, industry-leading customizable contract options, comprehensive closeout logs, and systematic warranty management.' },
        ]}
        process={[
          { num: '01', title: 'Negotiation & Setup', body: 'We finalize contract structures (lump sum or GMP) to align risks, insurance constraints, and owner expectations.' },
          { num: '02', title: 'Subcontractor Sourcing', body: 'We secure competitive bids from our vetted network of local and national specialty subcontractors.' },
          { num: '03', title: 'OSHA Safety & Compliance', body: 'We establish site safety signage, custom protocols, and run regular meetings to maintain zero-incident job sites.' },
          { num: '04', title: 'Operations & Tracking', body: 'We apply Six Sigma scheduling and send detailed daily, weekly, and monthly dashboard reports to the owner.' },
          { num: '05', title: 'Closeout & Warranty', body: 'We complete walkthroughs, collect warranties, hand over documentation, and manage post-occupancy care.' },
        ]}
        relatedServices={[
          { title: 'Pre-Construction', href: '/pre-construction' },
          { title: 'Construction Management', href: '/construction-management' },
          { title: 'Real Estate Advisory', href: '/real-estate-advisory' },
        ]}
      />
    </div>
  );
}
