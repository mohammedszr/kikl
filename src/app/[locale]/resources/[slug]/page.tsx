import { getContentBySlug } from '@/lib/content';
import MarkdownContent from '@/components/markdown-content';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resource = await getContentBySlug('resources', params.slug);
  return {
    title: `${resource.meta.title} | KI-KL e.V.`,
    description: resource.meta.description,
    keywords: resource.meta.keywords,
  };
}

export default async function ResourcePage({ params }: Props) {
  const resource = await getContentBySlug('resources', params.slug);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {resource.meta.level && (
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 mb-4">
                {resource.meta.level}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {resource.meta.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {resource.meta.description}
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <MarkdownContent content={resource.content} />
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="/resources"
              className="inline-block px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              ← Back to Resources
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
