# ASSETS POLICY - Local Storage Guidelines

## 📋 Overview
This document outlines the strict policy for storing all assets (images, videos, documents) locally within the project repository. **NO EXTERNAL ASSETS ARE ALLOWED**.

## 🚫 Prohibited External Sources
- ❌ `.emergent` hosted assets
- ❌ CDN links (any external CDN)
- ❌ Third-party image hosting services
- ❌ Social media direct links
- ❌ Google Drive/Dropbox links
- ❌ Any `https://` asset URLs

## ✅ Required Local Storage Structure

### 📁 Directory Structure
```
/app/frontend/public/assets/
├── images/
│   ├── testimonials/          # Customer testimonial photos
│   ├── logo/                  # Company logos and branding
│   ├── gallery/              # Gallery images
│   ├── team/                 # Team member photos
│   └── general/              # General website images
├── videos/
│   ├── hero-background-video.mp4  # Background videos
│   ├── testimonials/         # Customer video testimonials
│   └── company/              # Company introduction videos
├── documents/
│   ├── brochures/            # Company brochures
│   ├── certificates/         # Certifications
│   └── policies/             # Policy documents
└── icons/
    ├── social/               # Social media icons
    └── ui/                   # UI icons and symbols
```

## 🔧 Implementation Guidelines

### 1. Asset Download Process
```bash
# For images
cd /app/frontend/public/assets/images/[category]/
wget -O [local-filename.extension] "[external-url]"

# For videos  
cd /app/frontend/public/assets/videos/
wget -O [local-filename.mp4] "[external-video-url]"
```

### 2. Path References in Code
```javascript
// ✅ CORRECT - Local paths
const heroVideo = "/assets/videos/hero-background-video.mp4";
const logo = "/assets/images/logo/company-logo.png"; 
const testimonialImage = "/assets/images/testimonials/client-photo.jpg";

// ❌ WRONG - External URLs
const badVideo = "https://customer-assets.emergentagent.com/...";
const badImage = "https://cdn.example.com/image.jpg";
```

### 3. Code Search & Replace Pattern
When converting external assets to local:

1. **Find external URLs:**
   ```bash
   grep -r "https://.*\.(jpg|jpeg|png|gif|mp4|webm|pdf)" /app/frontend/src/
   ```

2. **Download assets:**
   ```bash
   wget -O [local-name] "[external-url]"
   ```

3. **Replace in code:**
   ```bash
   find /app/frontend/src -name "*.js" -o -name "*.jsx" | xargs sed -i 's|https://external-url|/assets/path/local-file|g'
   ```

## 📝 Quality Standards

### File Naming Convention
- Use lowercase with hyphens: `hero-background-video.mp4`
- Be descriptive: `testimonial-ahmed-hassan.jpg`
- Include version if needed: `logo-v2.png`

### File Size Optimization
- **Images:** Compress to < 500KB per image
- **Videos:** Compress to < 10MB per video
- **Use appropriate formats:** 
  - Images: `.jpg` for photos, `.png` for graphics
  - Videos: `.mp4` for web compatibility

### Performance Considerations
- Always use local paths starting with `/assets/`
- Enable browser caching for static assets
- Consider lazy loading for large galleries

## 🔍 Audit Checklist

Before deploying, ensure:
- [ ] No external asset URLs in codebase
- [ ] All assets accessible via `/assets/` paths
- [ ] File sizes optimized
- [ ] Assets organized in proper directory structure
- [ ] Backup of all assets maintained

## 🚨 Violation Detection

### Automated Check Commands
```bash
# Check for external image/video URLs in code
grep -r "https://.*\.(jpg|jpeg|png|gif|mp4|webm|svg)" /app/frontend/src/

# Check for .emergent links specifically  
grep -r "\.emergent" /app/frontend/

# Check for CDN links
grep -r "cdn\." /app/frontend/src/
```

### Quick Fix Script
```bash  
#!/bin/bash
# Run this script to find and report external assets
echo "🔍 Scanning for external assets..."
grep -r "https://.*\.(jpg|jpeg|png|gif|mp4|webm|svg|pdf)" /app/frontend/src/ | head -10
echo "❌ Found external assets that need to be localized!"
```

## 💡 Best Practices

1. **Always Preview Locally:** Test assets load correctly from local paths
2. **Version Control:** Include all assets in git repository  
3. **Documentation:** Update this file when adding new asset categories
4. **Regular Audits:** Run detection commands monthly
5. **Performance Monitoring:** Monitor page load times after asset changes

## 🎯 Success Criteria

✅ **ACHIEVED GOALS:**
- All `.emergent` assets successfully localized
- Hero background video (`hero-background-video.mp4`) stored locally
- Testimonial images stored in organized folders  
- Zero external asset dependencies

## 📞 Support

If you need help with asset localization:
1. Check this document first
2. Search codebase for similar implementations
3. Test thoroughly after making changes
4. Document any new patterns discovered

---
**Last Updated:** December 2024  
**Status:** ✅ All assets successfully localized