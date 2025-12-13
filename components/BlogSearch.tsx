'use client';

import { useState } from 'react';
import { BlogPost } from '@/lib/blog';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
    const [query, setQuery] = useState('');

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 bg-white/50 dark:bg-white/5 border-gray-200 dark:border-gray-800 backdrop-blur-sm focus:ring-primary"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <Card className="h-full glass-card hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 dark:bg-[#1A1A1A] dark:border-[#2A2A2A]">
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                            {post.category}
                                        </Badge>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors dark:text-gray-100">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-gray-400 dark:text-gray-500">
                                        {post.date}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read Article <span aria-hidden="true">&rarr;</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
                        No articles found matching "{query}"
                    </div>
                )}
            </div>
        </div>
    );
}
