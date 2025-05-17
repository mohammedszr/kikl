import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | KI-KL e.V.',
  description: 'Learn about our mission, vision, and commitment to democratizing AI education.',
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {t('about.title')}
          </h1>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
              {t('mission.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('mission.description')}
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
              {t('vision.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('vision.description')}
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-700 dark:text-green-300">
            {t('values.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t.raw('values.items')).map(([key, value]: [string, any]) => (
              <div key={key} className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team & Ethics */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
              {t('about.team.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('about.team.description')}
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
              {t('about.ethics.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('about.ethics.description')}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
