import { blogPosts, BlogPost } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 bg-white dark:bg-[#0F0F0F]">
            <article className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Articles
                    </Link>
                    <div className="flex gap-3 mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400 self-center">{post.readTime} • {post.date}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                        {post.excerpt}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>The Rise of Automation</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <blockquote>
                        "Automation is not about replacing people, but about freeing them to do what they do best."
                    </blockquote>
                    <p className="text-gray-600 dark:text-gray-300">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </article>
        </main>
    );
}
