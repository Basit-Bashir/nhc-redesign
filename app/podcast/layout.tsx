import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Broadcast — Aethel',
  description: 'Auditory research, discussions, and technical reviews.',
};

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
