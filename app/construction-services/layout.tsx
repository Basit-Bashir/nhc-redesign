import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Services — New Path Construction',
  description: 'Boutique design/build construction and advisory services across eight core verticals.',
};

export default function ConstructionServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
