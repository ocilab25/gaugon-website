'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { customerApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCard, Calendar, DollarSign, CheckCircle, ArrowUpRight, Download, Clock, AlertTriangle } from 'lucide-react';

const planFeatures: Record<string, string[]> = {
  starter: ['Basic workflow automation', 'Email marketing setup', 'CRM integration', 'Monthly reporting', 'Email support'],
  growth: ['All Starter features', 'AI-powered support', 'Advanced dashboards', 'Multi-system integrations', 'Priority support'],
  scale: ['All Growth features', 'Custom development', 'Dedicated manager', 'Real-time monitoring', '24/7 support'],
  enterprise: ['All Scale features', 'Custom integrations', 'On-premise option', 'SLA guarantees', 'Dedicated team'],
};

const planColors: Record<string, string> = { starter: 'bg-blue-500', growth: 'bg-purple-500', scale: 'bg-green-500', enterprise: 'bg-yellow-500' };

export default function CustomerSubscriptionPage() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.role !== 'customer') return;
    fetchSubscription();
  }, [user]);

  const fetchSubscription = async () => {
    try {
      const response = await customerApi.getSubscription();
      if (response.data?.subscription) setSubscription(response.data.subscription);
    } finally {
      setLoading(false);
    }
  };

  if (!user || user.role !== 'customer') return <div className="text-red-400">Access denied</div>;
  if (loading) return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400" /></div>;

  const getStatusBadge = (status: string) => {
    const config: Record<string, { variant: 'success' | 'warning' | 'destructive'; icon: any }> = {
      active: { variant: 'success', icon: CheckCircle },
      trial: { variant: 'warning', icon: Clock },
      cancelled: { variant: 'destructive', icon: AlertTriangle },
    };
    const { variant, icon: Icon } = config[status] || { variant: 'default' as const, icon: null };
    return <Badge variant={variant} className="capitalize flex items-center gap-1">{Icon && <Icon className="w-3 h-3" />}{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold text-white mb-2">My Subscription</h1><p className="text-[#A0A0A0]">Manage your plan</p></div>

      {subscription ? (
        <>
          <Card className="bg-[#242424] border-[#2A2A2A] overflow-hidden">
            <div className={`h-2 ${planColors[subscription.plan]}`} />
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div><div className="flex items-center gap-3 mb-2"><h2 className="text-2xl font-bold text-white capitalize">{subscription.plan} Plan</h2>{getStatusBadge(subscription.status)}</div><p className="text-[#A0A0A0]">{subscription.billingCycle === 'yearly' ? 'Annual' : 'Monthly'} billing</p></div>
                <div className="text-right"><p className="text-3xl font-bold text-white">${subscription.amount}<span className="text-lg text-[#A0A0A0]">/{subscription.billingCycle === 'yearly' ? 'yr' : 'mo'}</span></p></div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><div className="flex items-center gap-3"><div className="p-2 bg-blue-500/20 rounded-lg"><Calendar className="w-5 h-5 text-blue-400" /></div><div><p className="text-[#A0A0A0] text-sm">Start Date</p><p className="text-white font-medium">{new Date(subscription.startDate).toLocaleDateString()}</p></div></div></CardContent></Card>
            <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><div className="flex items-center gap-3"><div className="p-2 bg-purple-500/20 rounded-lg"><CreditCard className="w-5 h-5 text-purple-400" /></div><div><p className="text-[#A0A0A0] text-sm">Next Billing</p><p className="text-white font-medium">{subscription.nextBillingDate ? new Date(subscription.nextBillingDate).toLocaleDateString() : 'N/A'}</p></div></div></CardContent></Card>
            <Card className="bg-[#242424] border-[#2A2A2A]"><CardContent className="pt-6"><div className="flex items-center gap-3"><div className="p-2 bg-green-500/20 rounded-lg"><DollarSign className="w-5 h-5 text-green-400" /></div><div><p className="text-[#A0A0A0] text-sm">Amount Due</p><p className="text-white font-medium">${subscription.amount}</p></div></div></CardContent></Card>
          </div>

          <Card className="bg-[#242424] border-[#2A2A2A]">
            <CardHeader><CardTitle className="text-white">Plan Features</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(planFeatures[subscription.plan] || []).map((feature, i) => (<div key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-[#A0A0A0]">{feature}</span></div>))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700"><ArrowUpRight className="w-4 h-4 mr-2" />Upgrade Plan</Button>
            <Button variant="outline" className="border-[#2A2A2A] text-white hover:bg-[#2A2A2A]"><Download className="w-4 h-4 mr-2" />Download Invoice</Button>
          </div>
        </>
      ) : (
        <Card className="bg-[#242424] border-[#2A2A2A]">
          <CardContent className="py-12 text-center">
            <CreditCard className="w-12 h-12 text-[#A0A0A0] mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No Active Subscription</h3>
            <p className="text-[#A0A0A0] mb-6">Choose a plan to get started.</p>
            <Button className="bg-purple-600 hover:bg-purple-700">View Plans</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}