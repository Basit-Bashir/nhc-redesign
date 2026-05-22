import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — New Path Construction',
  description: "New Path Construction is the nation's leading boutique design/build construction firm — delivering trusted, experienced general contracting and consulting across every major industry vertical.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
