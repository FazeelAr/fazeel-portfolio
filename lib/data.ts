export type Message = {
  role: "user" | "assistant";
  content: string;
};

export const siteData = {
  name: "Muhammad Fazeel",
  shortName: "Fazeel",
  title: "Software Engineer & AI Developer",
  subtitle: "Building intelligent systems and full-stack applications.",
  location: "Lahore, Pakistan",
  email: "muhammad.fazeel8904@gmail.com",
  phone: "+92 312 6226258",
  github: "https://github.com/FazeelAr",
  linkedin: "https://linkedin.com/in/muhammad-fazeel-48484a264",
  resume: "/fazeel-resume.pdf",
  availability: "Open to internships - Remote & on-site",
  education: {
    university: "University of the Punjab - PUCIT",
    degree: "BS Software Engineering",
    year: "2023 - 2027",
    gpa: "3.30 / 4.00",
  },
  typingTitles: [
    "AI Agent Developer",
    "Full Stack Engineer",
    "RAG Systems Builder",
    "Open to Internships",
  ],
};

export const aboutHighlights = [
  { label: "PUCIT, BS Software Engineering", value: "GPA 3.30", icon: "🎓" },
  { label: "Software Engineering Intern", value: "Xonfo Solutions", icon: "💼" },
  { label: "Teaching Assistant", value: "AI Course - 50+ students", icon: "🤖" },
  { label: "Top 3 Nationally", value: "Quiz Competitions", icon: "🏆" },
  { label: "Based in", value: "Lahore, Pakistan", icon: "📍" },
  { label: "Available for", value: "Remote & on-site internships", icon: "🌐" },
];

export const experienceItems = [
  {
    role: "Software Engineering Intern",
    company: "Xonfo Solutions",
    location: "Lahore, Pakistan",
    duration: "Present",
    type: "On-site Internship",
    bullets: [
      "Working on two live SaaS platforms built with ASP.NET Core Web API and Angular: an LMS and an HRMS.",
      "Implemented features following Clean Architecture and Dependency Injection patterns.",
      "Managed PostgreSQL databases using Dapper ORM for optimized raw SQL queries and multi-tenant data isolation.",
      "Collaborated in Agile sprints with code reviews, feature delivery, and cross-functional teamwork.",
    ],
    tags: ["ASP.NET Core", "Angular", "PostgreSQL", "Dapper", "Clean Architecture", "SaaS"],
  },
  {
    role: "Teaching Assistant - Artificial Intelligence",
    company: "University of the Punjab (PUCIT)",
    location: "Lahore, Pakistan",
    duration: "Sep 2025 - Present",
    type: "Teaching Role",
    bullets: [
      "Instructing 50+ students on LLM pipelines, RAG systems, and multi-agent orchestration through hands-on Python labs.",
      "Designed lab sessions covering LangChain workflows, agent tool-calling, and automation pipelines.",
      "Reduced average student debugging time by 30% through structured code reviews.",
    ],
    tags: ["LangChain", "FastAPI", "RAG", "Python", "AI Agents"],
  },
  {
    role: "Teaching Assistant - Software Engineering & Database Systems",
    company: "University of the Punjab (PUCIT)",
    location: "Lahore, Pakistan",
    duration: "Sep 2025 - Jan 2026",
    type: "Teaching Role",
    bullets: [
      "Mentored 40+ students on RESTful API design, relational databases, and full-stack development.",
      "Improved average project completion rate by 25%.",
    ],
    tags: ["Django", "PostgreSQL", "REST APIs", "SQL"],
  },
];

