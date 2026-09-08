/**
 * Portfolio Profile Data - Yashwardhan Singh (@yash-dev26)
 *
 * Sourced from https://github.com/yash-dev26 (profile README + pinned repos).
 * Edit this file to update your personal details, bio, tech stack,
 * work experience, featured projects, and certifications.
 */

export const profileData = {
  personal: {
    name: "Yashwardhan Singh",
    handle: "@yash-dev26",
    role: "Backend Engineer & Applied AI",
    // Rotates in the hero as a slideshow. Edit/add as many as you like.
    roles: ["Software Engineer", "Backend Engineer", "Applied AI Engineer", "3rd Year B.Tech IT Student"],
    tagline: "Building scalable backend systems, LangGraph orchestration, and production-ready RAG pipelines.",
    status: "Available for roles",
    statusType: "active", // active, busy, or hired
    statusDetail: "Open to backend & Applied AI internships and collaborations",
    location: "New Delhi, India",
    avatar: "assets/avatar.jpeg",
    coverBanner: "linear-gradient(135deg, #090d16 0%, #1e1b4b 50%, #0f172a 100%)",
    resumeUrl: "/assets/resume.pdf",
    email: "yash.pvt2601@gmail.com",
    calLink: "", // paste your Cal.com (or Calendly) booking link here, e.g. "https://cal.com/yash-dev26/30min"

    bio: "Backend Engineer & Applied AI practitioner and 3rd-year B.Tech IT student. I build production-oriented backend systems and Applied AI applications, focused on distributed backend architecture, RAG pipelines, and LLM agent orchestration.",

    extendedBio: [
      "I build production-oriented backend systems and Applied AI applications rather than just functional prototypes.",
      "My focus areas are distributed backend architecture, RAG pipelines, LLM agents/orchestration (LangChain & LangGraph), and designing software that holds up under real constraints.",
      "Currently exploring distributed systems & scalable service architecture, and sharpening Data Structures & Algorithms."
    ],
  },

  socialLinks: {
    github: "https://github.com/yash-dev26",
    linkedin: "https://www.linkedin.com/in/yashwardhan-singh-a5191a330",
    twitter: "https://twitter.com/SinghGeekjs",
    email: "yash.pvt2601@gmail.com"
  },

  heroStats: [
    { label: "Public Repos", value: "16", detail: "Projects on GitHub" },
    { label: "Ragas Faithfulness", value: "0.93", detail: "Adaptive RAG evaluation, 8-case golden set" },
    { label: "Routing Accuracy", value: "7/7", detail: "Adaptive RAG graph-path correctness suite" },
    { label: "Focus", value: "Applied AI", detail: "RAG pipelines & LangGraph agent orchestration" }
  ],

  // Tech Stack & Skills (Categorized) — from the GitHub profile README
  techCategories: [
    { id: "all", name: "All Technologies" },
    { id: "languages", name: "Languages" },
    { id: "backend", name: "Backend" },
    { id: "ai", name: "Applied AI" },
    { id: "databases", name: "Databases & Infra" },
    { id: "frontend", name: "Frontend" },
    { id: "devops", name: "DevOps & Tooling" }
  ],

  techStack: [
    // Languages
    {
      name: "JavaScript",
      category: "languages",
      icon: "Code2",
      level: "Proficient",
      highlight: "ES6+, Async/Await, Node runtime",
      description: "Core language for backend services and tooling.",
      badgeColor: "from-yellow-500/20 to-amber-500/10 text-yellow-300 border-yellow-500/30"
    },
    {
      name: "TypeScript",
      category: "languages",
      icon: "FileCode",
      level: "Proficient",
      highlight: "Typed APIs, generics, safer refactors",
      description: "Used across backend services and CLI tooling for type safety.",
      badgeColor: "from-blue-500/20 to-sky-500/10 text-blue-300 border-blue-500/30"
    },
    {
      name: "Python",
      category: "languages",
      icon: "Code2",
      level: "Proficient",
      highlight: "FastAPI, Asyncio, LangGraph",
      description: "Primary language for Applied AI work — agent orchestration and RAG pipelines.",
      badgeColor: "from-sky-500/20 to-blue-500/10 text-sky-300 border-sky-500/30"
    },

    // Backend
    {
      name: "Node.js & Express",
      category: "backend",
      icon: "Server",
      level: "Proficient",
      highlight: "REST APIs, middleware, async patterns",
      description: "Building backend services and microservices.",
      badgeColor: "from-lime-500/20 to-green-500/10 text-lime-300 border-lime-500/30"
    },
    {
      name: "Fastify",
      category: "backend",
      icon: "Zap",
      level: "Proficient",
      highlight: "High-throughput HTTP services",
      description: "Used in AlgoHub's microservices for low-overhead request handling.",
      badgeColor: "from-emerald-500/20 to-teal-500/10 text-emerald-300 border-emerald-500/30"
    },
    {
      name: "FastAPI",
      category: "backend",
      icon: "Server",
      level: "Proficient",
      highlight: "Async endpoints, SSE streaming, Pydantic schemas",
      description: "Backend framework behind Adaptive RAG's chat, upload, and thread APIs.",
      badgeColor: "from-teal-500/20 to-cyan-500/10 text-teal-300 border-teal-500/30"
    },

    // Applied AI
    {
      name: "LangChain",
      category: "ai",
      icon: "Bot",
      level: "Proficient",
      highlight: "Chains, retrieval, tool integration",
      description: "Orchestration layer for retrieval-augmented generation workflows.",
      badgeColor: "from-cyan-500/20 to-teal-500/10 text-cyan-300 border-cyan-500/30"
    },
    {
      name: "LangGraph",
      category: "ai",
      icon: "Bot",
      level: "Proficient",
      highlight: "Adaptive routing, conditional edges, state graphs",
      description: "Powers Adaptive RAG's decision-based retrieval pipeline instead of a fixed retrieve→generate flow.",
      badgeColor: "from-purple-500/20 to-indigo-500/10 text-purple-300 border-purple-500/30"
    },
    {
      name: "Qdrant",
      category: "ai",
      icon: "Database",
      level: "Proficient",
      highlight: "Hybrid dense + sparse search, RRF fusion",
      description: "Vector database used for hybrid retrieval and semantic response caching.",
      badgeColor: "from-red-500/20 to-rose-500/10 text-red-300 border-red-500/30"
    },
    {
      name: "OpenAI API",
      category: "ai",
      icon: "Sparkles",
      level: "Proficient",
      highlight: "Generation, evidence grading, embeddings",
      description: "Used for final generation and embeddings (text-embedding-3-small) in a BYOK flow.",
      badgeColor: "from-emerald-500/20 to-cyan-500/10 text-emerald-300 border-emerald-500/30"
    },
    {
      name: "LangSmith",
      category: "ai",
      icon: "Activity",
      level: "Familiar",
      highlight: "Trace inspection, run debugging",
      description: "Tracing and debugging LangChain/LangGraph runs during development.",
      badgeColor: "from-violet-500/20 to-purple-500/10 text-violet-300 border-violet-500/30"
    },
    {
      name: "Ragas Eval",
      category: "ai",
      icon: "Gauge",
      level: "Proficient",
      highlight: "Faithfulness, relevancy, precision/recall",
      description: "RAG evaluation framework used to score Adaptive RAG's retrieval quality against a golden set.",
      badgeColor: "from-amber-500/20 to-orange-500/10 text-amber-300 border-amber-500/30"
    },

    // Databases & Infra
    {
      name: "MongoDB",
      category: "databases",
      icon: "FolderGit2",
      level: "Proficient",
      highlight: "Thread history, LangGraph checkpoints",
      description: "Document storage for conversation threads and submission records.",
      badgeColor: "from-green-500/20 to-emerald-500/10 text-green-300 border-green-500/30"
    },
    {
      name: "Redis",
      category: "databases",
      icon: "Layers",
      level: "Proficient",
      highlight: "Caching, BullMQ queues, semantic cache",
      description: "Embedding/response caching and queue-driven async job processing.",
      badgeColor: "from-rose-500/20 to-red-500/10 text-rose-300 border-rose-500/30"
    },
    {
      name: "Docker",
      category: "databases",
      icon: "Box",
      level: "Proficient",
      highlight: "Multi-stage builds, sandboxed code execution",
      description: "Container-based deployment and isolated execution for untrusted code.",
      badgeColor: "from-sky-500/20 to-cyan-500/10 text-sky-300 border-sky-500/30"
    },
    {
      name: "PostgreSQL",
      category: "databases",
      icon: "Database",
      level: "Familiar",
      highlight: "Relational data modeling",
      description: "Relational database used in backend projects where a fixed schema fits better.",
      badgeColor: "from-blue-500/20 to-indigo-500/10 text-blue-300 border-blue-500/30"
    },

    // Frontend
    {
      name: "React",
      category: "frontend",
      icon: "Layout",
      level: "Proficient",
      highlight: "Hooks, Vite, component design",
      description: "Frontend for project demos — chat UIs, dashboards, and this portfolio.",
      badgeColor: "from-cyan-400/20 to-teal-400/10 text-cyan-300 border-cyan-400/30"
    },
    {
      name: "TailwindCSS",
      category: "frontend",
      icon: "Palette",
      level: "Proficient",
      highlight: "Utility-first styling, dark theme UIs",
      description: "Styling for every frontend project, including this portfolio.",
      badgeColor: "from-sky-400/20 to-teal-400/10 text-sky-300 border-sky-400/30"
    },

    // DevOps & Tooling
    {
      name: "GitHub Actions",
      category: "devops",
      icon: "GitBranch",
      level: "Familiar",
      highlight: "CI pipelines, automated checks",
      description: "Automating builds, tests, and deploys for personal projects.",
      badgeColor: "from-indigo-500/20 to-violet-500/10 text-indigo-300 border-indigo-500/30"
    }
  ],

  // Work & Experience Timeline — no employer history is publicly listed on GitHub;
  // this reflects the actual public status (student + self-directed project work).
  experiences: [
    {
      role: "3rd Year B.Tech, Information Technology",
      company: "Self-directed Backend & Applied AI projects",
      location: "New Delhi, India",
      period: "2023 — Present",
      type: "Student / Independent",
      description: "Studying IT while building production-oriented backend systems and Applied AI applications outside of coursework.",
      achievements: [
        "Built Adaptive RAG, a LangGraph-orchestrated RAG system with adaptive routing, CRAG-style evidence evaluation, and three-layer caching, evaluated at 0.93 mean faithfulness on an 8-case Ragas golden set.",
        "Designed AlgoHub, a distributed code-judge platform with 4 decoupled microservices and Docker-based sandboxed execution for untrusted code.",
        "Actively exploring distributed systems, scalable service architecture, and Data Structures & Algorithms."
      ],
      skills: ["Python", "TypeScript", "Node.js", "FastAPI", "LangChain", "LangGraph", "Qdrant", "MongoDB", "Redis", "Docker"]
    }
  ],

  // Projects & Featured Work — pulled from github.com/yash-dev26 pinned repositories
  projects: [
    {
      id: "adaptive-rag",
      title: "Adaptive RAG — Decision-Driven Retrieval System",
      category: "Applied AI & RAG",
      featured: true,
      badge: "Featured AI Architecture",
      summary: "A production-oriented RAG system that treats retrieval as a series of decisions, not a fixed pipeline, built with LangGraph orchestration on a bring-your-own-key architecture.",
      description: "Adaptive Routing decides whether a query even needs retrieval, skipping the vector store for chit-chat or general knowledge. A CRAG-style evaluation layer grades retrieved context and routes to generate, rewrite & retry, or fall back. Query rewriting uses Reciprocal Rank Fusion, a Cohere reranker fires only on ambiguous rankings, and a Redis-backed semantic cache sits alongside multi-provider LLM orchestration (OpenAI + Groq). Deployed under a 512MB memory constraint on Render.",
      previewImage: "/assets/project-adaptive-rag.png",
      tags: ["Python", "LangGraph", "FastAPI", "Qdrant", "Redis", "MongoDB", "React"],
      highlights: [
        "Adaptive routing skips the vector store entirely for chit-chat or general knowledge via a heuristic + LLM planner.",
        "CRAG-style evidence evaluation grades retrieved context and routes to generate, rewrite/retry, or fall back to general knowledge.",
        "Evaluated at 0.93 mean faithfulness and 7/7 routing scenarios passed against real graph traces."
      ],
      stats: {
        faithfulness: "0.93 mean",
        routing: "7/7 scenarios passed",
        memory: "512MB deployment budget"
      },
      repoUrl: "https://github.com/yash-dev26/adaptive-RAG",
      liveUrl: "https://adaptive-rag-1.vercel.app/",
      videoUrl: ""
    },
    {
      id: "algohub",
      title: "AlgoHub — Distributed Code Submission & Evaluation Platform",
      category: "Backend & Systems",
      featured: true,
      badge: "Microservices",
      summary: "A scalable, distributed code submission and evaluation platform — LeetCode-style — where users solve DSA problems and get real-time evaluation results.",
      description: "Built on a microservices architecture with queue-based communication: an enqueuer service, an evaluation service running Docker-sandboxed code execution, a problem management service, and a WebSocket service for real-time verdicts — no polling required.",
      previewImage: "/assets/project-algohub.png",
      tags: ["Node.js", "Fastify", "TypeScript", "Docker", "Redis", "MongoDB", "React"],
      highlights: [
        "4 decoupled microservices — enqueuer, evaluation, problem management, WebSocket delivery — each independently scalable.",
        "Secure, Docker-based sandboxed execution to safely run untrusted code submissions across multiple languages.",
        "Asynchronous evaluation pipeline via BullMQ + Redis, with real-time verdicts pushed over WebSockets."
      ],
      stats: {},
      repoUrl: "https://github.com/yash-dev26/AlgoHub",
      liveUrl: "https://youtu.be/A7Ndz_8rat0",
      videoUrl: "https://youtu.be/A7Ndz_8rat0"
    },
    {
      id: "ai-support-agent",
      title: "AI Support Agent",
      category: "Applied AI",
      featured: false,
      badge: "In Progress",
      summary: "A Python-based AI support agent service — early-stage project structured around an app/tests layout with Docker packaging.",
      description: "A backend service for AI-driven support/agent workflows. Still early-stage with limited public documentation — structured as a standard Python service (app + tests + Dockerfile) ready to be extended.",
      previewImage: "/assets/project-ai-support-agent.png",
      tags: ["Python", "Docker"],
      highlights: [
        "Standard Python service layout with a Dockerfile for containerized deployment.",
        "Early-stage — structure in place for an AI agent-driven support workflow."
      ],
      stats: {},
      repoUrl: "https://github.com/yash-dev26/AI-Support-Agent",
      liveUrl: "",
      videoUrl: ""
    },
    {
      id: "krypt-ai",
      title: "Krypt-AI",
      category: "Tools",
      featured: false,
      badge: "In Progress",
      summary: "A TypeScript CLI-style project — early-stage, structured with a bin/src layout typical of a Node.js command-line tool.",
      description: "An early-stage TypeScript project (bin + src + tsconfig) — no public description yet, actively evolving.",
      previewImage: "/assets/project-krypt-ai.png",
      tags: ["TypeScript", "Node.js"],
      highlights: [
        "CLI-style project structure (bin/src) built with TypeScript.",
        "Early-stage — check the repo for the latest progress."
      ],
      stats: {},
      repoUrl: "https://github.com/yash-dev26/Krypt-AI",
      liveUrl: "",
      videoUrl: ""
    }
  ],

  // Certifications & Achievements — none are publicly listed on the GitHub profile yet.
  // Add your real certifications here; the section hides itself when this is empty.
  certifications: []
};
