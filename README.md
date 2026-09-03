# Hugo Bihammar | Tennis Recruiting Website

A modern, data-driven tennis recruiting profile website built with HTML, CSS, and JavaScript. Easily update your tennis achievements, videos, and tournament results without touching any code.

## 🎾 Features

- **Data-Driven Content** — All content lives in simple JSON files
- **YouTube Integration** — Embed recruiting videos directly from YouTube
- **Responsive Design** — Works perfectly on mobile, tablet, and desktop
- **Fast Updates** — Update results, stats, or videos in minutes
- **GitHub Pages Hosting** — Automatic deployment, always free

## 📁 File Structure

```
.
├── index.html              # Main page (loads data from JSON)
├── data/                   # All updateable content
│   ├── profile.json        # Bio, stats, interests
│   ├── results.json        # Tournament results
│   ├── videos.json         # YouTube videos
│   ├── timeline.json       # UTR progress milestones
│   ├── coaches.json        # Recruiting highlights
│   └── gallery.json        # Photo gallery
├── assets/
│   ├── css/styles.css      # Styling
│   ├── js/app.js           # Loads and renders data
│   ├── photos/             # Your tournament photos
│   └── images/             # Additional images
└── docs/UPDATING.md        # How-to guide

```

## 🚀 Quick Start

### To Update Your Website

1. **Add a tournament result:** Edit `data/results.json`
2. **Add a YouTube video:** Edit `data/videos.json` with your video ID
3. **Update your stats:** Edit `data/profile.json`
4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update results"
   git push
   ```
5. **Done!** Your site updates within 1-2 minutes

See [`docs/UPDATING.md`](docs/UPDATING.md) for detailed instructions.

## 📝 JSON Files Explained

### `profile.json`
Your name, location, bio, current UTR, interests, and social links.

**Update when:**
- UTR rating changes
- Move to a new location
- Want to update your bio

### `results.json`
Your tournament wins and achievements.

**Update when:**
- Win a tournament
- Place in a major competition

### `videos.json`
YouTube videos showing your tennis skills.

**Update when:**
- Upload new recruiting footage
- Want to feature different strokes or matches

### `timeline.json`
Your tennis journey timeline (started tennis → current UTR).

**Update when:**
- Reach a new UTR milestone
- Major achievement to mark

### `coaches.json`
Why coaches should recruit you (your key strengths).

**Update when:**
- Develop new strengths
- Want to emphasize different qualities

### `gallery.json`
Photos of you playing and at tournaments.

**Update when:**
- New tournament photos available
- Want to update your gallery

## 🎯 Getting Started with GitHub Pages

This website is hosted on **GitHub Pages** (free, automatic deployment).

**First-time setup:**
1. Go to repository Settings → Pages
2. Set Source to: `Deploy from a branch`
3. Select: `main` branch, `/root` folder
4. Your site is live at: `https://Patrikbzzgit.github.io/Hugowebsite/`

### Automatic Updates

Once enabled, GitHub Pages automatically:
- Deploys your site whenever you push to `main`
- Updates within 1-2 minutes
- Keeps your site live 24/7 with no maintenance

## 🎬 Adding YouTube Videos

1. **Upload to YouTube** (unlisted or public)
2. **Get Video ID:** From URL `https://www.youtube.com/watch?v=ABC123`, ID is `ABC123`
3. **Add to `data/videos.json`:**
   ```json
   {
     "id": "serve-technique",
     "title": "Serve Technique",
     "description": "Match serve footage",
     "youtubeId": "ABC123"
   }
   ```
4. **Push to GitHub** — automatically live!

## 📸 Adding Photos

1. **Place photos** in `assets/photos/` folder
2. **Update `data/gallery.json`:**
   ```json
   {
     "src": "assets/photos/my-new-photo.jpg",
     "alt": "Photo description",
     "title": "Photo Title"
   }
   ```
3. **Push to GitHub**

## 🔧 Local Development

To test locally before pushing:

```bash
# Start a simple web server
python -m http.server 8000

# Open browser to http://localhost:8000
```

## 📋 Best Practices

- **Use Recent Photos** — Keep gallery updated with latest tournament photos
- **Monthly Updates** — Add new results and video footage regularly
- **Clear Descriptions** — Be specific about tournaments and dates
- **Quality Videos** — 2-4 high-quality recruiting videos recommended
- **Keep Bio Fresh** — Update stats and achievements as they happen

## 🎓 Learn More

- [How to Update Your Site](docs/UPDATING.md) — Detailed step-by-step guide
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [YouTube Embedding](https://support.google.com/youtube/answer/171780)

## 💡 Tips

- **YouTube Unlisted** — Upload videos as "Unlisted" so only people with the link can find them (more privacy)
- **JSON Validation** — Before pushing, validate JSON at https://jsonlint.com/ if you get errors
- **Commit Messages** — Use descriptive messages like "Add US Open U14 results" or "Update UTR to 9.5"

## 📞 Support

If you encounter issues:
1. Check [`docs/UPDATING.md`](docs/UPDATING.md) troubleshooting section
2. Validate your JSON files
3. Ensure all file paths in `data/` JSON files are correct

---

**Built with:** HTML5, CSS3, JavaScript, JSON, GitHub Pages

**Last Updated:** September 2026

**Ready to recruit!** 🎾
