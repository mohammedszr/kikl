import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import '../globals.css';
import Navigation from '@/components/navigation';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KI-KL | AI Education Non-Profit',
  description: 'Democratizing AI education and technology understanding for diverse communities',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
