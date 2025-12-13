'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { adminApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserPlus, Search, MoreVertical, Shield } from 'lucide-react';

interface Staff {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: string;
  department?: string;
  isActive: boolean;
  createdAt: string;
}

export default function StaffPage() {
  const { user } = useAuth();
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (user?.role !== 'admin') return;
    fetchStaff();
  }, [user]);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      const response = await adminApi.getStaff();
      if (response.data) setStaff(response.data.staff || []);
      else if (response.error) setError(response.error);
    } catch (err) {
      setError('Failed to fetch staff');
    } finally {
      setLoading(false);
    }
  };

  if (user?.role !== 'admin') {
    return <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg text-center">Access denied</div>;
  }

  const filteredStaff = staff.filter((m) =>
    m.email.toLowerCase().includes(search.toLowerCase()) ||
    m.firstName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Staff Management</h1>
          <p className="text-[#A0A0A0]">Manage team members</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700"><UserPlus className="w-4 h-4 mr-2" />Add Staff</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#242424] border-[#2A2A2A]">
          <CardContent className="pt-6">
            <p className="text-[#A0A0A0] text-sm">Total Staff</p>
            <p className="text-2xl font-bold text-white">{staff.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#242424] border-[#2A2A2A]">
          <CardContent className="pt-6">
            <p className="text-[#A0A0A0] text-sm">Active</p>
            <p className="text-2xl font-bold text-green-400">{staff.filter(s => s.isActive).length}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#242424] border-[#2A2A2A]">
          <CardContent className="pt-6">
            <p className="text-[#A0A0A0] text-sm">Admins</p>
            <p className="text-2xl font-bold text-yellow-400">{staff.filter(s => s.role === 'admin').length}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#242424] border-[#2A2A2A]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">All Staff</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0]" />
              <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64 pl-10 bg-[#1A1A1A] border-[#2A2A2A] text-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400" /></div>
          ) : error ? (
            <div className="text-red-400 text-center py-8">{error}</div>
          ) : filteredStaff.length === 0 ? (
            <div className="text-[#A0A0A0] text-center py-12">No staff found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Email</th>
                    <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Role</th>
                    <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStaff.map((m) => (
                    <tr key={m._id} className="border-b border-[#2A2A2A] hover:bg-[#1A1A1A]">
                      <td className="py-3 px-4 text-white">{m.firstName || m.email.split('@')[0]} {m.lastName}</td>
                      <td className="py-3 px-4 text-[#A0A0A0]">{m.email}</td>
                      <td className="py-3 px-4"><Badge variant={m.role === 'admin' ? 'warning' : 'default'}>{m.role}</Badge></td>
                      <td className="py-3 px-4"><Badge variant={m.isActive ? 'success' : 'destructive'}>{m.isActive ? 'Active' : 'Inactive'}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}