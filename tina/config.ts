import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '1214814c-57ba-4752-b985-8d7fcd778367',
  token: process.env.TINA_TOKEN || '5ed2cae1079f8a59f5904f53fe0aeefc2313dc8f',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'heroImage',
            label: 'Hero Image',
          },
          {
            type: 'datetime',
            name: 'publishedAt',
            label: 'Published At',
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            options: [
              'Technology',
              'Lifestyle',
              'Business',
              'Health',
              'Travel',
              'Food',
              'Sports',
              'Entertainment',
            ],
            required: true,
          },
          {
            type: 'string',
            name: 'status',
            label: 'Status',
            options: [
              { label: 'Draft', value: 'draft' },
              { label: 'Pending Review', value: 'pending' },
              { label: 'Approved', value: 'approved' },
              { label: 'Published', value: 'published' },
            ],
            required: true,
            defaultValue: 'draft',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'category',
        label: 'Categories',
        path: 'content/categories',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'image',
            name: 'image',
            label: 'Category Image',
          },
          {
            type: 'string',
            name: 'color',
            label: 'Color',
            description: 'Hex color code for category styling',
          },
        ],
      },
    ],
  },
})
