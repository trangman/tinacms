#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 TinaCMS Setup Helper\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');
  
  const envContent = `# TinaCMS Configuration
# Get these values from https://app.tina.io/
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
TINA_TOKEN=your-token-here

# Git Configuration (optional - for direct git integration)
GITHUB_TOKEN=your-github-token-here
GITHUB_REPO=trangman/tinacms
GITHUB_BRANCH=master
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file');
  console.log('📋 Please edit .env.local with your TinaCMS credentials\n');
} else {
  console.log('✅ .env.local file already exists\n');
}

console.log('📋 Next steps:');
console.log('1. Go to https://app.tina.io/ and create an account');
console.log('2. Connect your GitHub repository: trangman/tinacms');
console.log('3. Copy your Client ID and Token to .env.local');
console.log('4. Run: npm run tina-dev');
console.log('5. Visit: http://localhost:3000/admin');
console.log('\n📖 For detailed instructions, see TINACMS_SETUP.md');
