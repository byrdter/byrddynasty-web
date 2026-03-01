# Link-in-Bio Page Guide

## Overview

The `/links` page serves as your link-in-bio landing page for Instagram, TikTok, and other social media platforms.

**Live URL:**
- **Vercel:** `https://byrddynasty-web.vercel.app/links`
- **Custom Domain (after migration):** `https://byrddynasty.com/links`

---

## How to Use

### 1. Instagram Bio
Update your Instagram bio to:
```
AI Strategy for Production Systems 🤖
Master the Nine Essential Skills
🔗 All Links 👇
```

Then set your profile link to: `https://byrddynasty.com/links`

### 2. TikTok Bio
Update your TikTok bio to:
```
AI Strategy | Production Systems
Full tutorials 👇
```

Then set your profile link to: `https://byrddynasty.com/links`

### 3. Other Platforms
- **Pinterest:** Add link in profile
- **LinkedIn:** Add to "Contact Info" section
- **Twitter/X:** Pin a tweet with the link

---

## Updating the Page

### When You Post a New YouTube Video

**File to edit:** `src/app/links/page.tsx`

**Find this section (around line 106):**
```tsx
{/* Latest Video (update this when you post new videos) */}
<div className="mb-6">
  <LinkButton
    href="https://www.youtube.com/@byrddynasty/videos"
    title="🎬 Latest Video"
    subtitle="Agent Harness Series - Part 3 of 3"
    icon="🔥"
  />
</div>
```

**Update:**
1. Change the `href` to the specific video URL
2. Update the `subtitle` to match the new video title

**Example:**
```tsx
<LinkButton
  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
  title="🎬 Latest Video"
  subtitle="The Nine Essential Skills - Part 1"
  icon="🔥"
/>
```

### When You Add New Links

Add new `LinkButton` components following this pattern:

```tsx
<div className="mb-6">
  <LinkButton
    href="https://your-url.com"
    title="📚 Your Title"
    subtitle="Brief description"
    icon="🎯"  // optional
    primary={false}  // set true for gradient button
  />
</div>
```

### Updating Social Links

**Find this section (around line 138):**
```tsx
<a
  href="https://www.instagram.com/byrddynasty"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
```

Update the `href` to match your actual social media URLs.

---

## Current Link Structure

1. **Primary CTA:** YouTube Channel (gradient button)
2. **Latest Video:** Most recent YouTube upload
3. **Website:** Main byrddynasty.com homepage
4. **Newsletter:** Newsletter signup page
5. **Social Grid:** Instagram, TikTok, LinkedIn, X/Twitter

---

## Design Features

### Mobile-First
- Large tappable buttons (min 48px height)
- Optimized for thumb navigation
- Fast loading (no heavy assets)

### Branding
- Byrddynasty logo at top
- Navy gradient background
- Cyan/Purple/Gold accent colors
- Consistent with main website

### Accessibility
- High contrast text
- Clear focus states
- Semantic HTML
- Screen reader friendly

---

## Testing Checklist

Before updating your Instagram/TikTok bios:

- [ ] Test page on mobile device
- [ ] Click every link to verify URLs
- [ ] Check latest video link points to correct video
- [ ] Verify all social links work
- [ ] Test page load speed
- [ ] Check on both iOS and Android (if possible)

---

## Deploy Process

### After Making Changes:

```bash
cd /Users/terrybyrd/Library/CloudStorage/Dropbox/jarvis/apps/websites/byrddynasty-web

# Make your edits to src/app/links/page.tsx

# Commit and push
git add src/app/links/page.tsx
git commit -m "Update links page - new YouTube video"
git push
```

**Vercel auto-deploys in ~2 minutes.**

Check: `https://byrddynasty-web.vercel.app/links`

---

## Quick Updates (Common Tasks)

### Update Latest Video
1. Open `src/app/links/page.tsx`
2. Find line ~106 (Latest Video section)
3. Change `href` and `subtitle`
4. Git commit and push
5. Wait 2 minutes for Vercel deploy

### Add a New Link
1. Copy an existing `LinkButton` component
2. Paste in the appropriate section
3. Update href, title, subtitle
4. Git commit and push

### Change Link Order
1. Cut/paste entire `<div className="mb-6">` blocks
2. Reorder as desired
3. Git commit and push

---

## Analytics (Future Enhancement)

Consider adding:
- UTM parameters to track traffic source
- Click tracking for each button
- A/B testing different CTAs

**Example with UTM:**
```tsx
href="https://www.youtube.com/@byrddynasty?utm_source=instagram&utm_medium=bio&utm_campaign=links_page"
```

---

## Support

**File Location:** `src/app/links/page.tsx`
**CSS Variables:** `src/app/globals.css`
**Documentation:** This file

If something breaks, check:
1. Vercel deployment logs
2. Browser console for errors
3. Mobile responsiveness in DevTools

---

**Last Updated:** March 1, 2026
