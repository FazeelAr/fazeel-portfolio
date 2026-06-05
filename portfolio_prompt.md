# Muhammad Fazeel — Personal Portfolio Website
## Complete Coding Agent Prompt

---

## OVERVIEW

Build a **modern, production-grade personal portfolio website** for Muhammad Fazeel, a Software Engineering student and developer from Lahore, Pakistan. The site should reflect a developer who ships real products, works with cutting-edge AI, and has a genuine passion for building things. The design must be visually stunning, minimal, and professional — think Linear, Vercel, or Leerob.io in terms of aesthetic quality.

**Stack:**
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Chatbot:** LangChain + Gemini API + Sentence Transformers (RAG-based)
- **Deployment:** Vercel

---

## DESIGN SYSTEM

- **Theme:** Dark mode by default with light mode toggle
- **Color Palette:**
  - Background: `#0a0a0a` (dark) / `#fafafa` (light)
  - Primary accent: Electric blue `#3b82f6` or soft violet `#8b5cf6`
  - Text: `#e5e7eb` on dark, `#111827` on light
  - Muted: `#6b7280`
  - Cards: `#111111` with subtle `1px` border `#1f1f1f`
- **Typography:** Inter or Geist font (Next.js default)
- **Border radius:** Rounded corners throughout (`rounded-xl`, `rounded-2xl`)
- **Glassmorphism** for cards: `backdrop-blur`, semi-transparent backgrounds
- **Subtle grid or dot pattern** on hero background
- **Smooth scroll** between sections
- **Page transitions** using Framer Motion
- No clutter. Lots of whitespace. Every element earns its place.

---

## SITE STRUCTURE & SECTIONS

### 1. NAVBAR
- Sticky top navigation
- Logo / name on the left: **"Fazeel"** or **"mf."**
- Nav links: Home, About, Experience, Projects, Skills, Contact
- Dark/Light mode toggle (shadcn `Switch` or icon button)
- On mobile: hamburger menu with slide-in drawer (shadcn `Sheet`)
- Subtle blur backdrop on scroll

---

### 2. HERO SECTION

**Content:**
```
Muhammad Fazeel
Software Engineer & AI Developer
Building intelligent systems and full-stack applications.
Based in Lahore, Pakistan.
```

- Animated typing effect cycling through:
  `"AI Agent Developer"`, `"Full Stack Engineer"`, `"RAG Systems Builder"`, `"Open to Internships"`
- Two CTA buttons:
  - **"View My Work"** → scrolls to Projects
  - **"Download CV"** → downloads PDF resume
- Social links row: GitHub (`github.com/FazeelAr`), LinkedIn (`linkedin.com/in/muhammad-fazeel-48484a264`), Email (`muhammad.fazeel8904@gmail.com`)
- Subtle animated background: floating particles, gradient orbs, or mesh gradient
- Scroll indicator arrow at bottom

---

### 3. ABOUT SECTION

**Heading:** `About Me`

**Bio (use this text, refine tone as needed):**
> I'm a third-year Software Engineering student at PUCIT, University of the Punjab (2023–2027), with a GPA of 3.30/4.00. I build things across the full stack — from responsive Next.js frontends to Django and ASP.NET Core backends — but my deepest interest lies in AI: agents, automation pipelines, and systems that actually think.
>
> I've shipped real applications for real clients — a recipe generator for a Lithuanian startup, a POS system for a local wholesale business, SaaS platforms during my internship at Xonfo Solutions. I also teach AI to 50+ university students every week as a Teaching Assistant, which keeps me sharp.
>
> When I'm not coding, I'm competing in national quiz championships (Top 3 nationally), organizing ICPC rounds, or reading about whatever's new in LLMs.

**Side stats / highlights (card grid):**
- 🎓 PUCIT, BS Software Engineering — GPA 3.30
- 💼 Software Engineering Intern @ Xonfo Solutions
- 🤖 Teaching Assistant — AI Course (50+ students)
- 🏆 Top 3 Nationally — Quiz Competitions
- 📍 Lahore, Pakistan
- 🌐 Available for Remote & On-site Internships

**Profile photo placeholder** (add circular avatar with gradient ring border)

---

### 4. EXPERIENCE SECTION

**Heading:** `Experience`

Display as a **vertical timeline** with company logo placeholders, role title, dates, and bullet points. Cards expand on hover.

---

