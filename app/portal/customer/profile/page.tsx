'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { customerApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { User, Mail, Phone, Building, MapPin, Save, Loader2 } from 'lucide-react';

export default function CustomerProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', address: '', city: '', country: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!user || user.role !== 'customer') return;
    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    try {
      const response = await customerApi.getProfile();
      if (response.data?.customer) {
        const c = response.data.customer;
        setProfile({ firstName: c.profile?.firstName || '', lastName: c.profile?.lastName || '', email: c.email || '', phone: c.profile?.phone || '', company: c.profile?.company || '', address: c.profile?.address || '', city: c.profile?.city || '', country: c.profile?.country || '' });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true); setError(null); setSuccess(false);
    try {
      const response = await customerApi.updateProfile({ firstName: profile.firstName, lastName: profile.lastName, phone: profile.phone, company: profile.company, address: profile.address, city: profile.city, country: profile.country });
      if (response.error) setError(response.error);
      else { setSuccess(true); setTimeout(() => setSuccess(false), 3000); }
    } finally {
      setSaving(false);
    }
  };

  if (!user || user.role !== 'customer') return <div className="text-red-400">Access denied</div>;
  if (loading) return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400" /></div>;

  return (
    <div className="space-y-6 max-w-3xl">
      <div><h1 className="text-3xl font-bold text-white mb-2">My Profile</h1><p className="text-[#A0A0A0]">Manage your account</p></div>

      <form onSubmit={handleSubmit}>
        <Card className="bg-[#242424] border-[#2A2A2A] mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl">{profile.firstName?.[0]?.toUpperCase() || 'U'}</div>
              <div><h3 className="text-white font-medium text-lg">{profile.firstName} {profile.lastName}</h3><p className="text-[#A0A0A0]">{profile.email}</p></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#242424] border-[#2A2A2A] mb-6">
          <CardHeader><CardTitle className="text-white flex items-center gap-2"><User className="w-5 h-5 text-purple-400" />Personal Info</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><Label className="text-[#A0A0A0]">First Name</Label><Input value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} className="bg-[#1A1A1A] border-[#2A2A2A] text-white" /></div>
              <div><Label className="text-[#A0A0A0]">Last Name</Label><Input value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} className="bg-[#1A1A1A] border-[#2A2A2A] text-white" /></div>
            </div>
            <div><Label className="text-[#A0A0A0]">Email</Label><Input value={profile.email} disabled className="bg-[#1A1A1A] border-[#2A2A2A] text-[#A0A0A0]" /></div>
            <div><Label className="text-[#A0A0A0]">Phone</Label><Input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="bg-[#1A1A1A] border-[#2A2A2A] text-white" /></div>
          </CardContent>
        </Card>

        <Card className="bg-[#242424] border-[#2A2A2A] mb-6">
          <CardHeader><CardTitle className="text-white flex items-center gap-2"><Building className="w-5 h-5 text-blue-400" />Company Info</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><Label className="text-[#A0A0A0]">Company</Label><Input value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} className="bg-[#1A1A1A] border-[#2A2A2A] text-white" /></div>
            <div><Label className="text-[#A0A0A0]">Address</Label><Input value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} className="bg-[#1A1A1A] border-[#2A2A2A] text-white" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label className="text-[#A0A0A0]">City</Label><Input value={profile.city} onChange={(e) => setProfile({ ...profile, city: e.target.value })} className="bg-[#1A1A1A] border-[#2A2A2A] text-white" /></div>
              <div><Label className="text-[#A0A0A0]">Country</Label><Input value={profile.country} onChange={(e) => setProfile({ ...profile, country: e.target.value })} className="bg-[#1A1A1A] border-[#2A2A2A] text-white" /></div>
            </div>
          </CardContent>
        </Card>

        {error && <div className="bg-red-400/10 border border-red-400/20 text-red-400 px-4 py-3 rounded-lg mb-6">{error}</div>}
        {success && <div className="bg-green-400/10 border border-green-400/20 text-green-400 px-4 py-3 rounded-lg mb-6">Profile updated!</div>}

        <Button type="submit" disabled={saving} className="bg-purple-600 hover:bg-purple-700">{saving ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Saving...</> : <><Save className="w-4 h-4 mr-2" />Save Changes</>}</Button>
      </form>
    </div>
  );
}