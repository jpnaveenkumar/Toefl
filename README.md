# TOEFL Prep App 📚

A comprehensive TOEFL iBT preparation mobile app built with React + Vite + Tailwind CSS. Designed for independent learners preparing for the Test of English as a Foreign Language exam.

## 🚀 Live Demo

**[Open TOEFL Prep App](https://jpnaveenkumar.github.io/Toefl/)**

## ✨ Features

### 📖 Reading Section
- 5 academic passages on science, history, and social topics
- 6 question types: Factual, Inference, Vocabulary, Rhetorical Purpose, Prose Summary, Organization
- Detailed explanations for every question
- Timed practice (~18 minutes per passage)

### 🎧 Listening Section
- Lecture and conversation transcripts
- Note-taking practice area
- Multiple question types: Gist, Detail, Function, Attitude
- Full comprehension assessments

### 🎙️ Speaking Section
- All 4 TOEFL task types
- Task 1: Independent speaking (45 sec response)
- Task 2: Campus situation (integrated, 60 sec)
- Task 3: Academic concept (integrated, 60 sec)
- Task 4: Lecture summary (60 sec)
- Built-in timers, sample responses, self-evaluation checklists

### ✍️ Writing Section
- Task 1: Integrated writing (read + listen + write, 20 min)
- Task 2: Independent essay (30 min)
- Word count tracker
- Outline templates
- 30+ useful transition phrases bank
- Scoring rubrics for feedback

### 📚 Vocabulary Builder
- 200 high-frequency academic words (Academic Word List)
- Spaced repetition flashcards with 3-level mastery system
- Browse, search, and filter vocabulary
- Level-based learning (Beginner, Intermediate, Advanced)

### 📅 12-Week Structured Study Plan
- Personalized daily learning pathway
- Progressive difficulty scaling
- 84 daily tasks across all sections
- Estimated 60-120 minutes per day

### 📊 Progress Tracking
- Daily study streaks
- XP and leveling system
- Section-by-section score history
- 13 unlockable achievements
- Weekly activity charts
- Exam countdown timer

### 💡 Smart Features
- **Offline-capable**: Works completely offline after first load (all data in localStorage)
- **Mobile-first**: Fully responsive design for phone and tablet
- **Persistent progress**: All study progress saved locally
- **No login required**: Private, device-specific learning

## 🏃 Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
```

## 🎓 How to Use

1. **Onboarding**: Set your name, English level, target score, exam date, and daily study goal
2. **Dashboard**: View your streak, daily goals, and today's tasks
3. **Study Plan**: Follow the 12-week structured pathway
4. **Practice Sections**: Work through Reading, Listening, Speaking, and Writing
5. **Vocabulary**: Learn and review 200+ academic words with flashcards
6. **Progress**: Track your scores and unlocked achievements

## 🌐 Deployment

### Deployed On
This app is deployed on **GitHub Pages** with auto-deployment:
- **URL**: https://jpnaveenkumar.github.io/Toefl/
- **Branch**: `main` (pushes auto-deploy)
- **HTTPS**: ✓ Automatic
- **Build**: GitHub Actions (automatic)

### Deployment Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **CI/CD**: `.github/workflows/deploy.yml`

### To Deploy Your Own Fork
1. Create GitHub repository
2. Push code to `main` branch
3. Enable GitHub Pages in Settings → Pages
4. Select `gh-pages` branch as source
5. Update `vite.config.js` base path to your repo name
6. Update `src/App.jsx` basename accordingly

## 📱 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: Browser localStorage
- **Deployment**: GitHub Pages

## 📋 Content Included

### Reading
- 5 full academic passages covering:
  - Environmental Science (Coral Reefs, Urban Heat Islands)
  - Technology (Internet History)
  - Psychology (Sleep & Memory)
  - History (Agricultural Revolution)

### Speaking
- 8 task prompts with sample responses
- All 4 task types represented
- Self-evaluation guides

### Writing
- 6 complete writing prompts
- Integrated and independent tasks
- Essay templates and rubrics

### Vocabulary
- 200 carefully selected Academic Word List words
- Complete definitions, part of speech, example sentences
- Progressive difficulty levels

### Study Plan
- 12-week curriculum
- 84 daily tasks
- Progressive intensity
- Mix of all sections and review sessions

## 📊 Progress Persistence

Your progress is automatically saved to your browser's localStorage:
- Study streaks
- Scores from each section
- Learned vocabulary
- XP and level
- Daily goals
- Task completions

**Note**: Data is stored locally per browser/device. Clearing browser data will reset progress.

## 🔒 Privacy

- **No user tracking**: App doesn't track or store user data on servers
- **No authentication**: No login or email required
- **Offline-first**: Works completely offline
- **Local storage only**: All data stays on your device

## ✅ Verification Checklist

After deploying, verify:
- [ ] App loads without errors
- [ ] Onboarding completes
- [ ] All navigation tabs work
- [ ] Reading/Speaking/Writing/Vocabulary load content
- [ ] Progress persists after refresh
- [ ] Works on mobile devices
- [ ] Works offline (DevTools → offline mode)

## 🐛 Troubleshooting

### App not loading at deployment URL?
- Check GitHub Actions workflow (Actions tab)
- Verify `base` path in vite.config.js matches repo name
- Ensure `basename` in App.jsx matches vite base

### Routes show 404?
- Confirm GitHub Pages is set to deploy `gh-pages` branch
- React Router SPA routing requires catch-all to index.html
- GitHub Pages should handle this automatically

### localStorage not persisting?
- Check browser privacy settings
- localStorage works per domain/subdomain
- Incognito/Private mode won't persist
- Different devices have separate data

## 📄 License

Free to use and modify for personal and educational purposes.

## 🙏 Acknowledgments

Built for TOEFL preparation with real exam content types and academic materials.

---

**Ready to start preparing?** 🎯

[**Open the app now!**](https://jpnaveenkumar.github.io/Toefl/)
