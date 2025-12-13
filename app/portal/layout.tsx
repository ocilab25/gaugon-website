import { AuthProvider } from '@/lib/auth';
import { PortalLayout } from '@/components/portal/PortalLayout';

export default function PortalRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <PortalLayout>{children}</PortalLayout>
    </AuthProvider>
  );
}

