import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'Architectural Craft — Aethel',
  description: 'Complete material realization and construction craftsmanship.',
};

export default function GeneralContractingPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="Architectural Craft"
        title="Material execution across"
        italic="all scales."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        capabilities={[
          { title: 'Tectonic Assembly', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. New builds from foundation through occupancy.' },
          { title: 'Slab Engineering', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tenant improvements.' },
          { title: 'Detail Refinement', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Custom fittings and reveals.' },
          { title: 'System Integration', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Direct trade control.' },
          { title: 'Safety Protocols', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Site safety disciplines.' },
          { title: 'Quality Stewardship', body: 'Aenean sollicitudin lorem quis bibendum auctor. Nam nec tellus a. Documented closeout.' },
        ]}
        process={[
          { num: '01', title: 'Plan Handoff', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Budget and design aligned before startup.' },
          { num: '02', title: 'Procurement', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna. Schedule and long-lead order logs.' },
          { num: '03', title: 'Active Assembly', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco. Daily leadership and meetings.' },
          { num: '04', title: 'Quality Checks', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Inspection logs at milestones.' },
          { num: '05', title: 'Turnover', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa. Operations handoff.' },
        ]}
        relatedServices={[
          { title: 'Spatial Planning', href: '/pre-construction' },
          { title: 'Tectonic Science', href: '/construction-management' },
          { title: 'Material Research', href: '/real-estate-advisory' },
        ]}
      />
    </div>
  );
}
