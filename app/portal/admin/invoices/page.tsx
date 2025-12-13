'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Download, Mail, CheckCircle, FileText, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Invoice {
    _id: string;
    invoiceNumber: string;
    customerName: string;
    customerEmail: string;
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

export default function InvoicesPage() {
    const { user, token } = useAuth();
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gaugon-website.onrender.com';

    useEffect(() => {
        fetchInvoices();
    }, []);

    const fetchInvoices = async () => {
        try {
            const res = await fetch(`${API_URL}/api/invoices`, {
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
        setActionLoading(invoice._id);
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
            setActionLoading(null);
        }
    };

    const handleSendEmail = async (invoice: Invoice) => {
        setActionLoading(invoice._id);
        try {
            const res = await fetch(`${API_URL}/api/invoices/${invoice._id}/send`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
                await fetchInvoices(); // Refresh to show updated status
                alert('Invoice sent successfully!');
            }
        } catch (error) {
            console.error('Failed to send invoice:', error);
        } finally {
            setActionLoading(null);
        }
    };

    const handleMarkPaid = async (invoice: Invoice) => {
        setActionLoading(invoice._id);
        try {
            const res = await fetch(`${API_URL}/api/invoices/${invoice._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status: 'paid' }),
            });
            if (res.ok) {
                await fetchInvoices();
            }
        } catch (error) {
            console.error('Failed to update invoice:', error);
        } finally {
            setActionLoading(null);
        }
    };

    if (user?.role !== 'admin') {
        return <div className="text-white">Access denied</div>;
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Invoices</h1>
                    <p className="text-[#A0A0A0]">Manage customer invoices</p>
                </div>
                <Link href="/portal/admin/invoices/create">
                    <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Invoice
                    </Button>
                </Link>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            ) : invoices.length === 0 ? (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardContent className="py-12 text-center">
                        <FileText className="h-12 w-12 text-[#A0A0A0] mx-auto mb-4" />
                        <p className="text-[#A0A0A0]">No invoices yet. Create your first invoice!</p>
                    </CardContent>
                </Card>
            ) : (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardHeader>
                        <CardTitle className="text-white">All Invoices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#2A2A2A]">
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Invoice #</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Customer</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Amount</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Status</th>
                                        <th className="text-left py-3 px-4 text-[#A0A0A0] font-medium">Due Date</th>
                                        <th className="text-right py-3 px-4 text-[#A0A0A0] font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((invoice) => (
                                        <tr key={invoice._id} className="border-b border-[#2A2A2A] hover:bg-[#2A2A2A]/50">
                                            <td className="py-3 px-4 text-white font-mono">{invoice.invoiceNumber}</td>
                                            <td className="py-3 px-4">
                                                <div className="text-white">{invoice.customerName}</div>
                                                <div className="text-[#A0A0A0] text-xs">{invoice.customerEmail}</div>
                                            </td>
                                            <td className="py-3 px-4 text-white font-semibold">
                                                ${invoice.total.toFixed(2)}
                                            </td>
                                            <td className="py-3 px-4">
                                                <Badge className={`${statusColors[invoice.status]} text-white`}>
                                                    {invoice.status.toUpperCase()}
                                                </Badge>
                                            </td>
                                            <td className="py-3 px-4 text-[#A0A0A0]">
                                                {new Date(invoice.dueDate).toLocaleDateString()}
                                            </td>
                                            <td className="py-3 px-4">
                                                <div className="flex justify-end gap-2">
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={() => handleDownloadPDF(invoice)}
                                                        disabled={actionLoading === invoice._id}
                                                    >
                                                        {actionLoading === invoice._id ? (
                                                            <Loader2 className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <Download className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                    {invoice.status === 'draft' && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => handleSendEmail(invoice)}
                                                            disabled={actionLoading === invoice._id}
                                                        >
                                                            <Mail className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                    {invoice.status !== 'paid' && invoice.status !== 'cancelled' && (
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => handleMarkPaid(invoice)}
                                                            disabled={actionLoading === invoice._id}
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-green-500" />
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
        </div>
    );
}
