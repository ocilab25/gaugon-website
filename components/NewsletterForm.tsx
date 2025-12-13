'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        try {
            // Updated to point to our secure backend proxy
            const apiUrl = process.env.NEXT_PUBLIC_API_URL
                ? `${process.env.NEXT_PUBLIC_API_URL}/api/forms/newsletter`
                : "https://gaugon-api.onrender.com/api/forms/newsletter";

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex items-center space-x-2 text-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Thanks for subscribing! We'll be in touch.</span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="relative max-w-sm">
            <div className="flex gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
                    required
                />
                <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-primary hover:bg-primary-dark"
                >
                    {status === 'loading' ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <ArrowRight className="h-4 w-4" />
                    )}
                    <span className="sr-only">Subscribe</span>
                </Button>
            </div>
            {status === 'error' && (
                <p className="text-red-400 text-xs mt-2 absolute -bottom-6 left-0">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}
