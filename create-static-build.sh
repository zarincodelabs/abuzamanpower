#!/bin/bash
# Local Static Build Script
# Use for local development and testing

set -e

echo "🚀 Creating Local Static Build"
echo "============================="

cd /app/frontend

echo "📦 Installing dependencies..."
yarn install

echo "🔧 Building React application..."
yarn build

echo "✅ Build completed!"
echo "📁 Build location: /app/frontend/build"
echo ""  
echo "🌐 Deploy options:"
echo "  • Upload 'build' folder to any static hosting"
echo "  • Or use GitHub Actions for automated build + ZIP download"

cd /app