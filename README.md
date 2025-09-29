# ABZUA Manpower - International Recruitment Services

🌟 **Modern recruitment website built with React, featuring mobile-first design and multiple deployment options.**

## 🚀 Quick Deploy

> **GitHub Free Users**: If using private repo, see [GITHUB-FREE-GUIDE.md](GITHUB-FREE-GUIDE.md) for optimized workflows

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/YOUR_REPO)

### Static Build (Manual)
1. Go to **Actions** tab in GitHub
2. Run **"Simple Static Build"** workflow (for GitHub Free users)  
3. Download ZIP file from artifacts
4. Upload to any static hosting

---

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- Yarn package manager

### Quick Start
```bash
git clone <repository-url>
cd abzua-manpower
cd frontend
yarn install
yarn start
```

### Build for Production
```bash
cd frontend
yarn build
```

---

## 🌐 Deployment Options

### 1. Vercel (Auto-Deploy)
- Connect repository at [vercel.com](https://vercel.com)
- Auto-deploys on every push
- Custom domains included

### 2. Static Hosting (Manual)
- Run GitHub Action "Build Static Site"
- Download ZIP from artifacts
- Upload to Cloudflare Pages, Firebase, etc.

### 3. GitHub Pages (Auto-Deploy)  
- Enable Pages in repository settings
- GitHub Action automatically deploys
- Available at `username.github.io/repo-name`

---

## 📱 Features

### Core Functionality
- **Multi-Service Platform**: Construction, Healthcare, Technical, Hospitality
- **WhatsApp Integration**: Direct contact forms with pre-filled messages
- **Mobile-First Design**: App-like experience across all devices
- **Global Partner Showcase**: Animated partner logos
- **Multi-Page Navigation**: About, Services, Gallery, Contact, etc.

### Technical Features
- **React 19**: Latest React with modern hooks
- **Tailwind CSS**: Utility-first responsive design
- **React Router 6**: Client-side navigation
- **Optimized Build**: Code splitting and lazy loading
- **SEO Ready**: Meta tags and structured data

---

## 📁 Project Structure

```
abzua-manpower/
├── frontend/                 # React application
│   ├── public/              # Static assets
│   │   ├── _headers         # Security headers
│   │   ├── _redirects       # SPA routing  
│   │   └── images/          # Optimized images
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Route components
│   │   └── hooks/          # Custom hooks
│   └── package.json
├── .github/workflows/       # GitHub Actions
├── vercel.json             # Vercel config
└── README.md
```

---

## 🎯 GitHub Actions

### Build Static Site
- **Trigger**: Manual or push to main
- **Output**: Downloadable ZIP file
- **Use Case**: Manual deployment to any platform

### Deploy to GitHub Pages  
- **Trigger**: Push to main
- **Output**: Live site at GitHub Pages
- **Use Case**: Free hosting

---

## 🔧 Configuration Files

### Vercel (`vercel.json`)
- Optimized for React SPA
- Custom domain support
- Security headers included

### Static Hosting (`_headers`, `_redirects`)
- Works with Netlify, Cloudflare Pages
- SPA routing support
- Security headers

---

## 📊 Performance

- **Bundle Size**: ~186KB JS, ~18KB CSS (gzipped)
- **Lighthouse Score**: 95+ Performance
- **Mobile Optimized**: First-class mobile experience
- **Loading Speed**: < 3s on 3G networks

---

## 🛠️ Development Commands

```bash
# Development
yarn start              # Start dev server
yarn build             # Production build
yarn test              # Run tests

# Deployment  
vercel --prod          # Deploy to Vercel
# Or use GitHub Actions for static build
```

---

## 🔄 Updates & Maintenance

### Making Changes
1. Edit files in `frontend/src/`
2. Test locally with `yarn start`
3. Push to GitHub
4. Vercel auto-deploys OR run GitHub Action for static build

### Static Build Process
1. Go to **Actions** tab in GitHub
2. Run **"Build Static Site"** workflow
3. Download artifacts when complete
4. Upload to your hosting platform

---

## 🌍 Live Examples

- **Vercel**: Auto-deployed from main branch
- **GitHub Pages**: Available when enabled
- **Static**: Download ZIP and upload anywhere

---

## 📞 Contact Integration

- **WhatsApp Business**: +92 332 3277946
- **Contact Forms**: Pre-filled WhatsApp messages
- **Services**: Direct service inquiry forms
- **Quick Response**: 5-minute response promise

---

## 🎉 Ready to Deploy!

Choose your preferred method:
- **Fastest**: Vercel (click deploy button above)
- **Free**: Enable GitHub Pages
- **Manual**: Run GitHub Action → Download ZIP → Upload

**Your recruitment website will be live in minutes!**