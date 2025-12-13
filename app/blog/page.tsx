import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog';
import BlogSearch from '@/components/BlogSearch';

export const metadata: Metadata = {
    title: 'Blog | Gaugon - Insights & Strategy',
    description: 'Latest insights on AI automation, workflow optimization, and digital transformation.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 bg-gray-50/50 dark:bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Insights & <span className="text-primary">Strategies</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Deep dives into automation trends, success stories, and technical guides.
                    </p>
                </div>

                <BlogSearch posts={blogPosts} />
            </div>
        </main>
    );
}
