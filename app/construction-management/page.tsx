import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'Construction Management — New Path Construction',
  description: 'Independent owner-side construction management, contractor selection, budget and schedule oversight, and executive reporting.',
};

export default function ConstructionManagementPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="Construction Management"
        title="Independent, owner-side oversight"
        italic="aligned to your interests."
        description="When you need an experienced professional in your corner — not the contractor's — our construction management service provides independent, owner-side oversight from design through substantial completion. We keep architects, engineers, and contractors aligned to your interests and accountable to their commitments."
        overview="We oversee premier developments, from hotel assemblies to logistics headquarters. Featured projects include the Hyatt Place Hotel in Evansville, IN, the CubeSmart Facility in Chicago Heights, IL, and the rf IDEAS New Headquarters in Schaumburg, IL."
        capabilities={[
          { title: "Owner's Representation", body: "Comprehensive owner's representative services (OPM/OPR), contractor selection, contract negotiation, and a seamless process prioritizing efficiency from inception to completion." },
          { title: 'Budget & Schedule Tracking', body: 'Schedule monitoring and recovery planning, budget tracking, proprietary cost control systems for labor and equipment, and executive dashboards.' },
          { title: 'Documentation & Closeout', body: 'RFI and submittal management, strict quality control, site inspections, lien waiver/payment application review, punch list management, and closeout coordination.' },
        ]}
        process={[
          { num: '01', title: 'Scope Alignment', body: 'We review project scope, developer needs, and establish key performance indicators.' },
          { num: '02', title: 'Subcontractor & PM Setup', body: 'We select contractors and negotiate agreements prioritizing the owner\'s budget.' },
          { num: '03', title: 'Execution & Supervision', body: 'We run regular site checks, review RFIs, submittals, and enforce project parameters.' },
          { num: '04', title: 'Financial Oversight', body: 'We review lien waivers, payment applications, and track costs dynamically.' },
          { num: '05', title: 'Completion & Handover', body: 'We manage punch lists and closeout items to ensure standard-compliant delivery.' },
        ]}
        relatedServices={[
          { title: 'Pre-Construction', href: '/pre-construction' },
          { title: 'General Contracting', href: '/general-contracting' },
          { title: 'Real Estate Advisory', href: '/real-estate-advisory' },
        ]}
      />
    </div>
  );
}
