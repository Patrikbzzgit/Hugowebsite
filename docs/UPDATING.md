# How to Update Your Tennis Recruiting Website

This website is designed to be easily updated without touching any code. All content is stored in JSON files that you can edit directly.

## File Structure

```
data/
├── profile.json      ← Personal info, stats, bio
├── results.json      ← Tournament results
├── videos.json       ← YouTube videos
├── timeline.json     ← UTR progress milestones
├── coaches.json      ← Why coaches should watch
└── gallery.json      ← Photo gallery

assets/
├── photos/           ← Your photos
└── images/           ← Any other images
```

---

## Updating Each Section

### 1. **Profile Info** (`data/profile.json`)

Update your basic information, stats, and bio:

```json
{
  "name": "Hugo",
  "lastName": "Bihammar",
  "location": "Sydney, Australia",
  "title": "Australian Junior Tennis Player",
  "tagline": "Your main tagline here",
  "bio": "Your biography here",
  "ambition": "Your ambition/goals here",
  "stats": [
    {
      "value": "9+",
      "label": "UTR",
      "detail": "Aug 2026"
    }
  ],
  "interests": [
    "Sydney, Australia",
    "Advanced Mathematics"
  ],
  "instagram": "https://www.instagram.com/hugo.bihammar.tennis/",
  "tennisAustraliaProfile": "https://tournaments.tennis.com.au/..."
}
```

**When to update:**
- New UTR rating
- Birthday or milestone
- Different location
- New academic interests

---

### 2. **Tournament Results** (`data/results.json`)

Add new tournament wins and achievements:

```json
{
  "title": "Championship experience",
  "results": [
    {
      "id": 1,
      "title": "NSW Teams State Champion",
      "detail": "Gold Trophy · Ken Rosewall Cup · 2026"
    },
    {
      "id": 2,
      "title": "Your New Tournament",
      "detail": "Champion · Location · Month Year"
    }
  ]
}
```

**To add a new result:**
1. Open `data/results.json`
2. Find the last result
3. Copy the `{ }` block
4. Paste it below and increment the `"id"` by 1
5. Update `"title"` and `"detail"`
6. Save

**Example:**
```json
{
  "id": 5,
  "title": "Sydney J500 Championship",
  "detail": "U14 Singles Champion · Sydney · Sept 2026"
}
```

---

### 3. **YouTube Videos** (`data/videos.json`)

Embed your recruiting videos from YouTube:

```json
{
  "title": "Stroke footage",
  "description": "Additional match and recruiting footage...",
  "videos": [
    {
      "id": "forehand",
      "title": "Forehand",
      "description": "Light hitting session",
      "youtubeId": "dQw4w9WgXcQ",
      "thumbnail": "assets/photos/video-thumb-1.jpg"
    }
  ]
}
```

**How to get YouTube Video ID:**

1. Go to YouTube and find your video
2. Click **Share**
3. Copy the URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
4. The ID is everything after `v=` → `dQw4w9WgXcQ`

**To add a new video:**
1. Upload your video to YouTube (unlisted or public)
2. Copy the video ID
3. Open `data/videos.json`
4. Add a new video entry:

```json
{
  "id": "volley-drill",
  "title": "Volley Drill",
  "description": "Half court volley practice",
  "youtubeId": "YOUR_VIDEO_ID_HERE",
  "thumbnail": "assets/photos/volley-thumb.jpg"
}
```

5. Save and push to GitHub

---

### 4. **Timeline & Progress** (`data/timeline.json`)

Show your tennis journey and UTR progression:

```json
{
  "title": "UTR Progress & Tennis Timeline",
  "timeline": [
    {
      "year": 2022,
      "milestone": "Started Tennis",
      "utr": "0.0",
      "isChampion": false
    },
    {
      "year": 2026,
      "milestone": "NSW State Champion",
      "utr": "9+",
      "isChampion": true
    }
  ]
}
```

**To add a new milestone:**
1. Open `data/timeline.json`
2. Add a new entry in the `"timeline"` array:

```json
{
  "year": 2026,
  "milestone": "Reached 9.5 UTR",
  "utr": "9.5",
  "isChampion": false
}
```

3. Set `"isChampion"` to `true` for major achievements (displays with special styling)

---

### 5. **Why Coaches Should Watch** (`data/coaches.json`)

Highlight your key strengths and characteristics:

```json
{
  "title": "Why Coaches Should Watch Hugo",
  "coaches": [
    {
      "title": "Rapid Progression",
      "description": "Started tennis in September 2022 and rapidly progressed..."
    },
    {
      "title": "Your Strength",
      "description": "Your description here..."
    }
  ]
}
```

**To update:**
1. Open `data/coaches.json`
2. Edit existing `"title"` and `"description"`
3. Or add new cards by copying and modifying

---

### 6. **Photo Gallery** (`data/gallery.json`)

Add photos to your gallery:

```json
{
  "photos": [
    {
      "src": "assets/photos/3.jpg",
      "alt": "Junior tennis tournament presentation",
      "title": "Tournament Presentation"
    },
    {
      "src": "assets/photos/your-new-photo.jpg",
      "alt": "Description of photo",
      "title": "Photo Title"
    }
  ]
}
```

**To add a new photo:**
1. Upload your photo to `assets/photos/`
2. Open `data/gallery.json`
3. Add a new entry:

```json
{
  "src": "assets/photos/your-photo-name.jpg",
  "alt": "What the photo shows",
  "title": "Photo Title"
}
```

---

## How to Push Changes to GitHub

After editing any JSON file:

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Update tournament results - won Sydney J500"
   git push
   ```

2. **Your website automatically updates within 1-2 minutes** (GitHub Pages)

---

## Tips for Best Results

### Photos
- Use high-quality images (2000x1500 pixels or larger)
- Name them descriptively: `forehand-drill.jpg`, `tournament-2026.jpg`
- Recommended: 3-5 tournament action photos + 2-3 trophy/celebration photos

### Videos
- Upload 2-4 key videos showing different strokes
- Mix match footage with practice/drill footage
- Keep descriptions short and specific
- Set to "Unlisted" on YouTube so only people with the link can find them (or "Public" for more visibility)

### Bio & Tagline
- Keep concise and focused on recruiting appeal
- Highlight: UTR, achievements, work ethic, coachability
- Update annually or when major milestones are achieved

### Results
- List most recent first
- Include tournament name, achievement, and date
- Examples:
  - "U14 Singles Champion · Nepean J125 · Dec 2025"
  - "Doubles Champion · Wollongong J250 · Jan 2026"

---

## Troubleshooting

**Q: I edited a JSON file but the website didn't update**
- A: Did you commit and push to GitHub? Wait 1-2 minutes for GitHub Pages to rebuild.

**Q: My YouTube video won't embed**
- A: Make sure you copied the correct Video ID (the letters/numbers after `v=` in the YouTube URL)

**Q: Photos aren't showing**
- A: Check that the `"src"` path is correct. Should be: `assets/photos/filename.jpg`

**Q: Something broke on the website**
- A: Check that your JSON is valid. Use a JSON validator: https://jsonlint.com/

---

## Questions?

The website updates automatically whenever you push to GitHub. Each section is independent, so you can update just the results without touching videos, etc.

Good luck with your recruiting! 🎾
