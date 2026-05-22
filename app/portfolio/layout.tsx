import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio — New Path Construction',
  description: 'A portfolio that spans restaurants, retail, medical, industrial, multi-family, self-storage, and fuel hubs.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
