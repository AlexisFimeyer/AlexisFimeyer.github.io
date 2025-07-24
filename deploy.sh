#!/bin/bash

# Deploy script for folio-v2 to GitHub Pages
echo "🚀 Starting deployment process..."

# Navigate to folio-v2 directory
cd folio-v2

# Install dependencies and build
echo "📦 Installing dependencies..."
yarn install

echo "🔨 Building project..."
yarn build

# Navigate back to root
cd ..

# Remove old files (keep important ones)
echo "🧹 Cleaning up old files..."
find . -maxdepth 1 -type f -name "*.html" -not -name "README.md" -delete
rm -rf assets/
rm -rf css/
rm -rf js/
rm -rf images/
rm -f favicon.ico

# Copy new build files to root
echo "📂 Copying new build files..."
cp -r folio-v2/dist/* .
cp folio-v2/dist/.* . 2>/dev/null || true

# Add all changes to git
echo "📝 Adding changes to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy folio-v2 to GitHub Pages - $(date)"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete! Your site should be live at https://alexisfimeyer.github.io"
