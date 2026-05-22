import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'Spatial Planning — Aethel',
  description: 'Geometric order and programmatic allocation prior to development.',
};

export default function PreConstructionPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="Spatial Planning"
        title="Prior to structural execution,"
        italic="we model."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        capabilities={[
          { title: 'Volumetric Studies', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Site analysis, market positioning.' },
          { title: 'Cost Engineering', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Detailed estimates.' },
          { title: 'Capital Optimization', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Connecting projects.' },
          { title: 'Layout Sourcing', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Pre-leasing strategy.' },
          { title: 'System Integration', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Co-development arrangements.' },
          { title: 'Zoning Strategy', body: 'Aenean sollicitudin lorem quis bibendum auctor. Nam nec tellus a. Municipal coordination.' },
        ]}
        process={[
          { num: '01', title: 'Discovery', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We learn the project constraints.' },
          { num: '02', title: 'Feasibility', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna. Site, market, and capital analysis.' },
          { num: '03', title: 'Budgeting', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco. Cost model and timeline.' },
          { num: '04', title: 'Capitalization', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Financing structure.' },
          { num: '05', title: 'Transition', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa. Handoff to active development.' },
        ]}
        relatedServices={[
          { title: 'Architectural Craft', href: '/general-contracting' },
          { title: 'Tectonic Science', href: '/construction-management' },
          { title: 'Material Research', href: '/real-estate-advisory' },
        ]}
      />
    </div>
  );
}
