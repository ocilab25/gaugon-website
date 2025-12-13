'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function StaffDashboard() {
  const { user } = useAuth();

  if (user?.role !== 'staff') {
    return <div className="text-white">Access denied</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Staff Dashboard</h1>
        <p className="text-[#A0A0A0]">Welcome back, {user.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="portal-card bg-[#242424] border-[#2A2A2A]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#A0A0A0]">
              Assigned Customers
            </CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">0</div>
            <p className="text-xs text-[#A0A0A0] mt-1">Customers assigned to you</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

