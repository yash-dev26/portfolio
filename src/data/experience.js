/**
 * Work & experience timeline. No employer history is publicly listed,
 * so this reflects actual public status (student + self-directed project work).
 */

export const experiences = [
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
];