#### Experience 1
- **Role:** Software Engineering Intern
- **Company:** Xonfo Solutions
- **Location:** Lahore, Pakistan
- **Duration:** Present
- **Type:** On-site Internship
- **Bullets:**
  - Working on two live SaaS platforms built with ASP.NET Core Web API and Angular: an LMS ([uniquegroupofschools.edu.pk](https://www.uniquegroupofschools.edu.pk/)) and an HRMS ([briskpeople.com](https://www.briskpeople.com/))
  - Implemented features following Clean Architecture and Dependency Injection patterns
  - Managed PostgreSQL databases using Dapper ORM for optimized raw SQL queries and multi-tenant data isolation
  - Collaborated in Agile sprints: code reviews, feature delivery, and cross-functional teamwork
- **Tags:** `ASP.NET Core` `Angular` `PostgreSQL` `Dapper` `Clean Architecture` `SaaS`

---

#### Experience 2
- **Role:** Teaching Assistant — Artificial Intelligence
- **Company:** University of the Punjab (PUCIT)
- **Location:** Lahore, Pakistan
- **Duration:** Sep 2025 – Present
- **Bullets:**
  - Instructing 50+ students on LLM pipelines, RAG systems, and multi-agent orchestration through hands-on Python labs
  - Designed lab sessions covering LangChain workflows, agent tool-calling, and automation pipelines
  - Reduced average student debugging time by 30% through structured code reviews
- **Tags:** `LangChain` `FastAPI` `RAG` `Python` `AI Agents`

---

#### Experience 3
- **Role:** Teaching Assistant — Software Engineering & Database Systems
- **Company:** University of the Punjab (PUCIT)
- **Location:** Lahore, Pakistan
- **Duration:** Sep 2025 – Jan 2026
- **Bullets:**
  - Mentored 40+ students on RESTful API design, relational databases, and full-stack development
  - Improved average project completion rate by 25%
- **Tags:** `Django` `PostgreSQL` `REST APIs` `SQL`

---

### 5. PROJECTS SECTION

**Heading:** `Projects`

Layout: **Masonry or 2-column card grid**. Each card has:
- Project title + short description
- Tech stack tags (colored pills)
- Live URL button + GitHub button (if available)
- Subtle hover animation (card lift + glow border)
- Category filter tabs: `All` | `AI / LLM` | `Full Stack` | `Web`

---

#### Project 1 — Multi-Agent Task Automation System
- **Category:** AI / LLM
- **Year:** 2025
- **Description:** A fully autonomous multi-agent pipeline built with LangGraph — agents decompose tasks, scrape the web, process data, and generate reports with zero human intervention.
- **Highlights:**
  - Modular agent nodes with defined roles: scraper, processor, reporter
  - Automated web scraping + data transformation pipelines
  - ~60% reduction in manual processing effort
- **Stack:** `Python` `LangGraph` `LangChain` `Web Scraping`
- **GitHub:** (add if available)

---

#### Project 2 — RAG Document Assistant
- **Category:** AI / LLM
- **Year:** 2025
- **Live URL:** [fazeelar-rag-app.streamlit.app](https://fazeelar-rag-app.streamlit.app/)
- **Description:** End-to-end RAG pipeline for intelligent document querying. Upload documents, ask questions, get accurate answers in under 2 seconds.
- **Highlights:**
  - 1,000+ document chunks stored in ChromaDB vector database
  - 40% improvement in retrieval accuracy through advanced chunking + embedding tuning
  - FastAPI backend + Streamlit frontend
- **Stack:** `Python` `LangChain` `ChromaDB` `FastAPI` `Streamlit` `Prompt Engineering`

---

#### Project 3 — Suvalgyk — AI Recipe Generator
- **Category:** AI / LLM + Full Stack
- **Year:** 2025
- **Live URL:** [suvalgyk-frontend.vercel.app](https://suvalgyk-frontend.vercel.app/)
- **Description:** Accepts ingredient names or a photo and generates a complete recipe — ingredients with quantities, step-by-step procedure, and an AI-generated dish image — adapted to the time of day. Built for a Lithuanian client.
- **Highlights:**
  - Image input processing + prompt engineering with Gemini API
  - Time-of-day context awareness in recipe generation
  - International client delivery
- **Stack:** `Django REST Framework` `Next.js` `Gemini API` `Python`

---

#### Project 4 — MyNGL — Anonymous Q&A Platform
- **Category:** Full Stack
- **Year:** 2025
- **Live URL:** [myngl-two.vercel.app](https://myngl-two.vercel.app)
- **Description:** Anonymous messaging app with real-time response updates. Users get a shareable link; messages arrive instantly via WebSockets.
- **Highlights:**
  - Real-time bidirectional communication via Socket.io
  - Supabase (PostgreSQL) for auth, messaging, and row-level security
  - Shareable profile links + live notifications
- **Stack:** `Next.js` `Supabase` `Socket.io` `PostgreSQL`

---

#### Project 5 — Balance & POS Management System
- **Category:** Full Stack
- **Year:** 2024
- **Live URL:** [bilal-pos-next.vercel.app](https://bilal-pos-next.vercel.app/)
- **Description:** Business management tool for a chicken wholesale shop. Tracks client balances, transaction history, and generates POS receipts. Replaced a fully manual ledger system.
- **Highlights:**
  - Live daily operations for a real business client
  - Real-time, multi-device accessible
  - POS receipt generation module
- **Stack:** `Next.js` `Supabase` `PostgreSQL`

---

#### Project 6 — APIGA Pakistan Website
- **Category:** Web
- **Year:** 2024
- **Live URL:** [apiga.pk](https://apiga.pk)
- **Description:** Responsive, SEO-optimized informational website for APIGA's Pakistan chapter.
- **Stack:** `React.js` `TailwindCSS`

---

#### Project 7 — IBM Overseas Consultants Website
- **Category:** Web
- **Year:** 2024
- **Live URL:** [ibmcoverseasconsultants.com](https://ibmcoverseasconsultants.com)
- **Description:** Professional marketing website for an overseas consultancy firm.
- **Stack:** `Next.js` `TailwindCSS`

---

### 6. SKILLS SECTION

**Heading:** `Tech Stack`

Display as an **animated scrolling ticker / logo wall** (two rows, opposite directions) + a categorized grid below.

**Categorized Grid:**

| Category | Skills |
|---|---|
| AI & LLM | LangChain, LangGraph, RAG Systems, ChromaDB, Gemini API, Prompt Engineering, Multi-Agent Workflows, Sentence Transformers |
| Frontend | Next.js, React.js, Angular, TypeScript, JavaScript, TailwindCSS, shadcn/ui, Framer Motion |
| Backend | Django REST Framework, FastAPI, ASP.NET Core Web API, Flask, Node.js, Clean Architecture |
| Databases | PostgreSQL, Supabase, MongoDB, MySQL, SQLite, ChromaDB, Dapper ORM |
| Tools | Git, GitHub, Docker, Postman, Vercel, Streamlit, VSCode |
| Soft Skills | Technical Communication, Team Collaboration, Mentorship, Problem Solving |

---

### 7. AI CHATBOT SECTION

**Heading:** `Ask Fazeel's AI`  
**Subheading:** `Powered by RAG + Gemini — ask anything about my work, projects, or background.`

**Implementation:**

This is a RAG-based chatbot embedded in the portfolio. It has a knowledge base of everything about Fazeel (built from this document) and answers visitor questions conversationally.

**UI:**
- Floating chat button (bottom-right corner) — pulsing blue dot indicator
- Expands into a sleek chat panel (shadcn `Sheet` or custom modal)
- Chat interface: message bubbles, timestamp, typing indicator (animated dots)
- Suggested starter questions shown before first message:
  - `"What projects have you built?"`
  - `"What's your tech stack?"`
  - `"Are you open to internships?"`
  - `"Tell me about your AI experience"`
  - `"What is your GPA and university?"`

**Backend Architecture (`/api/chat` route — Next.js API route or separate FastAPI service):**

```
Knowledge Base Sources (embed all of this):
- Full bio, background, and goals
- All project descriptions, tech stacks, and URLs
- Experience details (Xonfo Solutions, Teaching Assistant roles)
- Skills list
- Education: PUCIT, BS Software Engineering, 2023–2027, GPA 3.30
- Certifications
- Achievements: Top 3 nationally, ICPC Organizer, PEF Event Organizer
- Contact info and availability
- Interests: LLMs, AI Agents, RAG Systems, Open Source, Full Stack Web Dev
```

**Tech Implementation:**
```python
# RAG Pipeline
- Embedding Model: sentence-transformers (all-MiniLM-L6-v2)
- Vector Store: ChromaDB (in-memory or persisted)
- LLM: Gemini 1.5 Flash (via LangChain Google GenAI integration)
- Chain: ConversationalRetrievalChain with memory
- Chunking: RecursiveCharacterTextSplitter (chunk_size=500, overlap=50)

# API Route: POST /api/chat
# Input: { message: string, history: Message[] }
# Output: { response: string }
```

**System Prompt for chatbot:**
```
You are Fazeel's personal AI assistant embedded in his portfolio website.
You answer questions about Muhammad Fazeel — his projects, experience, skills,
education, and availability. Be conversational, concise, and friendly.
If asked something not in your knowledge base, say you don't have that info
but the visitor can reach Fazeel directly at muhammad.fazeel8904@gmail.com.
Never make up information. Keep answers under 150 words unless detail is needed.
```

---

### 8. ACHIEVEMENTS & LEADERSHIP SECTION

**Heading:** `Beyond the Code`

Display as a **3-column card grid** with icons:

- 🏆 **Top 3 Nationally** — Represented University of the Punjab in national academic quiz competitions, achieving Top 3 finishes at FJMU, UET, and CMH events
- 💻 **ICPC Organizer** — Volunteered in organizing the ICPC Asia West Regional Onsite Round at PUCIT, managing logistics and participant coordination for 100+ competitive programmers
- 📋 **PEF Training Event Organizer** — Coordinated logistics and audience engagement for a large-scale national training event
- 🎓 **Teaching Assistant (3 courses)** — Simultaneously TA for AI, Software Engineering, and Mobile Development at PUCIT
- 📚 **GPA 3.30 / 4.00** — Maintaining strong academic performance while working professionally and leading extracurriculars

---

### 9. CONTACT SECTION

**Heading:** `Let's Build Something`  
**Subheading:** `Open to internships, freelance projects, and collaborations.`

- Clean contact form (Name, Email, Message) — connect to Resend or Formspree
- Direct contact cards:
  - 📧 muhammad.fazeel8904@gmail.com
  - 💼 linkedin.com/in/muhammad-fazeel-48484a264
  - 🐙 github.com/FazeelAr
  - 📍 Lahore, Pakistan
- Availability badge: **"✅ Open to Internships — Remote & On-site"**

---

### 10. FOOTER

- Name + tagline: `"Muhammad Fazeel — Building at the intersection of AI and software."`
- Quick nav links
- Social icons
- `"Built with Next.js, Tailwind & shadcn/ui"`
- Copyright `© 2025 Muhammad Fazeel`

---

## PERSONAL INFORMATION REFERENCE

```
Full Name:        Muhammad Fazeel
Location:         Lahore, Pakistan
Phone:            +92 312 6226258
Email:            muhammad.fazeel8904@gmail.com
LinkedIn:         linkedin.com/in/muhammad-fazeel-48484a264
GitHub:           github.com/FazeelAr
University:       University of the Punjab — PUCIT
Degree:           BS Software Engineering
Year:             3rd Year (2023–2027)
GPA:              3.30 / 4.00

Current Role:     Software Engineering Intern @ Xonfo Solutions
                  Teaching Assistant — AI Course @ PUCIT

Interests:        LLMs, AI Agents, RAG Systems, Full-Stack Web Dev,
                  Open Source, Competitive Quizzing

Availability:     Open to internships (Remote & On-site, Lahore)

Certifications:
  - Automate Cybersecurity Tasks with Python — Google / Coursera
  - Python Data Structures — University of Michigan / Coursera
  - Using Python to Access Web Data — University of Michigan / Coursera
  - Using Databases with Python — University of Michigan / Coursera
  - From Relational Model (SQL) to MongoDB's Document Model — MongoDB University
```

---

## ADDITIONAL IMPLEMENTATION NOTES

1. **Performance:** Use `next/image` for all images. Lazy load sections. Target Lighthouse score 90+.
2. **SEO:** Add metadata, Open Graph tags, and structured JSON-LD for the homepage.
3. **Animations:** Hero entrance animation on load. Sections animate in on scroll using Framer Motion `whileInView`. Project cards have hover lift + glow. Timeline items slide in from left.
4. **Mobile:** Fully responsive. Stack columns on mobile. Chatbot full-screen on small screens.
5. **Accessibility:** Proper ARIA labels, focus states, keyboard navigation.
6. **Resume Download:** Host the PDF resume as `/public/fazeel-resume.pdf` and link the download button to it.
7. **Environment Variables needed:**
   ```
   GOOGLE_API_KEY=       # Gemini API key
   NEXT_PUBLIC_SITE_URL= # Your Vercel URL
   ```
8. **Folder Structure:**
   ```
   /app
     /page.tsx            # Homepage (all sections)
     /api/chat/route.ts   # Chatbot API endpoint
   /components
     /sections/           # Hero, About, Experience, Projects, Skills, Contact
     /ui/                 # shadcn components
     /chatbot/            # Chat UI components
   /lib
     /rag.ts              # RAG pipeline (ChromaDB + LangChain + Gemini)
     /knowledge-base.ts   # All Fazeel's data as text chunks
   /public
     /fazeel-resume.pdf
   ```

---

*Generate a complete, working Next.js 14 portfolio with all sections above. Use App Router. Every section should be a separate component. The chatbot RAG pipeline should be fully functional. Prioritize visual quality — this portfolio should stand out.*
