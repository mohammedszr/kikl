'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { Brain, Users, BookOpen, Lightbulb, Code, Globe } from 'lucide-react';
import Link from 'next/link';

const HomepageFeatures = [
  {
    icon: <Brain className="w-12 h-12 text-green-600" />,
    title: "AI Literacy",
    description: "Democratizing technology education for all",
    gradient: "from-green-100/50 to-emerald-200/30"
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: "Community Projects",
    description: "Collaborative innovation and social impact",
    gradient: "from-emerald-200/30 to-teal-200/30"
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-600" />,
    title: "Open Resources",
    description: "Free tools and learning materials",
    gradient: "from-teal-200/30 to-green-100/50"
  }
];

const TechFeatures = [
  {
    icon: <Lightbulb className="w-10 h-10 text-green-600" />,
    title: "Innovation Hub",
    description: "Explore cutting-edge AI applications"
  },
  {
    icon: <Code className="w-10 h-10 text-green-600" />,
    title: "Learning Path",
    description: "Structured educational resources"
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    title: "Global Community",
    description: "Connect with AI enthusiasts worldwide"
  }
];

export default function Home() {
  const t = useTranslations('hero');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/resources" className="btn-primary">
              {t('cta.primary')}
            </Link>
            <Link href="/about" className="btn-secondary">
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HomepageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-xl bg-gradient-to-br ${feature.gradient}`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TechFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
