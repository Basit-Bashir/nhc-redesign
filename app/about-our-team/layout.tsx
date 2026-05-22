import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team — New Path Construction',
  description: 'Meet the team behind New Path Construction & Consulting.',
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
