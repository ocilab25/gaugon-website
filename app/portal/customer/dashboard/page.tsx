'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, User, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function CustomerDashboard() {
  const { user } = useAuth();

  if (user?.role !== 'customer') {
    return <div className="text-white">Access denied</div>;
  }

  const customer = user as any;
  const subscription = customer.subscription || {};

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-[#A0A0A0]">
          Welcome back, {customer.profile?.firstName || user.email}
        </p>
      </div>

      {/* Subscription Card */}
      <Card className="portal-card bg-[#242424] border-[#2A2A2A]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-primary" />
              <CardTitle className="text-white">My Subscription</CardTitle>
            </div>
            <Badge variant={subscription.status === 'active' ? 'success' : 'warning'}>
              {subscription.status || 'trial'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm text-[#A0A0A0] mb-1">Current Plan</div>
            <div className="text-2xl font-bold text-white capitalize">
              {subscription.plan || 'Standard'}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-[#A0A0A0] mb-1">Billing Cycle</div>
              <div className="text-white capitalize">{subscription.billingCycle || 'monthly'}</div>
            </div>
            <div>
              <div className="text-sm text-[#A0A0A0] mb-1">Start Date</div>
              <div className="text-white">
                {subscription.startDate 
                  ? new Date(subscription.startDate).toLocaleDateString()
                  : 'N/A'}
              </div>
            </div>
          </div>
          <Link href="/portal/customer/subscription">
            <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
              Manage Subscription
            </button>
          </Link>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/portal/customer/profile">
          <Card className="portal-card bg-[#242424] border-[#2A2A2A] hover:border-primary transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <User className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-white font-medium">My Profile</div>
                  <div className="text-sm text-[#A0A0A0]">Update your information</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/portal/customer/usage">
          <Card className="portal-card bg-[#242424] border-[#2A2A2A] hover:border-primary transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-white font-medium">Usage & Analytics</div>
                  <div className="text-sm text-[#A0A0A0]">View your activity</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/portal/customer/support">
          <Card className="portal-card bg-[#242424] border-[#2A2A2A] hover:border-primary transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-white font-medium">Support</div>
                  <div className="text-sm text-[#A0A0A0]">Get help</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

