import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inquiry — Aethel',
  description: 'Field notes, research summaries, and updates.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
