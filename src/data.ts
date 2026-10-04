export const profile = {
  name: 'Het Mehta',
  title: 'Software Engineer',
  email: 'hetmehta01@gmail.com',
  github: 'https://github.com/hetmmehta',
  linkedin: 'https://linkedin.com/in/het-mehta-',
  location: 'Washington, DC area',
  resume: `${import.meta.env.BASE_URL}Het_Mehta_Resume.pdf`,
  summary:
    "Software Engineer at Punita Group with an M.S. in Computer Science from USC. I build production web and mobile applications end to end — React and React Native front ends, REST and GraphQL APIs, PostgreSQL-backed services and cloud deployments — and increasingly, AI-powered tools built on Claude and Gemini that take repetitive operational work off people's plates.",
}

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'Go', 'Java', 'C++', 'SQL', 'Dart'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React.js', 'Next.js (App Router)', 'React Native', 'Angular', 'SwiftUI', 'Flutter', 'HTML5/CSS3', 'PWA'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'GraphQL', 'Microservices', 'JWT', 'OAuth 2.0', 'NextAuth', 'Prisma ORM'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Oracle', 'SQLAlchemy', 'Data Modeling'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda)', 'GCP (App Engine)', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform'],
  },
  {
    category: 'AI & ML',
    items: ['AI Agents', 'LLM Integration', 'Anthropic Claude', 'Claude Code', 'Gemini', 'RAG Pipelines', 'LangChain', 'Prompt Engineering', 'TensorFlow', 'Computer Vision'],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Punita Group Inc.',
    location: 'Sterling, VA',
    period: 'Jul 2026 – Present',
    points: [
      "Pitched and built an internal HTS tariff and duty tracking tool for the import team, covering a catalog of about 10,000 items and 660+ historical customs entries. Looking up an item's duty used to take 20–30 minutes of manual cross-referencing; with the tool it takes about 5.",
      "Modeled 27 separate duty layers, including Section 301, Section 232 and IEEPA tariffs, across 400+ HTS codes pulled from the USITC tariff schedule. The tool compares each item's current stacked duty with the rate on its last customs entry and flags anything that changed, which caught 2 duty increases before the goods shipped.",
      'Set up a daily AI agent on Claude that sweeps the company mailbox for new customs entries and checks each one against its linked purchase orders, invoices and container records across 120+ shipments.',
      'The agent flags mismatches for the team to review and writes verified updates back to the database, so records stay current without manual data entry. So far it has caught 5 misclassified PO lines.',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Easley-Dunn Productions, Inc.',
    location: 'Torrance, CA',
    period: 'Aug 2025 – Jun 2026',
    points: [
      'Led end-to-end development of a cross-platform safety app in React Native and SwiftUI, owning the architecture from the first prototype through internal testing to production release on iOS and Android.',
      "Designed the app's navigation flow, feature interactions and component structure from scratch, starting as the Figma mockups used in early demos. I built them into 15+ production React Native screens that the rest of the team built on.",
      'Built the full authentication flow (sign-up, login, OTP verification and password reset) with Firebase Auth and REST APIs for a production app with 30+ active users. Account recovery is self-serve, so locked-out users can get back in on their own.',
      "Designed REST APIs backed by PostgreSQL for in-app chat and real-time location tracking, the app's core safety feature: in an emergency, users can share their live location with trusted contacts and message them directly.",
      'Owned the iOS release pipeline in Xcode. I standardized the build process to cut down on dependency issues and managed TestFlight builds for testers and production ahead of a 100+ student pilot and the App Store and Play Store releases.',
      'Worked with stakeholders to scope features, set timelines and keep technical decisions tied to product goals, acting as the bridge between design and engineering.',
    ],
  },
  {
    role: 'Web Application Intern',
    company: 'Genesco',
    location: 'Nashville, TN',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Replaced a slow Smartsheet-based ticketing workflow with a Python/Flask backend on Oracle, moving tickets out of spreadsheets and into a relational database. Ticket submission became 70% faster.',
      'Used SQLAlchemy ORM for the database layer, and added indexes and rewrote queries on the hot paths, making them about 30% faster.',
      'Integrated AG Grid on the front end so the team could sort, filter and work through ticket data in one interactive table.',
      'Containerized the build and deploy pipeline with Docker and Jenkins, cutting deploy times by 40%.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Ruchi Infotech',
    location: 'Mumbai, India',
    period: 'Oct 2022 – Jan 2023',
    points: [
      "Redesigned and rebuilt the company's official website on the MERN stack to match a new set of business requirements.",
      'Integrated a content management system into the React/Node.js site, so the team could post updates and promotions themselves and have them go live right away.',
      'Added social media optimization and SEO-friendly keyword search, improving search rankings and increasing consumer engagement by 20%.',
    ],
  },
  {
    role: 'Application Developer',
    company: 'Capgemini',
    location: 'Mumbai, India',
    period: 'Dec 2021 – Mar 2022',
    points: [
      'Designed 10+ interactive, responsive UI screens in Figma to match client specifications, then built them into a cross-platform Flutter MVP for iOS and Android in 3 months.',
      'Kept business logic in Dart and built the interface from reusable Flutter widget components.',
      'Added Google OAuth 2.0 single sign-on, which improved session handling and cut login errors by 25%.',
      'After a technical review, replaced the planned Firebase database with Floor (local SQLite persistence for Flutter). This cut the dependency on external services and let the app work offline.',
      'Worked in Agile sprints with a product manager and a 5-person development team, using Git for version control, and delivered every milestone within the 3-month timeline.',
    ],
  },
]

