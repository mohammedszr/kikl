import { Metadata } from 'next';
import ContactForm from '@/components/contact-form';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Contact Us | KI-KL e.V.',
  description: 'Get in touch with us for workshops, volunteering, or general inquiries.',
};

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
            {t('description')}
          </p>

          <ContactForm />

          <div className="mt-12 glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
              {t('other-ways')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
                  {t('email-us')}
                </h3>
                <a
                  href="mailto:contact@ki-kl.org"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                >
                  contact@ki-kl.org
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
                  {t('follow-us')}
                </h3>
                <div className="space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
