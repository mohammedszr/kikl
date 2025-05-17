import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className }) => {
  return (
    <ReactMarkdown
      className={cn(
        'prose prose-green dark:prose-invert max-w-none',
        'prose-headings:text-green-900 dark:prose-headings:text-green-100',
        'prose-p:text-gray-700 dark:prose-p:text-gray-300',
        'prose-strong:text-green-700 dark:prose-strong:text-green-300',
        'prose-ul:text-gray-700 dark:prose-ul:text-gray-300',
        'prose-li:marker:text-green-500',
        className
      )}
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-green-700 dark:text-green-300">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-green-600 dark:text-green-400">
            {children}
          </h3>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 underline"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
