# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Auto Deploy)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

**Features:**
- ✅ Auto-deploy on Git push
- ✅ Custom domains free
- ✅ Global CDN
- ✅ Built-in analytics

---

### 2. Static Build via GitHub Actions

#### Step-by-Step:
1. **Go to Actions tab** in your GitHub repository
2. **Click "Build Static Site"** workflow  
3. **Click "Run workflow"** button
4. **Wait for build** to complete (~2-3 minutes)
5. **Download ZIP** from artifacts section
6. **Upload to any static hosting**

#### Hosting Options for ZIP:
- **Cloudflare Pages**: Drag & drop ZIP contents
- **Netlify**: Drag & drop ZIP contents  
- **Firebase Hosting**: `firebase deploy --public <extracted-folder>`
- **GitHub Pages**: Upload to gh-pages branch
- **Any Web Host**: Upload via FTP/cPanel

---

### 3. GitHub Pages (Free Auto Deploy)

#### Enable GitHub Pages:
1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Push code to main branch
4. Site available at: `https://username.github.io/repo-name`

---

### 4. Manual Local Build

```bash
# Clone repository
git clone <your-repo-url>
cd abzua-manpower/frontend

# Install dependencies
yarn install

# Build
yarn build

# Upload 'build' folder to any hosting service
```

---

## 🔧 Configuration Files Included

### For Vercel:
- `vercel.json` - Optimized configuration

### For Static Hosting:
- `frontend/public/_headers` - Security headers
- `frontend/public/_redirects` - SPA routing
- `frontend/public/netlify.toml` - Netlify config

---

## 📊 Build Output

### What's Generated:
- **Optimized HTML/CSS/JS** (~200KB total gzipped)
- **Compressed Images** (WebP support)
- **Security Headers** (XSS, CSRF protection)  
- **SPA Routing Rules** (React Router support)
- **SEO Meta Tags** (Open Graph, Twitter Cards)

---

## 🛠️ Troubleshooting

### Build Fails in GitHub Actions:
- Check if `yarn.lock` is committed
- Verify Node.js version (18 required)
- Check for dependency conflicts

### Vercel Deployment Issues:
- Ensure `vercel.json` is in root
- Check build logs in Vercel dashboard
- Verify environment variables if needed

### Static Site Not Loading:
- Check browser console for errors
- Verify `_redirects` file for SPA routing
- Ensure all assets are uploaded

---

## 🌐 Custom Domain Setup

### Vercel:
1. Add domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL automatically configured

### Cloudflare Pages:
1. Add domain in Pages dashboard  
2. Update nameservers to Cloudflare
3. SSL automatically configured

### GitHub Pages:
1. Add CNAME file with domain
2. Configure DNS A/CNAME records
3. Enable HTTPS in settings

---

## 🔄 Updates Workflow

### For Auto-Deploy (Vercel/GitHub Pages):
1. Make changes in `frontend/src/`
2. Commit and push to main branch
3. Automatic deployment happens

### For Static Hosting:
1. Make changes in `frontend/src/`
2. Run GitHub Action "Build Static Site"
3. Download new ZIP
4. Upload to hosting platform

---

## 📈 Performance Tips

- **Enable Caching**: Use platform's CDN settings
- **Compress Images**: Already optimized in build
- **Monitor Analytics**: Use Vercel/Cloudflare analytics
- **Check Lighthouse**: Aim for 90+ scores

---

**Choose your deployment method and get live in minutes! 🎉**