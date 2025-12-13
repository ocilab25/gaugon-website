'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { subscriptionApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CreditCard, Search, TrendingUp, DollarSign } from 'lucide-react';

interface Subscription {
  _id: string;
  customerEmail?: string;
  customerName?: string;
  plan: string;
  status: string;
  billingCycle: string;
  amount: number;
  nextBillingDate?: string;
}

export default function SubscriptionsPage() {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (user?.role !== 'admin') return;
    fetchSubscriptions();
  }, [user]);

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      const response = await subscriptionApi.getAll();
      if (response.data) setSubscriptions(response.data.subscriptions || []);
      else if (response.error) setError(response.error);
    } catch (err) {
      setError('Failed to fetch subscriptions');
    } finally {
      setLoading(false);
    }
  };

  if (user?.role !== 'admin') {
    return <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg text-center">Access denied</div>;
  }

  const stats = {
    total: subscriptions.length,
    active: subscriptions.filter(s => s.status === 'active').length,
    mrr: subscriptions.filter(s => s.status === 'active').reduce((acc, s) => acc + (s.billingCycle === 'yearly' ? s.amount / 12 : s.amount), 0),
  };

  const filtered = subscriptions.filter((s) => s.customerEmail?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold text-white mb-2">Subscriptions</h1><p className="text-[#A0A0A0]">Manage billing</p></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><p className="text-[#A0A0A0] text-sm">Total</p><p className="text-2xl font-bold text-white">{stats.total}</p></CardContent></Card>
        <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><p className="text-[#A0A0A0] text-sm">Active</p><p className="text-2xl font-bold text-green-400">{stats.active}</p></CardContent></Card>
        <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><p className="text-[#A0A0A0] text-sm">MRR</p><p className="text-2xl font-bold text-purple-400">${stats.mrr.toFixed(0)}</p></CardContent></Card>
      </div>

      <Card className="bg-[#242424] border-[#2A2A2A]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">All Subscriptions</CardTitle>
            <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64 bg-[#1A1A1A] border-[#2A2A2A] text-white" />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400" /></div>
           : error ? <div className="text-red-400 text-center py-8">{error}</div>
           : filtered.length === 0 ? <div className="text-[#A0A0A0] text-center py-12">No subscriptions</div>
           : <div className="overflow-x-auto"><table className="w-full"><thead><tr className="border-b border-[#2A2A2A]"><th className="text-left py-3 px-4 text-[#A0A0A0]">Customer</th><th className="text-left py-3 px-4 text-[#A0A0A0]">Plan</th><th className="text-left py-3 px-4 text-[#A0A0A0]">Status</th><th className="text-left py-3 px-4 text-[#A0A0A0]">Amount</th></tr></thead><tbody>{filtered.map((s) => (<tr key={s._id} className="border-b border-[#2A2A2A] hover:bg-[#1A1A1A]"><td className="py-3 px-4 text-white">{s.customerName || s.customerEmail}</td><td className="py-3 px-4 text-[#A0A0A0] capitalize">{s.plan}</td><td className="py-3 px-4"><Badge variant={s.status === 'active' ? 'success' : 'warning'}>{s.status}</Badge></td><td className="py-3 px-4 text-white">${s.amount}/{s.billingCycle === 'yearly' ? 'yr' : 'mo'}</td></tr>))}</tbody></table></div>}
        </CardContent>
      </Card>
    </div>
  );
}