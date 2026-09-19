export const profile = {
  name: 'Het Mehta',
  title: 'Full Stack Software Engineer',
  email: 'hetmayur@usc.edu',
  github: 'https://github.com/hetmmehta',
  linkedin: 'https://linkedin.com/in/het-mehta-',
  location: 'Los Angeles, CA',
  summary:
    "Full Stack Software Engineer with an M.S. in Computer Science from USC. I build production web and mobile applications end-to-end — from React/React Native front ends to REST/GraphQL APIs and cloud deployments — with a growing focus on shipping AI-powered products using LLMs, RAG pipelines, and computer vision.",
}

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'Go', 'Java', 'C++', 'SQL', 'Dart'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React.js', 'Next.js (App Router)', 'React Native', 'Angular', 'SwiftUI', 'HTML5/CSS3', 'PWA'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'GraphQL', 'Microservices', 'JWT', 'OAuth 2.0', 'Prisma ORM'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Oracle', 'SQLAlchemy'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda)', 'GCP (App Engine)', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform'],
  },
  {
    category: 'AI & ML',
    items: ['Anthropic Claude', 'Gemini', 'RAG Pipelines', 'LangChain', 'Prompt Engineering', 'TensorFlow', 'Computer Vision'],
  },
]

export const experience = [
  {
    role: 'Full Stack Software Engineer',
    company: 'Easely-Dunn Productions',
    location: 'Torrance, CA',
    period: 'Aug 2025 – Present',
    points: [
      'Architected and shipped OTP-based authentication using React Native and Firebase Auth, eliminating auth failures across consumer-facing flows for a production iOS/Android application.',
      'Designed RESTful APIs backed by PostgreSQL for real-time, scalable cross-platform data delivery; owned end-to-end iOS release pipeline via Xcode including dependency resolution and CI/CD stabilization.',
      'Translated high-fidelity Figma prototypes into production-ready React Native UI components, optimizing rendering performance across device types.',
    ],
  },
  {
    role: 'Web Applications Intern',
    company: 'Genesco Inc.',
    location: 'Nashville, TN',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Designed and built a Python/Flask data migration platform (Smartsheet → Oracle), improving storage efficiency by 70% through optimized schema design and ETL pipelines.',
      'Optimized complex SQL queries via SQLAlchemy ORM with indexing strategies, reducing query execution time by 30%; containerized CI/CD with Docker and Jenkins, cutting deployment time by 40%.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Ruchi Infotech',
    location: 'Mumbai, India',
    period: 'Oct 2022 – Jan 2023',
    points: [
      "Redesigned and upgraded the company's official website using the MERN stack, integrating a CMS for seamless content updates.",
      'Implemented social media optimization and SEO-friendly keyword search, increasing consumer engagement by 20%.',
    ],
  },
  {
    role: 'Application Development Intern',
    company: 'Capgemini',
    location: 'Navi Mumbai, India',
    period: 'Dec 2021 – Mar 2022',
    points: [
      'Built a production-ready cross-platform Flutter (Dart) mobile app from Figma prototypes, delivering a fully functional MVP within 3 months.',
      'Integrated Google OAuth 2.0 SSO, reducing login error rates by 25%.',
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  stack: string[]
  github?: string
  demo?: string
  status?: 'ongoing' | 'complete'
}

export const projects: Project[] = [
  {
    name: 'Dear Diary',
    tagline: 'AI Journaling PWA',
    description:
      'A multi-persona AI journaling app with distinct companion personalities across concurrent threads. Features voice-to-text journaling, client-side image compression, calendar-indexed retrieval, and an offline-first crisis-language safety check — delivered as a fully installable PWA.',
    stack: ['Next.js 14', 'React', 'PostgreSQL', 'Prisma', 'NextAuth', 'Anthropic Claude API'],
    github: 'https://github.com/hetmmehta/DailyJournal',
    demo: 'https://dear-diary-het-fc19.vercel.app',
    status: 'ongoing',
  },
  {
    name: 'DocMind',
    tagline: 'RAG-Powered Knowledge Base',
    description:
      'A production RAG system that ingests PDFs and documents, chunks and embeds them into a ChromaDB vector store, and enables semantic search with grounded, citation-backed answers via a LangChain + Gemini pipeline.',
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gemini', 'Flask', 'React'],
    github: 'https://github.com/hetmmehta/DocMind',
  },
  {
    name: 'StockApp',
    tagline: 'Real-Time Stock Analytics Platform',
    description:
      'A full-stack stock analysis app integrating Finnhub and Polygon.io APIs for real-time price feeds, ticker search, and historical OHLC data with interactive candlestick and time-series charts. Deployed on GCP App Engine with automated scaling.',
    stack: ['Node.js', 'Angular', 'TypeScript', 'MongoDB', 'GCP'],
    github: 'https://github.com/hetmmehta/StockApp',
  },
  {
    name: 'Atelier',
    tagline: 'AI Personal Stylist',
    description:
      'A full-stack AI styling platform integrating LLM and computer vision APIs for clothing attribute detection and personalized outfit generation via natural language prompt engineering, with microservices architecture and TanStack Query async state management.',
    stack: ['Python', 'React', 'TypeScript', 'LLM', 'Computer Vision APIs'],
    github: 'https://github.com/hetmmehta/Atelier',
  },
  {
    name: 'Recipe Notebook',
    tagline: 'Full-Stack Recipe Manager',
    description:
      'A full-stack app to create, view, and delete recipes with real-time updates through Apollo GraphQL, an Angular front end, and a Node.js/MongoDB backend.',
    stack: ['Angular', 'Apollo GraphQL', 'Node.js', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/hetmmehta/Meal_Planner',
  },
  {
    name: 'Recruiter Reachout',
    tagline: 'AI Job Outreach Tool',
    description:
      'An end-to-end recruiter outreach tool powered by Google AI Studio (Gemini API) that accepts a job description URL, identifies the hiring company and relevant recruiter contacts, and drafts a personalized, role-specific cold email.',
    stack: ['Python', 'Flask', 'Google AI Studio', 'Gemini API'],
  },
]

export const education = [
  {
    school: 'University of Southern California',
    degree: 'M.S. Computer Science',
    detail: 'GPA: 3.77 · Algorithms, Machine Learning, NLP, Deep Learning, Information Retrieval, Distributed Systems',
    period: 'Aug 2023 – May 2025',
  },
  {
    school: 'University of Mumbai',
    degree: 'B.E. Computer Science',
    detail: 'CGPA: 9.57/10',
    period: 'Aug 2019 – May 2023',
  },
]

export const certifications = ['AWS Certified AI Practitioner (AIF-C01) — Amazon Web Services, 2026']
