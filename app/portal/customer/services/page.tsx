'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, CheckCircle, Loader2, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ServiceRequest {
    _id: string;
    requestNumber: string;
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

const statusLabels: Record<string, string> = {
    pending_review: 'Pending Review',
    quoted: 'Awaiting Approval',
    approved: 'Approved',
    in_progress: 'In Progress',
    completed: 'Completed',
    cancelled: 'Cancelled',
};

export default function CustomerServicesPage() {
    const { token } = useAuth();
    const [requests, setRequests] = useState<ServiceRequest[]>([]);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gaugon-website.onrender.com';

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const res = await fetch(`${API_URL}/api/services/my-requests`, {
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

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">My Services</h1>
                    <p className="text-[#A0A0A0]">Track your service requests</p>
                </div>
                <Link href="/portal/customer/services/new">
                    <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="h-4 w-4 mr-2" />
                        New Request
                    </Button>
                </Link>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            ) : requests.length === 0 ? (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardContent className="py-12 text-center">
                        <FileText className="h-12 w-12 text-[#A0A0A0] mx-auto mb-4" />
                        <p className="text-[#A0A0A0] mb-4">No service requests yet.</p>
                        <Link href="/portal/customer/services/new">
                            <Button className="bg-primary hover:bg-primary/90">
                                Submit Your First Request
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {requests.map((request) => (
                        <Card key={request._id} className="bg-[#242424] border-[#2A2A2A]">
                            <CardContent className="py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-white font-mono font-semibold">
                                                {request.requestNumber}
                                            </span>
                                            <Badge className={`${statusColors[request.status]} text-white`}>
                                                {statusLabels[request.status] || request.status}
                                            </Badge>
                                        </div>
                                        <p className="text-[#A0A0A0] text-sm mb-2">
                                            {request.serviceType.replace('_', ' ').toUpperCase()}
                                        </p>
                                        <p className="text-white text-sm line-clamp-2">{request.description}</p>
                                    </div>

                                    <div className="text-right ml-4">
                                        {request.quotedPrice !== undefined && (
                                            <p className="text-primary font-bold text-lg mb-2">
                                                ${request.quotedPrice.toFixed(2)}
                                            </p>
                                        )}

                                        {/* Progress Bar */}
                                        <div className="w-32 h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all"
                                                style={{ width: `${request.progressPercent}%` }}
                                            />
                                        </div>
                                        <p className="text-[#A0A0A0] text-xs mt-1">{request.progressPercent}% Complete</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2A2A2A]">
                                    <span className="text-[#A0A0A0] text-xs">
                                        Submitted: {new Date(request.createdAt).toLocaleDateString()}
                                    </span>
                                    <Link href={`/portal/customer/services/${request._id}`}>
                                        <Button variant="ghost" size="sm">
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
