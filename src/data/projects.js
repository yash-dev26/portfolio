/**
 * Featured work — pulled from github.com/yash-dev26 pinned repositories.
 */

export const projects = [
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
];
