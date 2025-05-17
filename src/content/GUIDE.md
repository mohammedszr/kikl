# Content Editing Guide

## File Structure

```
src/content/
├── pages/           # Static pages (home, about, etc.)
├── resources/       # Learning materials and guides
└── GUIDE.md        # This guide
```

## Creating Content

### 1. File Format
All content files should be in Markdown format (`.md`) with YAML frontmatter.

Example:
```markdown
---
title: "Your Title Here"
description: "A brief description"
keywords: "keyword1, keyword2, keyword3"
level: "beginner"      # Optional: beginner, intermediate, advanced
category: "category"   # Optional: fundamentals, tutorials, guides
---

# Main Title

Your content here...
```

### 2. Adding New Content

1. Choose the appropriate directory (`pages` or `resources`)
2. Create a new `.md` file
3. Add the required frontmatter
4. Write your content in Markdown

### 3. Editing Content

1. Find the relevant `.md` file
2. Edit the content using any text editor
3. Keep the frontmatter structure intact
4. Save and commit changes

### 4. Content Guidelines

- Use clear, simple language
- Break content into sections
- Use headings (##, ###) for structure
- Include practical examples
- Keep paragraphs short
- Use lists for better readability

### 5. Images

1. Add images to `/public/images/`
2. Reference them in markdown:
   ```markdown
   ![Alt text](/images/your-image.jpg)
   ```

### 6. Keywords

Important keywords for SEO:
- AI education
- Technology literacy
- Digital skills
- Community learning
- AI workshops
- Tech empowerment
- Ethical AI
- AI basics
- Machine learning
- Digital transformation
