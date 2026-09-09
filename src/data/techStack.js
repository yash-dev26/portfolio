/**
 * Tech stack categories and individual skill entries shown in the
 * "Skills & Stack" section.
 */

export const techCategories = [
  { id: "all", name: "All Technologies" },
  { id: "languages", name: "Languages" },
  { id: "backend", name: "Backend" },
  { id: "ai", name: "Applied AI" },
  { id: "databases", name: "Databases & Infra" },
  { id: "frontend", name: "Frontend" },
  { id: "devops", name: "DevOps & Tooling" }
];

export const techStack = [
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
];
