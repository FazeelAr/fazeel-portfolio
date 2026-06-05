# Muhammad Fazeel — Personal Portfolio

A modern, production-grade personal portfolio website built with Next.js 14, Tailwind CSS, and featuring an AI-powered chatbot powered by LangChainJS, Sentence Transformers, and Google Gemini API.

## 🚀 Features

- **Modern Design**: Dark mode by default with light mode toggle
- **Responsive**: Fully mobile-responsive design
- **Smooth Animations**: Framer Motion animations for sections and transitions
- **AI Chatbot**: RAG-based chatbot with Gemini API integration
- **Performance**: Optimized for Lighthouse score 90+
- **SEO Friendly**: Metadata, Open Graph tags, and JSON-LD structured data
- **Accessible**: ARIA labels, focus states, and keyboard navigation

## 📋 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI/LLM**: LangChainJS, Google Gemini API
- **Icons**: Lucide React, React Icons
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🛠️ Installation

### Prerequisites
- Node.js 18+ (recommended 20+)
- npm or yarn
- Google Gemini API key

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Gemini API key:
   ```
   GOOGLE_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with navbar & footer
│   ├── page.tsx            # Homepage (all sections)
│   ├── globals.css         # Global styles & theme
│   └── api/
│       └── chat/route.ts   # AI chatbot API endpoint
├── components/
│   ├── navbar.tsx          # Navigation bar with theme toggle
│   ├── footer.tsx          # Footer
│   ├── sections/           # Portfolio sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── achievements.tsx
│   │   └── contact.tsx
│   └── chatbot/            # Chatbot UI components
│       ├── chatbot.tsx
│       └── chat-message.tsx
├── lib/
│   ├── data.ts             # Portfolio data & knowledge base
│   └── utils.ts            # Utility functions
├── public/                 # Static assets & resume
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
```

## 🤖 AI Chatbot Implementation

The chatbot is a RAG (Retrieval-Augmented Generation) system with:

- **Vector Store**: In-memory embeddings computed from portfolio knowledge base
- **Embedding Model**: Simple hash-based embeddings (optimized for browser/serverless)
- **LLM**: Google Gemini 1.5 Flash via LangChainJS
- **Retrieval**: Cosine similarity-based semantic search

### How It Works

1. User sends a question via the chat interface
2. The `/api/chat` route receives the message
3. Relevant knowledge chunks are retrieved using semantic similarity
4. Chunks are provided as context to Gemini
5. Gemini generates a conversational response
6. Response is streamed back to the user

### Customizing the Knowledge Base

Edit `lib/data.ts` to update the portfolio data. The knowledge base is automatically generated from:
- Site metadata
- Experience descriptions
- Project details
- Skills lists
- Achievements

## 📝 Customization

### Update Portfolio Content
Edit `lib/data.ts` to modify:
- Personal information
- Experience items
- Projects
- Skills
- Achievements
- Contact information

### Styling & Colors
Edit `app/globals.css` and `tailwind.config.ts` to customize:
- Color palette
- Fonts
- Animations
- Theme variables

### Resume Download
Place your resume PDF at `public/fazeel-resume.pdf` and update the download link in the hero section if needed.

## 🔐 Environment Variables

Required:
- `GOOGLE_API_KEY`: Your Google Gemini API key ([Get one here](https://ai.google.dev/))

Optional:
- `NEXT_PUBLIC_SITE_URL`: Your production URL (for SEO)

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Add environment variables from `.env.local`
   - Deploy

### Deploy Elsewhere

```bash
npm run build
npm run start
```

## 📊 Performance

- **Lighthouse Score Target**: 90+
- **Page Speed**: < 2s First Contentful Paint
- **Optimizations**:
  - Next.js Image optimization
  - Code splitting & lazy loading
  - CSS-in-JS minimization
  - Vercel edge caching

## 🔍 SEO

The portfolio includes:
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- JSON-LD structured data
- Sitemap-ready structure
- Mobile-first responsive design

## 🎨 Design System

### Colors (Dark Mode)
- Background: `#0a0a0a`
- Primary Accent: `#3b82f6` (Electric Blue)
- Secondary Accent: `#8b5cf6` (Violet)
- Text: `#e5e7eb`
- Muted: `#6b7280`
- Card: `#111111`

### Typography
- Font: System fonts (-apple-system, Segoe UI, Roboto)
- Sizes: Responsive scaling via Tailwind
- Line Height: 1.6x for readability

## 📞 Contact & Support

- **Email**: muhammad.fazeel8904@gmail.com
- **GitHub**: [@FazeelAr](https://github.com/FazeelAr)
- **LinkedIn**: [Muhammad Fazeel](https://linkedin.com/in/muhammad-fazeel-48484a264)

## 📄 License

This portfolio is open source and available under the MIT License.

---

**Built with ❤️ by Muhammad Fazeel**
