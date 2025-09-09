# TinaCMS Blog

A modern blog built with Next.js and TinaCMS featuring git-based content management, post approval workflow, categories, and hero images.

## Features

- **Next.js 15** with App Router and TypeScript
- **TinaCMS** for content management with git-based storage
- **Post Approval Workflow** - Draft → Pending → Approved → Published
- **Categories** with custom styling and organization
- **Hero Images** for posts and categories
- **Responsive Design** with Tailwind CSS
- **Admin Dashboard** for managing post approvals
- **Git Integration** for version control of content

## Getting Started

### Prerequisites

- Node.js 18+ 
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tina
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id
TINA_TOKEN=your-token
```

4. Start the development server:
```bash
npm run dev
```

5. Start TinaCMS in development mode:
```bash
npm run tina-dev
```

### Accessing the Admin

- **Content Editor**: Visit `/admin` to access the TinaCMS content editor
- **Admin Dashboard**: Visit `/admin/dashboard` to manage post approvals
- **Blog**: Visit `/` to see the public blog

## Content Management

### Creating Posts

1. Go to `/admin`
2. Click "Create New" → "Post"
3. Fill in the post details:
   - Title (required)
   - Excerpt
   - Hero Image
   - Author
   - Category
   - Status (Draft, Pending Review, Approved, Published)
   - Content (rich text)

### Post Approval Workflow

1. **Draft**: Initial post creation
2. **Pending Review**: Submitted for approval
3. **Approved**: Approved by admin, ready to publish
4. **Published**: Live on the blog

### Managing Categories

Categories are managed in `/admin` under the "Categories" collection. Each category can have:
- Name
- Description
- Image
- Color (for styling)

## Project Structure

```
├── content/
│   ├── posts/          # Blog posts (markdown files)
│   └── categories/     # Category definitions
├── public/
│   └── uploads/        # Media files
├── src/
│   ├── app/
│   │   ├── admin/      # Admin pages
│   │   ├── posts/      # Post pages
│   │   └── providers/  # React providers
│   ├── components/     # React components
│   ├── lib/           # Utility functions
│   └── types/         # TypeScript types
├── tina/
│   └── config.ts      # TinaCMS configuration
└── package.json
```

## Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run tina-dev` - Start TinaCMS development server
- `npm run tina-build` - Build TinaCMS
- `npm run tina-audit` - Audit TinaCMS configuration

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred platform (Vercel, Netlify, etc.)

3. Set up environment variables in your deployment platform

## Git Integration

TinaCMS uses git for content storage, so all content changes are automatically versioned. Make sure to:

1. Initialize a git repository
2. Set up remote repository
3. Configure TinaCMS with proper git credentials

## Customization

### Adding New Fields

Edit `tina/config.ts` to add new fields to posts or categories.

### Styling

The project uses Tailwind CSS. Modify `src/app/globals.css` for custom styles.

### Content Schema

The content schema is defined in `tina/config.ts`. You can modify field types, validation, and UI components here.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.