import { ServiceDetail } from '@/components/service-detail';

export const metadata = {
  title: 'Material Research — Aethel',
  description: 'Inquiry into raw substrates, aging, and structural performance.',
};

export default function RealEstateAdvisoryPage() {
  return (
    <div className="bg-transparent relative z-10">
      <ServiceDetail
        eyebrow="Material Research"
        title="Inquiry into raw substrates,"
        italic="aging, and performance."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        capabilities={[
          { title: 'Context Studies', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contextual modeling and local material audits.' },
          { title: 'Substrate Tests', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Physical stress, strain, and weathering tests.' },
          { title: 'Light Modeling', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Precision shadow casting and solar heat studies.' },
          { title: 'Thermal Engineering', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Advanced envelope insulation profiling.' },
          { title: 'Aging Studies', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Time-lapse weathering simulations.' },
          { title: 'Lifecycle Mapping', body: 'Aenean sollicitudin lorem quis bibendum auctor. Nam nec tellus a. Ecological lifecycle charting.' },
        ]}
        process={[
          { num: '01', title: 'Extraction', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Retrieving and sourcing core substrate samples.' },
          { num: '02', title: 'Analysis', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna. Lab-grade stress testing.' },
          { num: '03', title: 'Simulation', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco. Environmental exposure modeling.' },
          { num: '04', title: 'Selection', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. Curating and validating finishes.' },
          { num: '05', title: 'Deployment', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa. On-site assembly instruction.' },
        ]}
        relatedServices={[
          { title: 'Spatial Planning', href: '/pre-construction' },
          { title: 'Architectural Craft', href: '/general-contracting' },
          { title: 'Tectonic Science', href: '/construction-management' },
        ]}
      />
    </div>
  );
}

