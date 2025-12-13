'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';

export default function PortalDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      // Redirect based on role
      if (user.role === 'admin') {
        router.push('/portal/admin/dashboard');
      } else if (user.role === 'staff') {
        router.push('/portal/staff/dashboard');
      } else {
        router.push('/portal/customer/dashboard');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
      <div className="text-white">Redirecting...</div>
    </div>
  );
}

