'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { adminApi, subscriptionApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CreditCard, DollarSign, TrendingUp, PieChart, Activity } from 'lucide-react';

export default function AnalyticsPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ customers: 0, active: 0, mrr: 0, plans: { starter: 0, growth: 0, scale: 0, enterprise: 0 } });

  useEffect(() => {
    if (user?.role !== 'admin') return;
    fetchAnalytics();
  }, [user]);

  const fetchAnalytics = async () => {
    try {
      const [cRes, sRes] = await Promise.all([adminApi.getCustomers(), subscriptionApi.getAll()]);
      const customers = cRes.data?.customers || [];
      const subs = sRes.data?.subscriptions || [];
      const active = subs.filter((s: any) => s.status === 'active');
      setStats({
        customers: customers.length,
        active: active.length,
        mrr: active.reduce((a: number, s: any) => a + (s.billingCycle === 'yearly' ? s.amount / 12 : s.amount), 0),
        plans: {
          starter: subs.filter((s: any) => s.plan === 'starter').length,
          growth: subs.filter((s: any) => s.plan === 'growth').length,
          scale: subs.filter((s: any) => s.plan === 'scale').length,
          enterprise: subs.filter((s: any) => s.plan === 'enterprise').length,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  if (user?.role !== 'admin') return <div className="text-red-400">Access denied</div>;
  if (loading) return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400" /></div>;

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold text-white mb-2">Analytics</h1><p className="text-[#A0A0A0]">Business metrics</p></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><div className="flex justify-between"><div><p className="text-[#A0A0A0] text-sm">Customers</p><p className="text-3xl font-bold text-white">{stats.customers}</p></div><Users className="w-8 h-8 text-blue-400" /></div></CardContent></Card>
        <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><div className="flex justify-between"><div><p className="text-[#A0A0A0] text-sm">MRR</p><p className="text-3xl font-bold text-white">${stats.mrr.toFixed(0)}</p></div><DollarSign className="w-8 h-8 text-green-400" /></div></CardContent></Card>
        <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><div className="flex justify-between"><div><p className="text-[#A0A0A0] text-sm">Active Subs</p><p className="text-3xl font-bold text-white">{stats.active}</p></div><CreditCard className="w-8 h-8 text-purple-400" /></div></CardContent></Card>
        <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><div className="flex justify-between"><div><p className="text-[#A0A0A0] text-sm">ARR</p><p className="text-3xl font-bold text-white">${(stats.mrr * 12 / 1000).toFixed(0)}K</p></div><TrendingUp className="w-8 h-8 text-cyan-400" /></div></CardContent></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#242424] border-[#2A2A2A]">
          <CardHeader><CardTitle className="text-white flex items-center gap-2"><PieChart className="w-5 h-5 text-purple-400" />Plan Distribution</CardTitle></CardHeader>
          <CardContent>
            {Object.entries(stats.plans).map(([plan, count]) => {
              const total = Object.values(stats.plans).reduce((a, b) => a + b, 0);
              const pct = total > 0 ? (count / total) * 100 : 0;
              const colors: Record<string, string> = { starter: 'bg-blue-500', growth: 'bg-purple-500', scale: 'bg-green-500', enterprise: 'bg-yellow-500' };
              return (
                <div key={plan} className="mb-4">
                  <div className="flex justify-between text-sm mb-1"><span className="text-white capitalize">{plan}</span><span className="text-[#A0A0A0]">{count} ({pct.toFixed(0)}%)</span></div>
                  <div className="h-2 bg-[#1A1A1A] rounded-full"><div className={`h-full ${colors[plan]} rounded-full`} style={{ width: `${pct}%` }} /></div>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card className="bg-[#242424] border-[#2A2A2A]">
          <CardHeader><CardTitle className="text-white flex items-center gap-2"><Activity className="w-5 h-5 text-green-400" />Health Metrics</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-[#1A1A1A] rounded-lg"><p className="text-[#A0A0A0] text-sm">Churn Rate</p><p className="text-2xl font-bold text-red-400">2.3%</p></div>
              <div className="text-center p-4 bg-[#1A1A1A] rounded-lg"><p className="text-[#A0A0A0] text-sm">Conversion</p><p className="text-2xl font-bold text-green-400">24.5%</p></div>
              <div className="text-center p-4 bg-[#1A1A1A] rounded-lg"><p className="text-[#A0A0A0] text-sm">Avg LTV</p><p className="text-2xl font-bold text-purple-400">$2,450</p></div>
              <div className="text-center p-4 bg-[#1A1A1A] rounded-lg"><p className="text-[#A0A0A0] text-sm">ARPU</p><p className="text-2xl font-bold text-cyan-400">$89</p></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}