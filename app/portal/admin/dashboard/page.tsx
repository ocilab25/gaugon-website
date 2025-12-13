'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CreditCard, TrendingUp, UserCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { adminApi } from '@/lib/api';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    customers: 0,
    subscriptions: 0,
    revenue: 0,
    activeStaff: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.role !== 'admin') return;

    const fetchStats = async () => {
      try {
        const [customersRes, staffRes] = await Promise.all([
          adminApi.getCustomers(),
          adminApi.getStaff(),
        ]);

        if (customersRes.data) {
          setStats(prev => ({
            ...prev,
            customers: customersRes.data!.customers.length,
          }));
        }

        if (staffRes.data) {
          setStats(prev => ({
            ...prev,
            activeStaff: staffRes.data!.staff.length,
          }));
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  if (user?.role !== 'admin') {
    return <div className="text-white">Access denied</div>;
  }

  const statCards = [
    { label: 'Total Customers', value: stats.customers, icon: Users, color: 'text-blue-400' },
    { label: 'Active Subscriptions', value: stats.subscriptions, icon: CreditCard, color: 'text-green-400' },
    { label: 'Revenue', value: `$${stats.revenue.toLocaleString()}`, icon: TrendingUp, color: 'text-purple-400' },
    { label: 'Staff Members', value: stats.activeStaff, icon: UserCheck, color: 'text-cyan-400' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-[#A0A0A0]">Welcome back, {user.email}</p>
      </div>

      {loading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.label} className="portal-card bg-[#242424] border-[#2A2A2A]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-[#A0A0A0]">
                    {card.label}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${card.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{card.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

