'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { adminApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Mail, Building, Eye, MessageSquare } from 'lucide-react';

interface Customer {
  _id: string;
  email: string;
  profile?: { firstName?: string; lastName?: string; company?: string; phone?: string };
  subscription?: { plan: string; status: string };
}

export default function StaffCustomersPage() {
  const { user } = useAuth();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Customer | null>(null);

  useEffect(() => {
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) return;
    fetchCustomers();
  }, [user]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await adminApi.getCustomers();
      if (response.data) setCustomers(response.data.customers || []);
      else if (response.error) setError(response.error);
    } catch (err) {
      setError('Failed to fetch customers');
    } finally {
      setLoading(false);
    }
  };

  if (!user || (user.role !== 'staff' && user.role !== 'admin')) {
    return <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg text-center">Access denied</div>;
  }

  const filtered = customers.filter((c) => c.email.toLowerCase().includes(search.toLowerCase()) || c.profile?.firstName?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold text-white mb-2">Customer Directory</h1><p className="text-[#A0A0A0]">View and support customers</p></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-[#242424] border-[#2A2A2A]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">All Customers</CardTitle>
                <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64 bg-[#1A1A1A] border-[#2A2A2A] text-white" />
              </div>
            </CardHeader>
            <CardContent>
              {loading ? <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400" /></div>
               : error ? <div className="text-red-400 text-center py-8">{error}</div>
               : filtered.length === 0 ? <div className="text-[#A0A0A0] text-center py-12">No customers</div>
               : <div className="space-y-3">{filtered.map((c) => (
                  <div key={c._id} onClick={() => setSelected(c)} className={`p-4 rounded-lg border cursor-pointer transition-all ${selected?._id === c._id ? 'bg-purple-500/10 border-purple-500/30' : 'bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#3A3A3A]'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white">{(c.profile?.firstName?.[0] || c.email[0]).toUpperCase()}</div>
                        <div><p className="text-white font-medium">{c.profile?.firstName ? `${c.profile.firstName} ${c.profile.lastName}` : c.email.split('@')[0]}</p><p className="text-[#A0A0A0] text-sm">{c.email}</p></div>
                      </div>
                      <Badge variant={c.subscription?.status === 'active' ? 'success' : 'warning'}>{c.subscription?.status || 'none'}</Badge>
                    </div>
                  </div>
                ))}</div>}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#242424] border-[#2A2A2A] sticky top-8">
          <CardHeader><CardTitle className="text-white">Customer Details</CardTitle></CardHeader>
          <CardContent>
            {selected ? (
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-[#2A2A2A]">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl mx-auto mb-3">{(selected.profile?.firstName?.[0] || selected.email[0]).toUpperCase()}</div>
                  <h3 className="text-white font-medium">{selected.profile?.firstName} {selected.profile?.lastName}</h3>
                  <p className="text-[#A0A0A0] text-sm">{selected.email}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#A0A0A0]"><Mail className="w-4 h-4" /><span className="text-sm">{selected.email}</span></div>
                  {selected.profile?.company && <div className="flex items-center gap-3 text-[#A0A0A0]"><Building className="w-4 h-4" /><span className="text-sm">{selected.profile.company}</span></div>}
                </div>
                <div className="p-4 bg-[#1A1A1A] rounded-lg">
                  <p className="text-[#A0A0A0] text-xs uppercase mb-2">Subscription</p>
                  <div className="flex justify-between"><span className="text-white capitalize">{selected.subscription?.plan || 'None'}</span><Badge variant={selected.subscription?.status === 'active' ? 'success' : 'default'}>{selected.subscription?.status || 'none'}</Badge></div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700"><MessageSquare className="w-4 h-4 mr-2" />Send Message</Button>
              </div>
            ) : <div className="text-[#A0A0A0] text-center py-12">Select a customer</div>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}