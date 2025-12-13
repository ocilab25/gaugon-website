'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Plus, Trash2, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface InvoiceItem {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

interface Customer {
    _id: string;
    email: string;
    profile: {
        firstName: string;
        lastName: string;
    };
}

export default function CreateInvoicePage() {
    const { user, token } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [customerId, setCustomerId] = useState('');
    const [items, setItems] = useState<InvoiceItem[]>([
        { description: '', quantity: 1, unitPrice: 0, total: 0 },
    ]);
    const [taxRate, setTaxRate] = useState(0);
    const [dueDate, setDueDate] = useState('');
    const [notes, setNotes] = useState('');

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gaugon-website.onrender.com';

    useEffect(() => {
        fetchCustomers();
        // Default due date: 30 days from now
        const defaultDue = new Date();
        defaultDue.setDate(defaultDue.getDate() + 30);
        setDueDate(defaultDue.toISOString().split('T')[0]);
    }, []);

    const fetchCustomers = async () => {
        try {
            const res = await fetch(`${API_URL}/api/admin/customers`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            setCustomers(data.customers || []);
        } catch (error) {
            console.error('Failed to fetch customers:', error);
        }
    };

    const addItem = () => {
        setItems([...items, { description: '', quantity: 1, unitPrice: 0, total: 0 }]);
    };

    const removeItem = (index: number) => {
        if (items.length > 1) {
            setItems(items.filter((_, i) => i !== index));
        }
    };

    const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
        const newItems = [...items];
        (newItems[index] as any)[field] = value;

        // Recalculate total
        if (field === 'quantity' || field === 'unitPrice') {
            newItems[index].total = newItems[index].quantity * newItems[index].unitPrice;
        }

        setItems(newItems);
    };

    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!customerId || items.some(item => !item.description)) {
            alert('Please fill in all required fields');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/invoices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    customerId,
                    items,
                    taxRate,
                    dueDate,
                    notes,
                }),
            });

            if (res.ok) {
                router.push('/portal/admin/invoices');
            } else {
                const data = await res.json();
                alert(data.error || 'Failed to create invoice');
            }
        } catch (error) {
            console.error('Failed to create invoice:', error);
        } finally {
            setLoading(false);
        }
    };

    if (user?.role !== 'admin') {
        return <div className="text-white">Access denied</div>;
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/portal/admin/invoices">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-white">Create Invoice</h1>
                    <p className="text-[#A0A0A0]">Generate a new invoice for a customer</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardHeader>
                        <CardTitle className="text-white">Customer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <Label className="text-[#A0A0A0]">Select Customer *</Label>
                                <select
                                    value={customerId}
                                    onChange={(e) => setCustomerId(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                >
                                    <option value="">Select a customer...</option>
                                    {customers.map((customer) => (
                                        <option key={customer._id} value={customer._id}>
                                            {customer.profile.firstName} {customer.profile.lastName} ({customer.email})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-white">Line Items</CardTitle>
                        <Button type="button" variant="ghost" size="sm" onClick={addItem}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Item
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div key={index} className="grid grid-cols-12 gap-4 items-end">
                                    <div className="col-span-5">
                                        <Label className="text-[#A0A0A0]">Description</Label>
                                        <Input
                                            value={item.description}
                                            onChange={(e) => updateItem(index, 'description', e.target.value)}
                                            placeholder="Service description..."
                                            className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Label className="text-[#A0A0A0]">Qty</Label>
                                        <Input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                                            className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Label className="text-[#A0A0A0]">Unit Price</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={item.unitPrice}
                                            onChange={(e) => updateItem(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                                            className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Label className="text-[#A0A0A0]">Total</Label>
                                        <div className="px-3 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-md text-white">
                                            ${item.total.toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeItem(index)}
                                            disabled={items.length === 1}
                                        >
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-6">
                    <Card className="bg-[#242424] border-[#2A2A2A]">
                        <CardHeader>
                            <CardTitle className="text-white">Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label className="text-[#A0A0A0]">Tax Rate (%)</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="0.1"
                                    value={taxRate}
                                    onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                                    className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
                                />
                            </div>
                            <div>
                                <Label className="text-[#A0A0A0]">Due Date *</Label>
                                <Input
                                    type="date"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                    className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
                                    required
                                />
                            </div>
                            <div>
                                <Label className="text-[#A0A0A0]">Notes</Label>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    rows={3}
                                    className="w-full mt-1 px-3 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Additional notes..."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#242424] border-[#2A2A2A]">
                        <CardHeader>
                            <CardTitle className="text-white">Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-[#A0A0A0]">
                                <span>Subtotal:</span>
                                <span className="text-white">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-[#A0A0A0]">
                                <span>Tax ({taxRate}%):</span>
                                <span className="text-white">${taxAmount.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-[#2A2A2A] pt-4 flex justify-between">
                                <span className="text-white font-bold">Total:</span>
                                <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-end gap-4">
                    <Link href="/portal/admin/invoices">
                        <Button type="button" variant="ghost">
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90">
                        {loading ? (
                            <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Creating...
                            </>
                        ) : (
                            'Create Invoice'
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
