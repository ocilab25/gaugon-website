'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Invoice {
    _id: string;
    invoiceNumber: string;
    total: number;
    status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
    dueDate: string;
    createdAt: string;
}

const statusColors: Record<string, string> = {
    draft: 'bg-gray-500',
    sent: 'bg-blue-500',
    paid: 'bg-green-500',
    overdue: 'bg-red-500',
    cancelled: 'bg-gray-400',
};

export default function CustomerInvoicesPage() {
    const { user, token } = useAuth();
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [downloadLoading, setDownloadLoading] = useState<string | null>(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gaugon-website.onrender.com';

    useEffect(() => {
        if (user?._id) {
            fetchInvoices();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const fetchInvoices = async () => {
        try {
            const res = await fetch(`${API_URL}/api/invoices/customer/${user?._id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            setInvoices(data.invoices || []);
        } catch (error) {
            console.error('Failed to fetch invoices:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPDF = async (invoice: Invoice) => {
        setDownloadLoading(invoice._id);
        try {
            const res = await fetch(`${API_URL}/api/invoices/${invoice._id}/pdf`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Invoice-${invoice.invoiceNumber}.pdf`;
            a.click();
        } catch (error) {
            console.error('Failed to download PDF:', error);
        } finally {
            setDownloadLoading(null);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Invoices</h1>
                <p className="text-[#A0A0A0]">View and download your invoices</p>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            ) : invoices.length === 0 ? (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardContent className="py-12 text-center">
                        <FileText className="h-12 w-12 text-[#A0A0A0] mx-auto mb-4" />
                        <p className="text-[#A0A0A0]">No invoices found.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {invoices.map((invoice) => (
                        <Card key={invoice._id} className="bg-[#242424] border-[#2A2A2A]">
                            <CardContent className="py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <FileText className="h-8 w-8 text-primary" />
                                        <div>
                                            <p className="text-white font-mono font-semibold">{invoice.invoiceNumber}</p>
                                            <p className="text-[#A0A0A0] text-sm">
                                                Due: {new Date(invoice.dueDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <Badge className={`${statusColors[invoice.status]} text-white`}>
                                            {invoice.status.toUpperCase()}
                                        </Badge>
                                        <p className="text-white font-bold text-lg">${invoice.total.toFixed(2)}</p>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleDownloadPDF(invoice)}
                                            disabled={downloadLoading === invoice._id}
                                        >
                                            {downloadLoading === invoice._id ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <>
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Download
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
