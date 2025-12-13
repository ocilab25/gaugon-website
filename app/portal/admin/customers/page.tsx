'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { adminApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function CustomersPage() {
  const { user } = useAuth();
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (user?.role !== 'admin') return;

    const fetchCustomers = async () => {
      try {
        const response = await adminApi.getCustomers();
        if (response.data) {
          setCustomers(response.data.customers);
        }
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [user]);

  if (user?.role !== 'admin') {
    return <div className="text-white">Access denied</div>;
  }

  const filteredCustomers = customers.filter((customer) =>
    customer.email.toLowerCase().includes(search.toLowerCase()) ||
    (customer.profile?.firstName?.toLowerCase().includes(search.toLowerCase())) ||
    (customer.profile?.lastName?.toLowerCase().includes(search.toLowerCase()))
  );

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'success' | 'warning' | 'destructive'> = {
      active: 'success',
      trial: 'warning',
      cancelled: 'destructive',
      expired: 'destructive',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Customers</h1>
          <p className="text-[#A0A0A0]">Manage all customer accounts</p>
        </div>
      </div>

      <Card className="portal-card bg-[#242424] border-[#2A2A2A]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">All Customers</CardTitle>
            <Input
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 bg-[#1A1A1A] border-[#2A2A2A] text-white"
            />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-white">Loading...</div>
          ) : (
            <div className="space-y-4">
              {filteredCustomers.length === 0 ? (
                <div className="text-[#A0A0A0] text-center py-8">No customers found</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#2A2A2A]">
                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Name</th>
                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Email</th>
                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Company</th>
                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Plan</th>
                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCustomers.map((customer) => (
                        <tr key={customer._id || customer.id} className="border-b border-[#2A2A2A] hover:bg-[#1A1A1A]">
                          <td className="py-3 px-4 text-white">
                            {customer.profile?.firstName} {customer.profile?.lastName}
                          </td>
                          <td className="py-3 px-4 text-[#A0A0A0]">{customer.email}</td>
                          <td className="py-3 px-4 text-[#A0A0A0]">{customer.profile?.company || '-'}</td>
                          <td className="py-3 px-4 text-[#A0A0A0] capitalize">{customer.subscription?.plan || '-'}</td>
                          <td className="py-3 px-4">
                            {getStatusBadge(customer.subscription?.status || 'active')}
                          </td>
                          <td className="py-3 px-4 text-[#A0A0A0]">
                            {new Date(customer.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

