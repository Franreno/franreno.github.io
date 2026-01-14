import { notFound } from 'next/navigation';
import { features } from '@/lib/features';

export const metadata = {
  title: 'Blog | Personal Website',
  description: 'Thoughts, tutorials, and random musings',
};

const blogPosts = [
  {
    id: 1,
    title: 'Welcome to My Blog',
    date: '2024-01-15',
    excerpt: 'First post! Talking about why I decided to start blogging and what you can expect from this space.',
    tags: ['meta', 'introduction'],
  },
  {
    id: 2,
    title: 'Building with Next.js 16',
    date: '2024-02-03',
    excerpt: 'My experience working with the latest version of Next.js and the new features I\'m excited about.',
    tags: ['nextjs', 'react', 'webdev'],
  },
  {
    id: 3,
    title: 'Nostalgia and Web Design',
    date: '2024-02-20',
    excerpt: 'Why I love the simplicity of early 2000s web design and how it influences my work today.',
    tags: ['design', 'nostalgia', 'web'],
  },
];

export default function BlogPage() {
  // Check if blog feature is enabled
  if (!features.blog) {
    notFound();
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="py-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Blog
        </h1>
        <p className="text-xl text-muted max-w-2xl">
          Thoughts, tutorials, and insights from my journey in tech
        </p>
      </section>

      {/* Blog Posts */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="modern-card group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3 group-hover:text-accent-bright transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-muted uppercase tracking-wide">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>

            <p className="text-foreground text-lg mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href={`/blog/${post.id}`} className="clean-link text-sm font-semibold">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Archive Note */}
      <section className="modern-card text-center">
        <p className="text-muted">More posts coming soon... check back later!</p>
      </section>
    </div>
  );
}
