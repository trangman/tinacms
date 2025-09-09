# TinaCMS Setup Guide

This guide will help you set up TinaCMS for your blog so you can use the visual content editor.

## Step 1: Create TinaCMS Account

1. Go to [https://app.tina.io/](https://app.tina.io/)
2. Sign up for a free account
3. Create a new project
4. Connect your GitHub repository: `trangman/tinacms`

## Step 2: Get Your Credentials

After connecting your repo, TinaCMS will provide you with:
- **Client ID** (starts with something like `abc123...`)
- **Token** (starts with something like `def456...`)

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# TinaCMS Configuration
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
TINA_TOKEN=your-token-here

# Git Configuration (optional - for direct git integration)
GITHUB_TOKEN=your-github-token-here
GITHUB_REPO=trangman/tinacms
GITHUB_BRANCH=master
```

Replace `your-client-id-here` and `your-token-here` with your actual TinaCMS credentials.

## Step 4: Update TinaCMS Configuration

Update `tina/config.ts` with your branch information:

```typescript
import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  // ... rest of your config
})
```

## Step 5: Start TinaCMS Development Server

Run the TinaCMS development server alongside your Next.js app:

```bash
# Terminal 1: Start Next.js
npm run dev

# Terminal 2: Start TinaCMS
npm run tina-dev
```

## Step 6: Access the Visual Editor

1. Visit `http://localhost:3000/admin`
2. You should now see the full TinaCMS visual editor
3. Create and edit posts with the rich text editor
4. Manage categories and content visually

## Troubleshooting

### If you see "TinaCMS Setup Required" message:
- Make sure you've created the `.env.local` file
- Verify your credentials are correct
- Restart both development servers

### If you get authentication errors:
- Double-check your Client ID and Token
- Ensure your GitHub repo is connected in TinaCMS dashboard
- Make sure the branch name matches your repository

### If content doesn't save:
- Check your GitHub token permissions
- Verify the repository name and branch
- Ensure you have write access to the repository

## Alternative: Direct File Editing

If you prefer to edit content directly without TinaCMS:
1. Edit markdown files in `content/posts/` directory
2. Edit category files in `content/categories/` directory
3. Use any markdown editor (VS Code, Typora, etc.)
4. Commit and push changes to GitHub

## Production Deployment

For production deployment:
1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Deploy your Next.js application
3. TinaCMS will work in production with the same credentials

## Need Help?

- TinaCMS Documentation: https://tina.io/docs/
- TinaCMS Community: https://github.com/tinacms/tinacms/discussions
- This project's GitHub: https://github.com/trangman/tinacms