export const projectItems = [
  {
    category: "AI / LLM",
    year: "2025",
    title: "Multi-Agent Task Automation System",
    description:
      "A fully autonomous multi-agent pipeline built with LangGraph - agents decompose tasks, scrape the web, process data, and generate reports with zero human intervention.",
    highlights: [
      "Modular agent nodes with defined roles: scraper, processor, reporter",
      "Automated web scraping and data transformation pipelines",
      "About 60% reduction in manual processing effort",
    ],
    stack: ["Python", "LangGraph", "LangChain", "Web Scraping"],
    links: {},
  },
  {
    category: "AI / LLM",
    year: "2025",
    title: "RAG Document Assistant",
    description:
      "End-to-end RAG pipeline for intelligent document querying. Upload documents, ask questions, get accurate answers in under 2 seconds.",
    highlights: [
      "1,000+ document chunks stored in ChromaDB vector database",
      "40% improvement in retrieval accuracy through advanced chunking and embedding tuning",
      "FastAPI backend and Streamlit frontend",
    ],
    stack: ["Python", "LangChain", "ChromaDB", "FastAPI", "Streamlit", "Prompt Engineering"],
    links: { live: "https://fazeelar-rag-app.streamlit.app/" },
  },
  {
    category: "AI / LLM + Full Stack",
    year: "2025",
    title: "Suvalgyk - AI Recipe Generator",
    description:
      "Accepts ingredient names or a photo and generates a complete recipe with ingredients, steps, and an AI-generated dish image adapted to the time of day. Built for a Lithuanian client.",
    highlights: [
      "Image input processing and prompt engineering with Gemini API",
      "Time-of-day context awareness in recipe generation",
      "International client delivery",
    ],
    stack: ["Django REST Framework", "Next.js", "Gemini API", "Python"],
    links: { live: "https://suvalgyk-frontend.vercel.app/" },
  },
  {
    category: "Full Stack",
    year: "2025",
    title: "MyNGL - Anonymous Q&A Platform",
    description:
      "Anonymous messaging app with real-time response updates. Users get a shareable link; messages arrive instantly via WebSockets.",
    highlights: [
      "Real-time bidirectional communication via Socket.io",
      "Supabase (PostgreSQL) for auth, messaging, and row-level security",
      "Shareable profile links and live notifications",
    ],
    stack: ["Next.js", "Supabase", "Socket.io", "PostgreSQL"],
    links: { live: "https://myngl-two.vercel.app" },
  },
  {
    category: "Full Stack",
    year: "2024",
    title: "Balance & POS Management System",
    description:
      "Business management tool for a chicken wholesale shop. Tracks client balances, transaction history, and generates POS receipts. Replaced a fully manual ledger system.",
    highlights: [
      "Live daily operations for a real business client",
      "Real-time, multi-device accessible",
      "POS receipt generation module",
    ],
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    links: { live: "https://bilal-pos-next.vercel.app/" },
  },
  {
    category: "Web",
    year: "2024",
    title: "APIGA Pakistan Website",
    description: "Responsive, SEO-optimized informational website for APIGA's Pakistan chapter.",
    highlights: [],
    stack: ["React.js", "TailwindCSS"],
    links: { live: "https://apiga.pk" },
  },
  {
    category: "Web",
    year: "2024",
    title: "IBM Overseas Consultants Website",
    description: "Professional marketing website for an overseas consultancy firm.",
    highlights: [],
    stack: ["Next.js", "TailwindCSS"],
    links: { live: "https://ibmcoverseasconsultants.com" },
  },
];

export const skillGroups = [
  { category: "AI & LLM", skills: ["LangChain", "LangGraph", "RAG Systems", "ChromaDB", "Gemini API", "Prompt Engineering", "Multi-Agent Workflows", "Sentence Transformers"] },
  { category: "Frontend", skills: ["Next.js", "React.js", "Angular", "TypeScript", "JavaScript", "TailwindCSS", "shadcn/ui", "Framer Motion"] },
  { category: "Backend", skills: ["Django REST Framework", "FastAPI", "ASP.NET Core Web API", "Flask", "Node.js", "Clean Architecture"] },
  { category: "Databases", skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "SQLite", "ChromaDB", "Dapper ORM"] },
  { category: "Tools", skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Streamlit", "VSCode"] },
  { category: "Soft Skills", skills: ["Technical Communication", "Team Collaboration", "Mentorship", "Problem Solving"] },
];

