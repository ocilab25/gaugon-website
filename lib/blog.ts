export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'ai-automation-trends-2025',
        title: 'Top AI Automation Trends to Watch in 2025',
        excerpt: 'Discover how agents, autonomous workflows, and generative AI are reshaping business operations.',
        date: 'Dec 12, 2025',
        category: 'Strategy',
        readTime: '5 min read',
    },
    {
        slug: 'reduce-customer-churn-automation',
        title: 'How to Reduce Customer Churn with Automated Onboarding',
        excerpt: 'Learn the secrets to keeping customers engaged from day one using smart CRM triggers.',
        date: 'Nov 28, 2025',
        category: 'Growth',
        readTime: '4 min read',
    },
    {
        slug: 'human-in-the-loop-workflows',
        title: 'Why "Human-in-the-Loop" is Critical for AI Success',
        excerpt: 'Automation shouldn’t replace humans—it should empower them. Here is how to strike the balance.',
        date: 'Nov 15, 2025',
        category: 'Operations',
        readTime: '6 min read',
    },
    {
        slug: 'roi-of-automation',
        title: 'Calculating the True ROI of Business Automation',
        excerpt: 'Beyond time saved: How to measure accuracy, employee satisfaction, and scalability gains.',
        date: 'Oct 30, 2025',
        category: 'Analytics',
        readTime: '7 min read',
    },
];