import type { ArtVariant } from './components/ProjectArt'

export type Project = {
  name: string
  tagline: string
  points: string[]
  stack: string[]
  github?: string
  demo?: string
  status?: 'ongoing' | 'complete'
  art: ArtVariant
}

export const projects: Project[] = [
  {
    name: 'Dear Diary',
    tagline: 'AI Journaling PWA',
    points: [
      'A private journaling app where you can write entries or talk things through with AI companions. Each companion has its own personality and runs in its own conversation thread, so several can be going at once.',
      'Supportive replies, summaries and check-ins come from the Anthropic Claude API. Only the entry text a user chooses to save is sent to it.',
      'A crisis-language check runs on the device before any API call and always shows crisis resources when it is triggered, so that safety net never depends on the AI responding.',
      'Built on Next.js 14 with NextAuth login and bcrypt-hashed passwords. Data lives in a 7-model Prisma/PostgreSQL schema covering users, personas, conversations, messages, diary entries, images and calendar backgrounds. It also has voice-to-text entries and client-side image compression, and installs to a phone home screen as a PWA.',
    ],
    stack: ['Next.js 14', 'React', 'PostgreSQL', 'Prisma', 'NextAuth', 'Anthropic Claude API'],
    github: 'https://github.com/hetmmehta/DailyJournal',
    demo: 'https://dear-diary-het-fc19.vercel.app',
    status: 'ongoing',
    art: 'diary',
  },
  {
    name: 'DocMind',
    tagline: 'RAG-Powered Knowledge Base',
    points: [
      'Upload a PDF and ask questions about it in plain language. Every answer is grounded in the document and cites the filename and page number it came from.',
      'The ingestion pipeline pulls text out page by page with PyPDF, splits it into overlapping chunks with metadata, embeds each chunk with Gemini and stores it in a ChromaDB vector store.',
      'At query time, a LangChain retrieval chain pulls the most relevant chunks and has Gemini answer using only that context, which keeps it from making things up beyond the source.',
      'A Flask REST API (split into upload and chat routes) sits behind a React/Vite upload-and-chat interface, and it handles Gemini quota errors without crashing.',
    ],
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gemini', 'Flask', 'React'],
    github: 'https://github.com/hetmmehta/DocMind',
    art: 'docmind',
  },
  {
    name: 'StockApp',
    tagline: 'Real-Time Stock Analytics Platform',
    points: [
      'A single-page Angular app for researching stocks: ticker search with autocomplete, a details page showing live price and market status, and tabs for summary, top news, charts and insights.',
      'Real-time quotes and historical OHLC data from Finnhub and Polygon.io, drawn as interactive Highcharts candlestick and time-series charts.',
      'A Node/Express backend proxies every third-party API call, and server-side caching plus background jobs cut out redundant requests to the data providers.',
      'Watchlist and portfolio data are stored in MongoDB Atlas, with a virtual wallet, buy/sell flows and live profit/loss. The app is responsive and deployed on GCP App Engine with automatic scaling.',
    ],
    stack: ['Node.js', 'Angular', 'TypeScript', 'MongoDB', 'GCP'],
    github: 'https://github.com/hetmmehta/StockApp',
    art: 'stock',
  },
  {
    name: 'Atelier',
    tagline: 'AI Personal Stylist',
    points: [
      "Upload photos of your clothes and a vision model tags each item's category, color, season, formality and brand, so your wardrobe catalogs itself.",
      '"Style Me" sends a structured summary of your wardrobe and style profile to an LLM, which follows explicit styling rules (layering order, color harmony, sensible pairings) and returns two complete outfits with styling notes. "Quick Pick" gives one outfit in a single click.',
      'Detects skin tone from a selfie to suggest complementary colors, and "See on Model" generates a full-body image of a model wearing your actual outfit, matched to your body type.',
      'Built with React 18, Vite, Tailwind and shadcn/ui. TanStack Query handles async state, and the app also includes saved outfits and AI-curated shopping picks filtered by budget.',
    ],
    stack: ['Python', 'React', 'TypeScript', 'LLM', 'Computer Vision APIs'],
    github: 'https://github.com/hetmmehta/Atelier',
    art: 'atelier',
  },
  {
    name: 'Recipe Notebook',
    tagline: 'Full-Stack Recipe Manager',
    points: [
      'A recipe manager where you can browse recipes in a card grid, add new ones (title, ingredients, instructions) on their own page, and delete them from the list.',
      'The backend is Node.js and Express running Apollo Server, with a GraphQL schema of queries and mutations over a Mongoose/MongoDB data model.',
      'The Angular 17 front end uses Apollo Client, which refreshes the recipe list automatically after each mutation, so changes show up right away without reloading the page.',
    ],
    stack: ['Angular', 'Apollo GraphQL', 'Node.js', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/hetmmehta/Meal_Planner',
    art: 'recipe',
  },
  {
    name: 'Recruiter Reachout',
    tagline: 'AI Job Outreach Tool',
    points: [
      'Paste in a job posting URL and the tool reads the description to work out the hiring company and the role.',
      'It then finds recruiter contacts at that company who are relevant to the role.',
      "Using the Gemini API through Google AI Studio, it drafts a personalized cold email tied to that specific role and the posting's requirements.",
      'A Python/Flask backend runs the whole flow, from pasted link to ready-to-send email, in one step.',
    ],
    stack: ['Python', 'Flask', 'Google AI Studio', 'Gemini API'],
    art: 'outreach',
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
