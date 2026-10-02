import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'RecallLater Privacy Policy', description: 'RecallLater privacy policy.' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><main className="shell">{children}</main></body></html>;
}
