import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface ContentMeta {
  title: string;
  description: string;
  keywords: string;
  level?: string;
  category?: string;
}

export interface ContentItem {
  slug: string;
  content: string;
  meta: ContentMeta;
}

export async function getContentBySlug(type: 'pages' | 'resources', slug: string): Promise<ContentItem> {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    meta: data as ContentMeta,
  };
}

export async function getAllContent(type: 'pages' | 'resources'): Promise<ContentItem[]> {
  const fullPath = path.join(contentDirectory, type);
  const files = fs.readdirSync(fullPath);

  const content = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(path.join(fullPath, file), 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        meta: data as ContentMeta,
      };
    });

  return content;
}

export async function getResourcesByCategory(category: string): Promise<ContentItem[]> {
  const resources = await getAllContent('resources');
  return resources.filter((resource) => resource.meta.category === category);
}

export async function getResourcesByLevel(level: string): Promise<ContentItem[]> {
  const resources = await getAllContent('resources');
  return resources.filter((resource) => resource.meta.level === level);
}
