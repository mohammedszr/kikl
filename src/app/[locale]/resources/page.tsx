import { getAllContent } from '@/lib/content';
import MarkdownContent from '@/components/markdown-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | KI-KL e.V.',
  description: 'Free AI learning resources and tutorials for everyone.',
};

export default async function ResourcesPage() {
  const resources = await getAllContent('resources');

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Learning Resources
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.slug}
              className="glass-card p-8 rounded-xl hover:scale-102 transition-transform"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
                {resource.meta.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {resource.meta.description}
              </p>
              {resource.meta.level && (
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  {resource.meta.level}
                </span>
              )}
              <div className="mt-6">
                <MarkdownContent
                  content={resource.content.split('\n').slice(0, 3).join('\n')}
                  className="prose-sm"
                />
                <a
                  href={`/resources/${resource.slug}`}
                  className="inline-block mt-4 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
