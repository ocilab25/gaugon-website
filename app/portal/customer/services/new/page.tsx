'use client';

import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Loader2, Briefcase, Code, Plug, Headphones, Wrench, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const serviceTypes = [
    { value: 'consultation', label: 'Consultation', icon: Briefcase, description: 'Get expert advice on your automation needs' },
    { value: 'custom_development', label: 'Custom Development', icon: Code, description: 'Build a custom solution for your business' },
    { value: 'integration', label: 'Integration', icon: Plug, description: 'Connect your existing systems' },
    { value: 'support', label: 'Support', icon: Headphones, description: 'Get help with existing solutions' },
    { value: 'maintenance', label: 'Maintenance', icon: Wrench, description: 'Keep your systems running smoothly' },
    { value: 'other', label: 'Other', icon: HelpCircle, description: 'Something else not listed here' },
];

export default function NewServiceRequestPage() {
    const { token } = useAuth();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [serviceType, setServiceType] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedValue, setEstimatedValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gaugon-website.onrender.com';

    const handleSubmit = async () => {
        if (!serviceType || description.length < 10) {
            setError('Please select a service type and provide a detailed description (min 10 characters)');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const res = await fetch(`${API_URL}/api/services/request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    serviceType,
                    description,
                    estimatedValue: estimatedValue ? parseFloat(estimatedValue) : undefined,
                }),
            });

            if (res.ok) {
                router.push('/portal/customer/services');
            } else {
                const data = await res.json();
                setError(data.error || 'Failed to submit request');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
                <Link href="/portal/customer/services">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-white">New Service Request</h1>
                    <p className="text-[#A0A0A0]">Tell us what you need</p>
                </div>
            </div>

            {step === 1 && (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardHeader>
                        <CardTitle className="text-white">What service do you need?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            {serviceTypes.map((type) => {
                                const Icon = type.icon;
                                const isSelected = serviceType === type.value;
                                return (
                                    <button
                                        key={type.value}
                                        onClick={() => {
                                            setServiceType(type.value);
                                            setStep(2);
                                        }}
                                        className={`p-4 rounded-lg border-2 transition-all text-left ${isSelected
                                                ? 'border-primary bg-primary/10'
                                                : 'border-[#2A2A2A] hover:border-[#3A3A3A] bg-[#1A1A1A]'
                                            }`}
                                    >
                                        <Icon className={`h-8 w-8 mb-3 ${isSelected ? 'text-primary' : 'text-[#A0A0A0]'}`} />
                                        <p className="text-white font-semibold">{type.label}</p>
                                        <p className="text-[#A0A0A0] text-sm mt-1">{type.description}</p>
                                    </button>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            )}

            {step === 2 && (
                <Card className="bg-[#242424] border-[#2A2A2A]">
                    <CardHeader>
                        <CardTitle className="text-white">Describe Your Needs</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-4 p-3 bg-[#1A1A1A] rounded-lg">
                                {(() => {
                                    const selected = serviceTypes.find(t => t.value === serviceType);
                                    if (selected) {
                                        const Icon = selected.icon;
                                        return (
                                            <>
                                                <Icon className="h-5 w-5 text-primary" />
                                                <span className="text-white">{selected.label}</span>
                                                <button
                                                    onClick={() => setStep(1)}
                                                    className="ml-auto text-primary text-sm hover:underline"
                                                >
                                                    Change
                                                </button>
                                            </>
                                        );
                                    }
                                    return null;
                                })()}
                            </div>
                        </div>

                        <div>
                            <Label className="text-[#A0A0A0]">Description *</Label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={5}
                                className="w-full mt-1 px-3 py-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Please describe what you need in detail. The more context you provide, the better we can help you..."
                            />
                            <p className="text-[#A0A0A0] text-xs mt-1">
                                {description.length}/10 minimum characters
                            </p>
                        </div>

                        <div>
                            <Label className="text-[#A0A0A0]">Estimated Budget (Optional)</Label>
                            <Input
                                type="number"
                                value={estimatedValue}
                                onChange={(e) => setEstimatedValue(e.target.value)}
                                placeholder="e.g., 5000"
                                className="bg-[#1A1A1A] border-[#2A2A2A] text-white mt-1"
                            />
                            <p className="text-[#A0A0A0] text-xs mt-1">
                                This helps us understand your budget range
                            </p>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                                <p className="text-red-500 text-sm">{error}</p>
                            </div>
                        )}

                        <div className="flex gap-4">
                            <Button
                                variant="ghost"
                                onClick={() => setStep(1)}
                                disabled={loading}
                            >
                                Back
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={loading || description.length < 10}
                                className="flex-1 bg-primary hover:bg-primary/90"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Request'
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
