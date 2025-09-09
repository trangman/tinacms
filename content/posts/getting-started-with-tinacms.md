---
title: "Getting Started with TinaCMS - A Complete Guide"
excerpt: "Learn how to set up and use TinaCMS for your Next.js blog. This comprehensive guide covers everything from installation to content management."
heroImage: ""
publishedAt: "2024-01-25T10:00:00.000Z"
author: "TinaCMS Team"
category: "Technology"
status: "published"
---

# Getting Started with TinaCMS

Welcome to your new TinaCMS-powered blog! This guide will help you understand how to create and manage content effectively.

## What is TinaCMS?

TinaCMS is a Git-based headless CMS that allows you to edit content directly in your repository. It provides a visual interface for managing your blog posts, categories, and other content.

## Key Features

- **Visual Content Editor** - Edit content with a rich text interface
- **Git Integration** - All changes are saved directly to your repository
- **Real-time Preview** - See changes as you make them
- **Approval Workflow** - Control content publishing with status management
- **Category Organization** - Organize posts by topics
- **Hero Images** - Add visual appeal to your posts

## Content Management Workflow

### Post Statuses

1. **Draft** - Initial creation, not visible to public
2. **Pending Review** - Submitted for approval
3. **Approved** - Ready to publish
4. **Published** - Live on your blog

### Creating New Posts

1. **Via TinaCMS Editor** (when configured):
   - Visit `/admin` in your browser
   - Click "Create New Post"
   - Use the visual editor to write content
   - Set status and publish

2. **Via Markdown Files** (current method):
   - Create new `.md` files in `content/posts/`
   - Follow the frontmatter format
   - Commit and push changes

## Frontmatter Format

Each post needs this structure at the top:

```yaml
---
title: "Your Post Title"
excerpt: "Brief description of your post"
heroImage: "path/to/image.jpg"
publishedAt: "2024-01-25T10:00:00.000Z"
author: "Your Name"
category: "Technology"
status: "published"
---
```

## Categories

Your blog comes with pre-configured categories:

- **Technology** - Tech news, tutorials, and insights
- **Lifestyle** - Personal stories and life tips
- **Business** - Professional content and advice
- **Health** - Wellness and fitness topics
- **Travel** - Adventure and destination guides
- **Food** - Recipes and culinary experiences
- **Sports** - Athletic content and updates
- **Entertainment** - Movies, music, and culture

## Next Steps

1. **Create your first post** using the markdown method
2. **Set up TinaCMS** for visual editing (see TINACMS_SETUP.md)
3. **Customize categories** to match your content needs
4. **Add hero images** to make posts more engaging
5. **Set up approval workflow** for team collaboration

## Tips for Success

- **Write engaging excerpts** - These appear in post previews
- **Use descriptive titles** - Help readers understand your content
- **Add hero images** - Visual content gets more engagement
- **Organize with categories** - Help readers find related content
- **Use the approval workflow** - Maintain content quality

Happy blogging! 🎉
