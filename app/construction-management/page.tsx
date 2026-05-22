import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'Tectonic Science — Aethel',
  description: 'Systematic supervision and quality stewardship.',
};

export default function ConstructionManagementPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="Tectonic Science"
        title="Systematic oversight"
        italic="across timelines."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        capabilities={[
          { title: 'Scheduling Rigor', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Milestone tracking and timeline oversight.' },
          { title: 'Financial Balance', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cost control and budget management.' },
          { title: 'Visual Reporting', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Custom dashboards and field reporting.' },
          { title: 'Threshold Checks', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Strict quality gates and on-site checks.' },
          { title: 'Risk Abatement', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Advanced project risk mitigation.' },
          { title: 'Resolution Path', body: 'Aenean sollicitudin lorem quis bibendum auctor. Nam nec tellus a. Structured dispute paths.' },
        ]}
        process={[
          { num: '01', title: 'Calibration', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Defining project coordinates and limits.' },
          { num: '02', title: 'Verification', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna. Baseline review and audit.' },
          { num: '03', title: 'Audit Loop', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco. Continuous active field management.' },
          { num: '04', title: 'Coordination', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Team alignment and resolution paths.' },
          { num: '05', title: 'Transition', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa. Closeout and knowledge transfer.' },
        ]}
        relatedServices={[
          { title: 'Spatial Planning', href: '/pre-construction' },
          { title: 'Architectural Craft', href: '/general-contracting' },
          { title: 'Material Research', href: '/real-estate-advisory' },
        ]}
      />
    </div>
  );
}

