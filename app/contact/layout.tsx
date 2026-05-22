import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inquiries — Aethel',
  description: 'Establish coordinate contact and project dialogue.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
