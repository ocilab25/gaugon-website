'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Loader2, DollarSign, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServiceRequest {
    _id: string;
    requestNumber: string;
    customerName: string;
    customerEmail: string;
    serviceType: string;
    description: string;
    status: string;
    quotedPrice?: number;
    progressPercent: number;
    createdAt: string;
}

const statusColors: Record<string, string> = {
    pending_review: 'bg-yellow-500',
    quoted: 'bg-blue-500',
    approved: 'bg-purple-500',
    in_progress: 'bg-cyan-500',
    completed: 'bg-green-500',
    cancelled: 'bg-gray-500',
};

export default function AdminServicesPage() {
    const { user, token } = useAuth();
    const [requests, setRequests] = useState<ServiceRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [quoteModal, setQuoteModal] = useState<{ id: string; show: boolean; price: string }>({ id: '', show: false, price: '' });
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gaugon-website.onrender.com';

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const res = await fetch(`${API_URL}/api/services/admin/all`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            setRequests(data.requests || []);
        } catch (error) {
            console.error('Failed to fetch requests:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSetQuote = async () => {
        if (!quoteModal.price) return;
        setActionLoading(quoteModal.id);

        try {
            const res = await fetch(`${API_URL}/api/services/admin/${quoteModal.id}/quote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ quotedPrice: parseFloat(quoteModal.price) }),
            });

            if (res.ok) {
                await fetchRequests();
                setQuoteModal({ id: '', show: false, price: '' });
            }
        } catch (error) {
            console.error('Failed to set quote:', error);
        } finally {
            setActionLoading(null);
        }
    };

    const handleUpdateStatus = async (id: string, status: string, progressPercent?: number) => {
        setActionLoading(id);

        try {
            const res = await fetch(`${API_URL}/api/services/admin/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status, progressPercent }),
            });

            if (res.ok) {
                await fetchRequests();
            }
        } catch (error) {
            console.error('Failed to update status:', error);
        } finally {
            setActionLoading(null);
        }
    };

    if (user?.role !== 'admin') {
        return <div className="text-white">Access denied</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Service Requests</h1>
                <p className="text-[#A0A0A0]">Manage customer service requests</p>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            ) : requests.length === 0 ? (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardContent className="py-12 text-center">
                        <FileText className="h-12 w-12 text-[#A0A0A0] mx-auto mb-4" />
                        <p className="text-[#A0A0A0]">No service requests yet.</p>
                    </CardContent>
                </Card>
            ) : (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardHeader>
                        <CardTitle className="text-white">All Requests ({requests.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#2A2A2A]">
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Request #</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Customer</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Type</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Status</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Quote</th>
                                        <th className="text-right py-3 px-4 text-[#A0A0A0] font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((request) => (
                                        <tr key={request._id} className="border-b border-[#2A2A2A] hover:bg-[#2A2A2A]/50">
                                            <td className="py-3 px-4 text-white font-mono">{request.requestNumber}</td>
                                            <td className="py-3 px-4">
                                                <div className="text-white">{request.customerName}</div>
                                                <div className="text-[#A0A0A0] text-xs">{request.customerEmail}</div>
                                            </td>
                                            <td className="py-3 px-4 text-white">
                                                {request.serviceType.replace('_', ' ')}
                                            </td>
                                            <td className="py-3 px-4">
                                                <Badge className={`${statusColors[request.status]} text-white`}>
                                                    {request.status.replace('_', ' ').toUpperCase()}
                                                </Badge>
                                            </td>
                                            <td className="py-3 px-4 text-white font-semibold">
                                                {request.quotedPrice ? `$${request.quotedPrice.toFixed(2)}` : '-'}
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex justify-end gap-2">
                                                    {request.status === 'pending_review' && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => setQuoteModal({ id: request._id, show: true, price: '' })}
                                                            disabled={actionLoading === request._id}
                                                            title="Set Quote"
                                                        >
                                                            <DollarSign className="h-4 w-4 text-green-500" />
                                                        </Button>
                                                    )}
                                                    {request.status === 'approved' && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => handleUpdateStatus(request._id, 'in_progress', 50)}
                                                            disabled={actionLoading === request._id}
                                                            title="Start Work"
                                                        >
                                                            <Clock className="h-4 w-4 text-cyan-500" />
                                                        </Button>
                                                    )}
                                                    {request.status === 'in_progress' && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => handleUpdateStatus(request._id, 'completed', 100)}
                                                            disabled={actionLoading === request._id}
                                                            title="Mark Complete"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                                        </Button>
                                                    )}
                                                    {['pending_review', 'quoted'].includes(request.status) && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => handleUpdateStatus(request._id, 'cancelled', 0)}
                                                            disabled={actionLoading === request._id}
                                                            title="Cancel"
                                                        >
                                                            <XCircle className="h-4 w-4 text-red-500" />
                                                        </Button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Quote Modal */}
            {quoteModal.show && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <Card className="w-full max-w-md bg-[#242424] border-[#2A2A2A]">
                        <CardHeader>
                            <CardTitle className="text-white">Set Quote</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-[#A0A0A0] text-sm">Quote Amount ($)</label>
                                <Input
                                    type="number"
                                    value={quoteModal.price}
                                    onChange={(e) => setQuoteModal({ ...quoteModal, price: e.target.value })}
                                    placeholder="e.g., 1500"
                                    className="bg-[#1A1A1A] border-[#2A2A2A] text-white mt-1"
                                />
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    variant="ghost"
                                    onClick={() => setQuoteModal({ id: '', show: false, price: '' })}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleSetQuote}
                                    disabled={!quoteModal.price || actionLoading === quoteModal.id}
                                    className="flex-1 bg-primary hover:bg-primary/90"
                                >
                                    {actionLoading === quoteModal.id ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        'Send Quote'
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