export const achievementItems = [
  { title: "Top 3 Nationally", description: "Represented University of the Punjab in national academic quiz competitions, achieving Top 3 finishes at FJMU, UET, and CMH events.", icon: "🏆" },
  { title: "ICPC Organizer", description: "Volunteered in organizing the ICPC Asia West Regional Onsite Round at PUCIT, managing logistics and participant coordination for 100+ competitive programmers.", icon: "💻" },
  { title: "PEF Training Event Organizer", description: "Coordinated logistics and audience engagement for a large-scale national training event.", icon: "📋" },
  { title: "Teaching Assistant (3 courses)", description: "Simultaneously TA for AI, Software Engineering, and Mobile Development at PUCIT.", icon: "🎓" },
  { title: "GPA 3.30 / 4.00", description: "Maintaining strong academic performance while working professionally and leading extracurriculars.", icon: "📚" },
];

export const contactLinks = [
  { label: "Email", value: siteData.email, href: `mailto:${siteData.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/muhammad-fazeel-48484a264", href: siteData.linkedin },
  { label: "GitHub", value: "github.com/FazeelAr", href: siteData.github },
  { label: "Location", value: siteData.location, href: "#" },
];

export const socialLinks = [
  { label: "GitHub", href: siteData.github },
  { label: "LinkedIn", href: siteData.linkedin },
  { label: "Email", href: `mailto:${siteData.email}` },
];

export const chatbotQuestions = [
  "What projects have you built?",
  "What's your tech stack?",
  "Are you open to internships?",
  "Tell me about your AI experience",
  "What is your GPA and university?",
];

const projectSummaries = projectItems.map((project) => `${project.title}: ${project.description} Stack: ${project.stack.join(", ")}.`).join(" ");
const experienceSummaries = experienceItems.map((experience) => `${experience.role} at ${experience.company}, ${experience.location}, ${experience.duration}. ${experience.bullets.join(" ")}`).join(" ");
const achievementSummaries = achievementItems.map((item) => `${item.title}: ${item.description}`).join(" ");

export const knowledgeBaseText = `
You are answering questions about Muhammad Fazeel.

Identity:
Name: ${siteData.name}
Location: ${siteData.location}
Email: ${siteData.email}
Phone: ${siteData.phone}
LinkedIn: ${siteData.linkedin}
GitHub: ${siteData.github}
Availability: ${siteData.availability}

Education:
${siteData.education.university}, ${siteData.education.degree}, ${siteData.education.year}, GPA ${siteData.education.gpa}.

Background:
Third-year Software Engineering student at PUCIT, University of the Punjab. He builds responsive Next.js frontends, Django and ASP.NET Core backends, and focuses deeply on AI, agents, automation pipelines, and systems that think.

Experience:
${experienceSummaries}

Projects:
${projectSummaries}

Skills:
AI and LLM: ${skillGroups[0].skills.join(", ")}.
Frontend: ${skillGroups[1].skills.join(", ")}.
Backend: ${skillGroups[2].skills.join(", ")}.
Databases: ${skillGroups[3].skills.join(", ")}.
Tools: ${skillGroups[4].skills.join(", ")}.
Soft skills: ${skillGroups[5].skills.join(", ")}.

Achievements:
${achievementSummaries}

Interests:
LLMs, AI Agents, RAG Systems, Open Source, Full-Stack Web Dev, Competitive Quizzing.

Certifications:
Automate Cybersecurity Tasks with Python - Google / Coursera.
Python Data Structures - University of Michigan / Coursera.
Using Python to Access Web Data - University of Michigan / Coursera.
Using Databases with Python - University of Michigan / Coursera.
From Relational Model (SQL) to MongoDB's Document Model - MongoDB University.

If the question is outside this knowledge base, say you do not have that information and direct the user to ${siteData.email}.
`;